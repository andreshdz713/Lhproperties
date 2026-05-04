// Home page with 3 hero variations toggleable via Tweaks

function HeroQuiet({ onNav }) {
  return (
    <section className="hero-quiet" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '140px 48px 80px', position: 'relative', overflow: 'hidden' }}>
      <div className="hero-quiet-media" aria-hidden="true">
        <video
          className="hero-quiet-video"
          src="assets/houston-skyline.mp4"
          poster={window.__resources.houstonSkyline}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <img className="hero-quiet-still" src={window.__resources.houstonSkyline} alt="" />
        <div className="hero-quiet-scrim" />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="eyebrow fade-up" style={{ marginBottom: 48 }}>
          Houston · Est. Real Estate Practice · 2018
        </div>
        <h1 className="serif fade-up d1" style={{ fontSize: 'clamp(72px, 11vw, 176px)', lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: 40, fontWeight: 300 }}>
          A quiet,<br/>
          <em style={{ color: 'var(--clay)' }}>considered</em> approach<br/>
          to finding home.
        </h1>
        <div className="fade-up d3" style={{ marginTop: 48 }}>
          <p style={{ maxWidth: 520, fontSize: 16, lineHeight: 1.7, color: 'var(--ink-70)', marginBottom: 32 }}>
            Loan Hoang is a Houston based realtor guiding first time buyers, investors, and relocating families through every milestone of the home journey, with patience, clarity, and care.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a
              href="https://www.har.com/idx/mls/listing?sitetype=aws&cid=717039&mlsorgid=1&allmls=n"
              target="_blank"
              rel="noopener"
              className="btn btn-ink"
            >
              Featured Properties <span className="btn-arrow">→</span>
            </a>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); onNav && onNav('about'); }}
              className="btn"
            >
              Meet Loan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroEditorial() {
  return (
    <section style={{ minHeight: '100vh', padding: '140px 48px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <div className="eyebrow fade-up" style={{ marginBottom: 32 }}>Issue 01 · Spring / Summer 2026</div>
          <h1 className="serif fade-up d1" style={{ fontSize: 'clamp(56px, 7.5vw, 120px)', lineHeight: 0.98, letterSpacing: '-0.02em', fontWeight: 300, marginBottom: 32 }}>
            The art of <em>arriving</em> home.
          </h1>
          <p className="fade-up d2" style={{ maxWidth: 480, fontSize: 17, lineHeight: 1.7, color: 'var(--ink-70)', marginBottom: 40 }}>
            An editorial practice in Houston real estate. Thoughtful representation for buyers, sellers, investors, and those relocating to Texas.
          </p>
          <div className="fade-up d3" style={{ display: 'flex', gap: 16 }}>
            <a href="#buying" className="btn btn-ink">Start Buying <span className="btn-arrow">→</span></a>
            <a href="#about" className="btn">Meet Loan</a>
          </div>
        </div>
        <div className="fade-up d2" style={{ display: 'grid', gridTemplateRows: '1.4fr 1fr', gap: 16, height: '70vh' }}>
          <div style={{ overflow: 'hidden' }}>
            <img src={window.__resources.loanPortrait} alt="Loan Hoang portrait" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
          </div>
          <Placeholder label="Interior · Kitchen vignette" />
        </div>
      </div>
    </section>
  );
}

function HeroSplit() {
  return (
    <section style={{ minHeight: '100vh', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <div style={{ padding: '160px 64px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'var(--bone)' }}>
        <div className="eyebrow fade-up">
          01 · Houston, Texas
        </div>
        <div>
          <h1 className="serif fade-up d1" style={{ fontSize: 'clamp(56px, 7vw, 104px)', lineHeight: 1.02, letterSpacing: '-0.02em', fontWeight: 300, marginBottom: 32 }}>
            Loan Hoang.<br/>
            <em style={{ color: 'var(--taupe)' }}>Your guide, your advocate.</em>
          </h1>
          <p className="fade-up d2" style={{ maxWidth: 440, fontSize: 16, lineHeight: 1.7, color: 'var(--ink-70)', marginBottom: 40 }}>
            Six years of guiding Houston families, first time buyers, and investors to the place they call home, with honesty, attention, and unhurried expertise.
          </p>
          <a href="#contact" className="btn btn-ink fade-up d3">Work With Me <span className="btn-arrow">→</span></a>
        </div>
        <div className="mono fade-up d4" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--taupe)', display: 'flex', gap: 32 }}>
          <span>8+ Yrs</span><span>250+ Homes</span><span>Bilingual</span>
        </div>
      </div>
      <div className="fade-up d2" style={{ height: '100vh', overflow: 'hidden' }}>
        <img src={window.__resources.loanPortrait} alt="Loan Hoang portrait" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
      </div>
    </section>
  );
}

function FeaturedListings() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 48, borderBottom: '1px solid var(--ink-20)', paddingBottom: 24, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Search · Houston Area Listings</div>
            <h2 className="serif" style={{ fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: 1.05, fontWeight: 300, letterSpacing: '-0.015em' }}>
              Browse every <em style={{ color: 'var(--clay)' }}>active</em> home.
            </h2>
            <p style={{ fontSize: 15, color: 'var(--ink-70)', marginTop: 16, maxWidth: 560 }}>
              Search the full Houston MLS directly through my HAR portal. Filter by neighborhood, price, and beds. Live listings updated in real time.
            </p>
          </div>
          <a href="https://www.har.com/idx/mls/listing?sitetype=aws&cid=717039&mlsorgid=1&allmls=n" target="_blank" rel="noopener" className="link-underline">Open in HAR →</a>
        </div>
        <div style={{ border: '1px solid var(--ink-20)', background: 'var(--bone)', overflow: 'hidden' }}>
          <iframe
            src="https://www.har.com/idx/mls/listing?sitetype=aws&cid=717039&mlsorgid=1&allmls=n"
            title="Search Loan Hoang HAR Listings"
            style={{ width: '100%', height: 1200, border: 'none', display: 'block', background: 'var(--bone)' }}
            loading="lazy"
          />
        </div>
        <p className="mono" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--taupe)', marginTop: 16, textAlign: 'right' }}>
          Search powered by HAR.com · Loan Hoang · Agent ID 717039
        </p>
      </div>
    </section>
  );
}

function ServicesGrid({ onNav }) {
  const services = [
    { id: 'buying', eyebrow: '01', title: 'Buying', body: 'From first time buyers to seasoned investors, a calm, informed path from search to keys.' },
    { id: 'selling', eyebrow: '02', title: 'Selling', body: 'Marketing that honors your home. Photography, positioning, and representation that earns the right offer.' },
    { id: 'leasing', eyebrow: '03', title: 'Leasing', body: 'For owners and tenants alike. Quiet, thorough, and deeply personal leasing support across Houston.' },
  ];
  return (
    <section className="section" style={{ background: 'var(--cream)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, marginBottom: 80 }}>
          <div className="eyebrow">Practice · 2026</div>
          <h2 className="serif" style={{ fontSize: 'clamp(44px, 4.5vw, 68px)', lineHeight: 1.1, fontWeight: 300, letterSpacing: '-0.015em', maxWidth: 720 }}>
            Every move is more than a transaction. It is a milestone built on trust.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--ink-20)' }}>
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => { e.preventDefault(); onNav(s.id); }}
              style={{ padding: '48px 32px 48px 0', borderRight: '1px solid var(--ink-20)', display: 'block', cursor: 'pointer', position: 'relative' }}
            >
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--taupe)', marginBottom: 24 }}>{s.eyebrow}</div>
              <h3 className="serif" style={{ fontSize: 40, fontWeight: 400, marginBottom: 16 }}>{s.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-70)', marginBottom: 32, maxWidth: 320 }}>{s.body}</p>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 8 }}>
                Explore <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="section" style={{ padding: '160px 48px' }}>
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <div className="eyebrow" style={{ marginBottom: 32 }}>Philosophy</div>
        <p className="serif" style={{ fontSize: 'clamp(32px, 3.4vw, 52px)', lineHeight: 1.25, fontWeight: 300, letterSpacing: '-0.01em' }}>
          "I truly enjoy helping people find their forever home, being there for my clients every step of the way. Real estate has taught me that every move is more than a transaction. It is a milestone built on <em style={{ color: 'var(--clay)' }}>trust, relationships</em>, and finding the right place to call home."
        </p>
        <div style={{ marginTop: 56, display: 'inline-flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 40, height: 1, background: 'var(--ink)' }} />
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Loan Hoang</div>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [
    { n: '8+', l: 'Years of Practice' },
    { n: '250+', l: 'Families Settled' },
    { n: '$50M', l: 'In Represented Volume' },
    { n: '4.9', l: 'Client Review Average' },
  ];
  return (
    <section style={{ padding: '80px 48px', borderTop: '1px solid var(--ink-20)', borderBottom: '1px solid var(--ink-20)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 48 }}>
        {stats.map((s, i) => (
          <div key={i}>
            <div className="serif" style={{ fontSize: 72, lineHeight: 1, fontWeight: 300, letterSpacing: '-0.02em', marginBottom: 12 }}>{s.n}</div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--taupe)' }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Home({ heroVariant, onNav }) {
  return (
    <div>
      {heroVariant === 'quiet' && <HeroQuiet onNav={onNav} />}
      {heroVariant === 'editorial' && <HeroEditorial />}
      {heroVariant === 'split' && <HeroSplit />}
      <Marquee items={['River Oaks', 'The Heights', 'Memorial', 'Montrose', 'West University', 'Bellaire', 'Midtown', 'Sugar Land', 'The Woodlands', 'Katy']} />
      <FeaturedListings />
      <ServicesGrid onNav={onNav} />
      <PhilosophySection />
      <StatsStrip />
    </div>
  );
}

Object.assign(window, { Home });
