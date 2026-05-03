// Home valuation flow: 3 steps (address -> details -> estimate)

function HomeValuation() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    address: '',
    unit: '',
    beds: 3,
    baths: 2,
    sqft: 2400,
    yearBuilt: 2010,
    condition: 'Good',
    lotSize: 6500,
    name: '',
    email: '',
    phone: '',
  });
  const set = (k, v) => setData(d => ({ ...d, [k]: v }));

  const steps = [
    { n: 1, label: 'Enter Property Address' },
    { n: 2, label: 'Property Details' },
    { n: 3, label: 'Property Valuation' },
  ];

  // naive but plausible estimate model for demo
  const estimate = (() => {
    const base = data.sqft * 280;
    const condMult = { Excellent: 1.12, Good: 1.0, Fair: 0.88, 'Needs Work': 0.72 }[data.condition] || 1;
    const bedMult = 1 + (data.beds - 3) * 0.04;
    const bathMult = 1 + (data.baths - 2) * 0.05;
    const ageFactor = Math.max(0.8, 1 - (2026 - data.yearBuilt) / 200);
    const lotBump = data.lotSize > 8000 ? 1.06 : data.lotSize < 4000 ? 0.96 : 1;
    return Math.round(base * condMult * bedMult * bathMult * ageFactor * lotBump);
  })();
  const low = Math.round(estimate * 0.94 / 1000) * 1000;
  const high = Math.round(estimate * 1.07 / 1000) * 1000;
  const mid = Math.round(estimate / 1000) * 1000;
  const fmt = (n) => '$' + n.toLocaleString();

  return (
    <div>
      <section style={{ position: 'relative', minHeight: 276, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, #262625 0%, #3a352e 45%, #7e746a 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage:
            'radial-gradient(ellipse at 72% 55%, rgba(203, 178, 161, 0.5) 0%, transparent 55%), ' +
            'radial-gradient(ellipse at 22% 70%, rgba(255, 190, 120, 0.22) 0%, transparent 50%), ' +
            'linear-gradient(0deg, rgba(38,38,37,0.55), rgba(38,38,37,0.25))',
        }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '60px 48px' }}>
          <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--clay)', marginBottom: 14 }}>
            For Sellers · Complimentary Service
          </div>
          <h1 className="serif" style={{ fontSize: 'clamp(40px, 4.4vw, 64px)', lineHeight: 1.05, fontWeight: 300, letterSpacing: '-0.02em', color: 'var(--bone)' }}>
            What&apos;s My Home <em style={{ color: 'var(--cream)' }}>Worth?</em>
          </h1>
        </div>
      </section>

      <section style={{ padding: '28px 48px 8px' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-70)' }}>
            Thinking of selling? Fill out the form and I&apos;ll personally review your property and send you a thoughtful, researched estimate.
          </p>
        </div>
      </section>

      <section style={{ padding: '40px 48px 32px' }}>
        <div className="container-narrow">
          <div className="val-stepper">
            {steps.map((s, i) => (
              <React.Fragment key={s.n}>
                <div className={`val-step ${step >= s.n ? 'active' : ''} ${step === s.n ? 'current' : ''}`}>
                  <div className="val-step-dot">{step > s.n ? '✓' : s.n}</div>
                  <div className="val-step-label">{s.label}</div>
                </div>
                {i < steps.length - 1 && (
                  <div className={`val-step-line ${step > s.n ? 'active' : ''}`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 48px 120px' }}>
        <div className="container-narrow">
          {step === 1 && (
            <div className="val-card">
              <div className="val-form-row">
                <div className="val-field" style={{ flex: 2 }}>
                  <input
                    type="text"
                    placeholder="Enter your street address"
                    value={data.address}
                    onChange={(e) => set('address', e.target.value)}
                  />
                </div>
                <div className="val-field" style={{ flex: 1 }}>
                  <input
                    type="text"
                    placeholder="Unit"
                    value={data.unit}
                    onChange={(e) => set('unit', e.target.value)}
                  />
                </div>
                <button
                  className="val-btn"
                  disabled={!data.address.trim()}
                  onClick={() => setStep(2)}
                >
                  Get Report
                </button>
              </div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--taupe)', marginTop: 24, textAlign: 'center' }}>
                Houston and surrounding areas · Your information stays private
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="val-card">
              <div className="eyebrow" style={{ marginBottom: 8 }}>{data.address || 'Your Home'}{data.unit ? ', Unit ' + data.unit : ''}</div>
              <h3 className="serif" style={{ fontSize: 40, fontWeight: 300, letterSpacing: '-0.015em', marginBottom: 32 }}>
                Tell me about your home.
              </h3>
              <div className="val-grid">
                <StepperField label="Bedrooms" value={data.beds} onChange={(v) => set('beds', v)} min={1} max={8} />
                <StepperField label="Bathrooms" value={data.baths} onChange={(v) => set('baths', v)} min={1} max={8} step={0.5} />
                <NumberField label="Square Feet" value={data.sqft} onChange={(v) => set('sqft', v)} suffix="sq ft" />
                <NumberField label="Year Built" value={data.yearBuilt} onChange={(v) => set('yearBuilt', v)} />
                <NumberField label="Lot Size" value={data.lotSize} onChange={(v) => set('lotSize', v)} suffix="sq ft" />
                <div className="val-field-col">
                  <label>Overall Condition</label>
                  <select value={data.condition} onChange={(e) => set('condition', e.target.value)}>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                    <option>Needs Work</option>
                  </select>
                </div>
              </div>

              <div style={{ marginTop: 56, paddingTop: 40, borderTop: '1px solid var(--ink-20)' }}>
                <div className="eyebrow" style={{ marginBottom: 10 }}>Where Should I Send Your Valuation?</div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ink-70)', marginBottom: 24 }}>
                  I personally review every request. You&apos;ll receive a tailored valuation report by email within <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>48 business hours</strong>.
                </p>
                <div className="val-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                  <div className="val-field-col">
                    <label>Your Name</label>
                    <div className="val-number-input">
                      <input type="text" placeholder="First and last" value={data.name} onChange={(e) => set('name', e.target.value)} />
                    </div>
                  </div>
                  <div className="val-field-col">
                    <label>Email Address</label>
                    <div className="val-number-input">
                      <input type="email" placeholder="you@example.com" value={data.email} onChange={(e) => set('email', e.target.value)} />
                    </div>
                  </div>
                  <div className="val-field-col">
                    <label>Phone (optional)</label>
                    <div className="val-number-input">
                      <input type="tel" placeholder="(000) 000-0000" value={data.phone} onChange={(e) => set('phone', e.target.value)} />
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 48, gap: 20 }}>
                <button className="val-btn val-btn-ghost" onClick={() => setStep(1)}>← Back</button>
                <button
                  className="val-btn"
                  disabled={!data.name.trim() || !/.+@.+\..+/.test(data.email)}
                  onClick={async () => {
                    try {
                      const res = await fetch('https://formspree.io/f/mvzlkgld', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                        body: JSON.stringify({
                          _subject: `Home valuation request — ${data.address || data.name}`,
                          _replyto: data.email,
                          form: 'Home valuation',
                          name: data.name,
                          email: data.email,
                          phone: data.phone || '(not provided)',
                          address: data.address + (data.unit ? ', Unit ' + data.unit : ''),
                          bedsBaths: data.beds + ' bd · ' + data.baths + ' ba',
                          sqft: data.sqft,
                          yearBuilt: data.yearBuilt,
                          condition: data.condition,
                          lotSize: data.lotSize,
                        }),
                      });
                      if (!res.ok) throw new Error('Formspree returned ' + res.status);
                      setStep(3);
                    } catch (err) {
                      alert('Could not submit your valuation request just now. Please email loan@hoangproperties.com directly.');
                    }
                  }}
                >
                  Request My Valuation →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="val-card val-card-result" style={{ textAlign: 'center' }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: 'var(--clay)', color: 'var(--bone)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Cormorant Garamond, serif', fontSize: 34, fontWeight: 300,
                marginBottom: 32,
              }}>
                ✓
              </div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--clay)', marginBottom: 18 }}>
                Request Received
              </div>
              <h3 className="serif" style={{ fontSize: 'clamp(40px, 4.4vw, 64px)', lineHeight: 1.04, fontWeight: 300, letterSpacing: '-0.02em', marginBottom: 20 }}>
                Thank you, {data.name.split(' ')[0] || 'friend'}.
              </h3>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-70)', maxWidth: 620, margin: '0 auto 40px' }}>
                I&apos;ll personally research your property — pulling comparable sales, considering condition, and reviewing current market conditions — and send your tailored valuation to <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>{data.email}</strong> within <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>48 business hours</strong>.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, padding: '32px 0', borderTop: '1px solid var(--ink-20)', borderBottom: '1px solid var(--ink-20)', margin: '8px 0 40px', textAlign: 'left' }}>
                {[
                  ['Property', (data.address || '—') + (data.unit ? ', Unit ' + data.unit : '')],
                  ['Home Size', data.sqft.toLocaleString() + ' sq ft · ' + data.beds + ' bd / ' + data.baths + ' ba'],
                  ['Built', data.yearBuilt + ' · ' + data.condition],
                ].map(([l, v], i) => (
                  <div key={i}>
                    <div className="mono" style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--taupe)', marginBottom: 8 }}>{l}</div>
                    <div className="serif" style={{ fontSize: 18, fontWeight: 400, lineHeight: 1.3 }}>{v}</div>
                  </div>
                ))}
              </div>

              <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'left' }}>
                <div className="eyebrow" style={{ marginBottom: 14 }}>What Happens Next</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    ['01', 'I review your property details and pull recent comparable sales in your neighborhood.'],
                    ['02', 'I draft a tailored valuation report with a price range, market context, and recommendations.'],
                    ['03', 'You receive the report by email, and we can schedule a walkthrough if you\'d like to go deeper.'],
                  ].map(([n, t]) => (
                    <div key={n} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 14 }}>
                      <div className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--taupe)' }}>{n}</div>
                      <div style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ink-70)' }}>{t}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 48 }}>
                <button
                  className="val-btn val-btn-ghost"
                  onClick={() => { setStep(1); setData({ address: '', unit: '', beds: 3, baths: 2, sqft: 2400, yearBuilt: 2010, condition: 'Good', lotSize: 6500, name: '', email: '', phone: '' }); }}
                >
                  Submit another property
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function StepperField({ label, value, onChange, min, max, step = 1 }) {
  return (
    <div className="val-field-col">
      <label>{label}</label>
      <div className="val-stepper-input">
        <button onClick={() => onChange(Math.max(min, value - step))} type="button">−</button>
        <span>{value}</span>
        <button onClick={() => onChange(Math.min(max, value + step))} type="button">+</button>
      </div>
    </div>
  );
}

function NumberField({ label, value, onChange, suffix }) {
  return (
    <div className="val-field-col">
      <label>{label}</label>
      <div className="val-number-input">
        <input
          type="text"
          inputMode="numeric"
          value={value.toLocaleString()}
          onChange={(e) => {
            const raw = e.target.value.replace(/,/g, '');
            if (raw === '' || /^\d+$/.test(raw)) onChange(raw === '' ? 0 : parseInt(raw, 10));
          }}
        />
        {suffix && <span>{suffix}</span>}
      </div>
    </div>
  );
}

Object.assign(window, { HomeValuation });
