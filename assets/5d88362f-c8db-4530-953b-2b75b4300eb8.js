// Service pages: Buying, Selling, Leasing

function PageHeader({ eyebrow, title, intro }) {
  return (
    <section style={{ padding: '180px 48px 80px', borderBottom: '1px solid var(--ink-20)' }}>
      <div className="container">
        <div className="eyebrow fade-up" style={{ marginBottom: 32 }}>{eyebrow}</div>
        <h1 className="serif fade-up d1" style={{ fontSize: 'clamp(64px, 9vw, 140px)', lineHeight: 0.95, letterSpacing: '-0.02em', fontWeight: 300, marginBottom: 40 }}>
          {title}
        </h1>
        <p className="fade-up d2" style={{ maxWidth: 680, fontSize: 18, lineHeight: 1.6, color: 'var(--ink-70)' }}>
          {intro}
        </p>
      </div>
    </section>);

}

function Buying({ onNav, initialTab }) {
  const [tab, setTab] = useState(initialTab || 'overview');
  useEffect(() => {if (initialTab) setTab(initialTab);}, [initialTab]);

  return (
    <div>
      <PageHeader
        eyebrow="Practice · 01 · Buying"
        title={<>Finding <em style={{ color: 'var(--clay)' }}>the one</em>, without the noise.</>}
        intro="Whether you are a first time buyer, relocating to Houston, or expanding an investment portfolio, I'll help you move at a pace that feels right, with a process designed around clarity and trust." />
      
      <div style={{ borderBottom: '1px solid var(--ink-20)', padding: '0 48px' }}>
        <div className="container" style={{ display: 'flex', gap: 40 }}>
          {[['overview', 'Overview'], ['calculator', 'Payment Calculator']].map(([id, label]) =>
          <button
            key={id}
            onClick={() => setTab(id)}
            style={{
              background: 'transparent',
              border: 'none',
              padding: '20px 0',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: tab === id ? 'var(--ink)' : 'var(--taupe)',
              cursor: 'pointer',
              borderBottom: tab === id ? '1px solid var(--ink)' : '1px solid transparent',
              marginBottom: -1,
              transition: 'color 0.25s ease'
            }}>
            
              {label}
            </button>
          )}
        </div>
      </div>
      {tab === 'calculator' ?
      <>
          <MortgageCalculator />
          <CTA onNav={onNav} label="Ready to take the next step?" sub="I'll connect you with trusted lenders and help you understand your full buying picture." />
        </> :

      <>
      <section style={{ padding: '80px 48px', background: 'var(--cream)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {[
            ['01', 'Discovery', 'A conversation about what you need, what you want, and what you don\'t yet know.'],
            ['02', 'Search', 'A curated shortlist informed by market data and private knowledge.'],
            ['03', 'Negotiation', 'Patient, principled representation when it matters most.'],
            ['04', 'Close', 'From inspection to keys, a clear hand every step of the way.']].
            map(([n, t, d]) =>
            <div key={n}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--taupe)', marginBottom: 20 }}>{n}</div>
              <h3 className="serif" style={{ fontSize: 28, fontWeight: 400, marginBottom: 12 }}>{t}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ink-70)' }}>{d}</p>
            </div>
            )}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 40, borderBottom: '1px solid var(--ink-20)', paddingBottom: 24, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Find Your Home · Houston MLS</div>
              <h2 className="serif" style={{ fontSize: 'clamp(44px, 5vw, 72px)', lineHeight: 1.05, fontWeight: 300, letterSpacing: '-0.015em' }}>
                Search every home <em style={{ color: 'var(--clay)' }}>for sale</em>.
              </h2>
              <p style={{ fontSize: 15, color: 'var(--ink-70)', marginTop: 16, maxWidth: 580 }}>
                The full Houston MLS, filtered by what matters to you. See something worth a closer look? Reach out and I&apos;ll walk it with you.
              </p>
            </div>
          </div>
          <div style={{ border: '1px solid var(--ink-20)', background: 'var(--bone)', overflow: 'hidden' }}>
            <iframe
              src="https://www.har.com/idx/mls/search?sitetype=aws&cid=717039&allmls=y&for_sale=1"
              title="Search Houston MLS Homes For Sale · Loan Hoang"
              style={{ width: '100%', height: 1200, border: 'none', display: 'block', background: 'var(--bone)' }}
              loading="lazy"
            />
          </div>
          <p className="mono" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--taupe)', marginTop: 16, textAlign: 'right' }}>
            Search powered by HAR.com · Loan Hoang · Agent ID 717039
          </p>
        </div>
      </section>
      <CTA onNav={onNav} label="Begin your search" sub="Tell me what home means to you." />
        </>
      }
    </div>);

}

function Selling({ onNav, initialTab }) {
  const [tab, setTab] = useState(initialTab || 'overview');
  useEffect(() => {if (initialTab) setTab(initialTab);}, [initialTab]);
  return (
    <div>
      <PageHeader
        eyebrow="Practice · 02 · Selling"
        title={<>Marketing that <em style={{ color: 'var(--clay)' }}>honors</em> your home.</>}
        intro="Selling a home is intimate, strategic, and often emotional. My approach combines editorial quality marketing with rigorous market positioning, so your property meets the right buyer at the right moment." />
      
      <div style={{ borderBottom: '1px solid var(--ink-20)', padding: '0 48px' }}>
        <div className="container" style={{ display: 'flex', gap: 40 }}>
          {[['overview', 'Overview'], ['valuation', "What's My Home Worth?"]].map(([id, label]) =>
          <button
            key={id}
            onClick={() => setTab(id)}
            style={{
              background: 'transparent',
              border: 'none',
              padding: '20px 0',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: tab === id ? 'var(--ink)' : 'var(--taupe)',
              cursor: 'pointer',
              borderBottom: tab === id ? '1px solid var(--ink)' : '1px solid transparent',
              marginBottom: -1,
              transition: 'color 0.25s ease'
            }}>
            
              {label}
            </button>
          )}
        </div>
      </div>
      {tab === 'valuation' ?
      <>
          <HomeValuation />
          <CTA onNav={onNav} label="Ready to go deeper?" sub="A formal CMA and a walkthrough will give you the most accurate picture of your home's value." />
        </> :

      <>
          <section className="section">
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
              <div style={{ height: 600, overflow: 'hidden', position: 'relative' }}>
                <img
                src={window.__resources.editorialInterior}
                alt="Editorial interior — warm modern kitchen with marble island and brass pendants"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              
                <div className="mono" style={{ position: 'absolute', bottom: 16, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--bone)', textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div>
                <div className="eyebrow" style={{ marginBottom: 24 }}>The Process</div>
                <h2 className="serif" style={{ fontSize: 56, lineHeight: 1.05, fontWeight: 300, letterSpacing: '-0.015em', marginBottom: 32 }}>
                  Five deliberate steps from list to close.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {[
                ['Valuation', 'A data led comparative market analysis paired with on site review of your home\'s distinct story.'],
                ['Preparation', 'Staging consultation, light repair guidance, and access to a trusted network of tradespeople.'],
                ['Photography', 'Professional editorial photography, film, and twilight imagery. Rights fully yours.'],
                ['Launch', 'Private network preview, targeted digital placement, and printed brochure for qualified buyers.'],
                ['Negotiation and Close', 'Transparent communication, strong advocacy, and a calm hand through due diligence and closing.']].
                map(([t, d], i) =>
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 16, padding: '16px 0', borderBottom: '1px solid var(--ink-10)' }}>
                      <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--taupe)', paddingTop: 4 }}>0{i + 1}</div>
                      <div>
                        <div className="serif" style={{ fontSize: 22, fontWeight: 400, marginBottom: 6 }}>{t}</div>
                        <div style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ink-70)' }}>{d}</div>
                      </div>
                    </div>
                )}
                </div>
              </div>
            </div>
          </section>
          <CTA onNav={onNav} label="Request a valuation" sub="A private, no pressure conversation about your home's story and worth." onClick={() => setTab('valuation')} />
        </>
      }
    </div>);

}

function Leasing({ onNav }) {
  return (
    <div>
      <PageHeader
        eyebrow="Practice · 03 · Leasing"
        title={<>Leasing, <em style={{ color: 'var(--clay)' }}>unhurried</em>.</>}
        intro="Whether you are placing tenants in an investment property or searching for a home to rent while you take your time buying, leasing deserves the same attention as any other transaction. I give it exactly that." />
      
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid var(--ink-20)' }}>
          <div style={{ padding: '64px 56px', borderRight: '1px solid var(--ink-20)' }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--taupe)', marginBottom: 24 }}>For Owners</div>
            <h2 className="serif" style={{ fontSize: 48, lineHeight: 1.05, fontWeight: 300, letterSpacing: '-0.015em', marginBottom: 28 }}>
              Place the right tenant.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--ink-70)', marginBottom: 32 }}>
              Full service lease representation. Pricing strategy, editorial quality listing, tenant screening, and a clean, transparent handoff. For single properties, portfolios, and relocating owners.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
              {['Comparative rental analysis', 'Professional photography and listing', 'Marketing across MLS and private networks', 'Application and background review', 'Lease drafting coordination', 'Move in handoff and documentation'].map((x, i) =>
              <li key={i} style={{ fontSize: 14, display: 'flex', gap: 12, color: 'var(--ink-70)' }}>
                  <span className="mono" style={{ color: 'var(--clay)', fontSize: 11, paddingTop: 3 }}>◆</span>
                  {x}
                </li>
              )}
            </ul>
            <a href="#contact" className="link-underline" onClick={(e) => {e.preventDefault();onNav('contact', 'leasing-owner');}}>Inquire for owners →</a>
          </div>
          <div style={{ padding: '64px 56px', background: 'var(--cream)' }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--taupe)', marginBottom: 24 }}>For Tenants</div>
            <h2 className="serif" style={{ fontSize: 48, lineHeight: 1.05, fontWeight: 300, letterSpacing: '-0.015em', marginBottom: 28 }}>
              Find the right fit.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--ink-70)', marginBottom: 32 }}>
              Especially useful for relocations, corporate moves, or buyers taking their time. I'll help you understand Houston neighborhoods, shortlist homes that match your life, and navigate the lease with care.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
              {['Neighborhood orientation', 'Curated home shortlist', 'Scheduled private tours', 'Application guidance', 'Lease review and negotiation', 'Move in walkthrough support'].map((x, i) =>
              <li key={i} style={{ fontSize: 14, display: 'flex', gap: 12, color: 'var(--ink-70)' }}>
                  <span className="mono" style={{ color: 'var(--clay)', fontSize: 11, paddingTop: 3 }}>◆</span>
                  {x}
                </li>
              )}
            </ul>
            <a href="#contact" className="link-underline" onClick={(e) => {e.preventDefault();onNav('contact', 'leasing-tenant');}}>Inquire for tenants →</a>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0 }}>
        <div className="container" style={{ marginBottom: 28 }}>
          <div className="eyebrow">Neighborhoods I Know Intimately</div>
        </div>
        <Marquee items={['River Oaks', 'The Heights', 'Memorial', 'Montrose', 'West University', 'Bellaire', 'Midtown', 'Galleria', 'Rice Military', 'Tanglewood', 'Braes Heights', 'Museum District', 'Sugar Land', 'Cypress', 'Katy', 'Bridgeland', 'Spring Branch', 'Oak Forest', 'Garden Oaks']} />
      </section>
      <CTA onNav={onNav} label="Start a lease conversation" sub="Whether you have a property to lease or you're searching for one, I'd love to help." />
    </div>);

}

function CTA({ onNav, label, sub }) {
  return (
    <section style={{ padding: '120px 48px', borderTop: '1px solid var(--ink-20)' }}>
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <div className="eyebrow" style={{ marginBottom: 32 }}>Next Step</div>
        <h2 className="serif" style={{ fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 1.05, fontWeight: 300, letterSpacing: '-0.015em', marginBottom: 32 }}>
          {label}.
        </h2>
        <p style={{ fontSize: 18, color: 'var(--ink-70)', marginBottom: 48, maxWidth: 560, margin: '0 auto 48px' }}>{sub}</p>
        <a href="#contact" onClick={(e) => {e.preventDefault();onNav('contact');}} className="btn btn-ink">Contact Loan <span className="btn-arrow">→</span></a>
      </div>
    </section>);

}

Object.assign(window, { Buying, Selling, Leasing, CTA });