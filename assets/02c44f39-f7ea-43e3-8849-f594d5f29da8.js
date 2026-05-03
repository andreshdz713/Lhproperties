// Mortgage payment calculator, horizontal layout matching reference

function MortgageCalculator() {
  const [price, setPrice] = useState(350000);
  const [down, setDown] = useState(15000);
  const [term, setTerm] = useState(30);
  const [rate, setRate] = useState(3.3);
  const [tax, setTax] = useState(2500);
  const [insurance, setInsurance] = useState(2000);
  const [pmi, setPmi] = useState(150);
  const [calculated, setCalculated] = useState(false);

  const downPct = (down / price) * 100;
  const loan = price - down;
  const r = rate / 100 / 12;
  const n = term * 12;
  const pi = r === 0 ? loan / n : (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const taxM = tax / 12;
  const insM = insurance / 12;
  const total = pi + taxM + insM + (downPct < 20 ? pmi : 0);
  const totalInterest = pi * n - loan;
  const fmt = (v) => '$' + Math.round(v).toLocaleString();
  const fmt2 = (v) => '$' + v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div>
      <section className="section" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="container-narrow" style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="eyebrow" style={{ marginBottom: 28 }}>Calculator</div>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 4.4vw, 64px)', lineHeight: 1.08, fontWeight: 300, letterSpacing: '-0.015em' }}>
            Estimate your payments using the <em style={{ color: 'var(--clay)' }}>mortgage calculator</em>.
          </h2>
        </div>
        <div className="container">
          <div className="calc-grid-4">
            <CalcField label="Purchase Price" value={price} onChange={setPrice} min={100000} max={5000000} step={5000} prefix="$" />
            <CalcField label="Down Payment" value={down} onChange={setDown} min={0} max={price} step={1000} prefix="$" hint={downPct.toFixed(1) + '%'} />
            <CalcField label="Term in Years" value={term} onChange={setTerm} min={10} max={30} step={5} hint="year(s)" integer />
            <CalcField label="Interest Rate (per year)" value={rate} onChange={setRate} min={2} max={12} step={0.1} suffix="%" decimals={2} />
          </div>
          <div className="calc-grid-4" style={{ marginTop: 40, alignItems: 'end' }}>
            <CalcField label="Property Tax" value={tax} onChange={setTax} min={0} max={30000} step={100} prefix="$" hint="per year" />
            <CalcField label="Home Insurance" value={insurance} onChange={setInsurance} min={0} max={10000} step={100} prefix="$" hint="per year" />
            <CalcField label="PMI" value={pmi} onChange={setPmi} min={0} max={500} step={10} prefix="$" hint="per month" />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setCalculated(true)}
                style={{
                  padding: '20px 56px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 13,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  border: '1px solid var(--ink)',
                  background: 'var(--ink)',
                  color: 'var(--bone)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--bone)'; }}
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      </section>

      {calculated && (
        <section className="section" style={{ paddingTop: 40, paddingBottom: 120 }}>
          <div className="container">
            <div style={{ background: 'var(--ink)', color: 'var(--bone)', padding: '72px 64px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'center' }}>
                <div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--clay)', marginBottom: 16 }}>Estimated Monthly Payment</div>
                  <div className="serif" style={{ fontSize: 'clamp(80px, 9vw, 128px)', lineHeight: 0.95, fontWeight: 300, letterSpacing: '-0.02em', marginBottom: 8 }}>
                    {fmt(total)}
                  </div>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(243,242,231,0.5)' }}>
                    / month · all in
                  </div>
                </div>
                <div style={{ borderLeft: '1px solid rgba(243,242,231,0.2)', paddingLeft: 48 }}>
                  {[
                    ['Principal and Interest', fmt(pi)],
                    ['Property Tax', fmt(taxM)],
                    ['Home Insurance', fmt(insM)],
                    ['PMI', downPct < 20 ? fmt(pmi) : '—'],
                  ].map(([l, v]) => (
                    <div key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '14px 0', borderBottom: '1px solid rgba(243,242,231,0.12)' }}>
                      <span style={{ fontSize: 13, color: 'rgba(243,242,231,0.7)' }}>{l}</span>
                      <span className="serif" style={{ fontSize: 22, fontWeight: 400 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40, marginTop: 64, paddingTop: 48, borderTop: '1px solid rgba(243,242,231,0.2)' }}>
                {[
                  ['Loan Amount', fmt(loan)],
                  ['Down Payment', fmt(down) + ' · ' + downPct.toFixed(1) + '%'],
                  ['Total Interest', fmt(totalInterest)],
                  ['Total Paid', fmt(pi * n + down)],
                ].map(([l, v]) => (
                  <div key={l}>
                    <div className="mono" style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(243,242,231,0.5)', marginBottom: 10 }}>{l}</div>
                    <div className="serif" style={{ fontSize: 30, fontWeight: 400, letterSpacing: '-0.01em' }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <p className="mono" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--taupe)', marginTop: 24, textAlign: 'center' }}>
              Estimates only · Not a loan offer · Consult your lender for accurate rates and terms
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

function CalcField({ label, value, onChange, min, max, step, hint, prefix, suffix, integer, decimals }) {
  const [focused, setFocused] = useState(false);
  const [draft, setDraft] = useState('');

  const formatNum = (n) => {
    if (integer || Number.isInteger(n)) return Math.round(n).toLocaleString();
    if (decimals != null) return n.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    return n.toLocaleString();
  };
  const shownValue = focused ? draft : formatNum(value);

  return (
    <div className="calc-field">
      <div className="calc-field-label">
        {label}
        <span className="calc-info">ⓘ</span>
      </div>
      <div className="calc-field-box">
        {prefix && <span className="calc-prefix">{prefix}</span>}
        <input
          type="text"
          inputMode="decimal"
          className="calc-input"
          value={shownValue}
          onFocus={(e) => {
            setFocused(true);
            setDraft(String(value));
            setTimeout(() => e.target.select(), 0);
          }}
          onChange={(e) => {
            // strip commas and currency, allow digits, one dot, leading minus
            const raw = e.target.value.replace(/,/g, '');
            if (!/^-?\d*\.?\d*$/.test(raw)) return;
            setDraft(raw);
            const num = parseFloat(raw);
            if (!isNaN(num)) onChange(num);
          }}
          onBlur={() => {
            setFocused(false);
            const num = parseFloat(draft);
            if (isNaN(num)) onChange(min ?? 0);
          }}
        />
        {suffix && <span className="calc-suffix">{suffix}</span>}
        {hint && <span className="calc-hint">{hint}</span>}
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        className="calc-slider"
      />
    </div>
  );
}

Object.assign(window, { MortgageCalculator });
