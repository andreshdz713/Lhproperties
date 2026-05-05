// Community page — Houston neighborhoods, culture, and a sense of place

function Community({ onNav }) {
  const neighborhoods = [
    {
      name: 'River Oaks',
      tagline: 'Old money grace and live oak canopies.',
      body: "Houston's most established address. Boulevards lined with century old oaks, gracious gardens, and the city's most storied homes. River Oaks Country Club anchors a quiet, deeply rooted community.",
      tag: 'Established · Walkable',
      image: 'assets/nbhd-river-oaks.jpg',
    },
    {
      name: 'The Heights',
      tagline: 'Historic bungalows, modern energy.',
      body: 'Restored Victorian and craftsman homes line streets shaded by old elms. Walking distance to White Oak Bayou trails, breweries on White Oak Drive, and the independent boutiques and food along 19th Street.',
      tag: 'Walkable · Foodie',
      image: 'assets/nbhd-heights.jpg',
    },
    {
      name: 'Memorial',
      tagline: 'Family, parks, and excellent schools.',
      body: 'Sprawling and leafy, anchored by Memorial Park, one of the largest urban parks in the country. Top rated SBISD schools, golf, miles of hike and bike trails, and quick access to the Energy Corridor.',
      tag: 'Family · Green Space',
      image: 'assets/nbhd-memorial.jpg',
    },
    {
      name: 'Montrose',
      tagline: 'Eclectic, artistic, unmistakably Houston.',
      body: "Home to the Menil Collection, the Rothko Chapel, and a long list of galleries and cafés. A creative neighborhood with deep cultural roots, diverse, walkable, and wonderfully alive on a Saturday afternoon.",
      tag: 'Arts · Walkable',
      image: 'assets/nbhd-montrose.jpg',
    },
    {
      name: 'West University',
      tagline: 'A village within the city.',
      body: "Quiet streets and a tight knit community of two miles squared, with top tier schools and Rice Village shopping at its edge. Minutes to the Texas Medical Center and Hermann Park. One of Houston's most consistently sought after addresses.",
      tag: 'Schools · Family',
      image: 'assets/nbhd-west-u.jpg',
    },
    {
      name: 'The Woodlands',
      tagline: 'Master planned, surrounded by forest.',
      body: 'A half hour drive north of downtown, set inside 28,000 acres of preserved Piney Woods. A walkable Town Center, top schools, Lake Woodlands, and miles of pathways. A natural choice for families wanting both space and amenities.',
      tag: 'Suburban · Nature',
      image: 'assets/nbhd-woodlands.jpg',
    },
  ];

  const facts = [
    ['4th', 'Largest city in the U.S.'],
    ['145+', 'Languages spoken across Greater Houston'],
    ['88', 'Official Super Neighborhoods'],
    ['380+', 'Parks managed by the city'],
  ];

  return (
    <div>
      {/* HERO BANNER */}
      <section className="community-hero">
        <div className="community-hero-media" aria-hidden="true">
          <video
            className="community-hero-video"
            src="assets/houston-skyline.mp4"
            poster={window.__resources.houstonMobile}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <img className="community-hero-still" src={window.__resources.houstonMobile} alt="" />
          <div className="community-hero-fade" />
        </div>
        <div className="community-hero-inner">
          <div className="mono community-hero-tag">Practice · Houston</div>
          <h1 className="serif community-hero-headline">
            A city of <em>neighborhoods</em>,<br/>
            and the people<br/>
            who shape them.
          </h1>
          <p className="community-hero-sub">
            Six years of guiding clients through Houston has taught me that no two neighborhoods feel alike. The right home is rarely just about square footage. It is about the streets, the corner café, the rhythm of the place.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section" style={{ background: 'var(--bone)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 96, alignItems: 'start' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>About Greater Houston</div>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 4.4vw, 64px)', lineHeight: 1.05, fontWeight: 300, letterSpacing: '-0.015em' }}>
              The most <em style={{ color: 'var(--clay)' }}>diverse</em><br/>major city in America.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--ink-70)', marginBottom: 28 }}>
              Houston is a city of contradictions. Renowned museums sit beside taquerias on Telephone Road. Energy executives share commutes with rocket engineers. The food is Vietnamese, Cajun, Tex Mex, and Lebanese, sometimes all on the same block.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--ink-70)', marginBottom: 28 }}>
              It is also one of the most quietly opportunity rich places in the country. No state income tax, a growing job market, and a housing landscape that still rewards patience and a good guide.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, marginTop: 40, paddingTop: 32, borderTop: '1px solid var(--ink-20)' }}>
              {facts.map(([n, l]) => (
                <div key={l}>
                  <div className="serif" style={{ fontSize: 36, fontWeight: 300, lineHeight: 1, letterSpacing: '-0.01em' }}>{n}</div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--taupe)', marginTop: 8 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOOD GRID */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ marginBottom: 48 }}>
          <div className="eyebrow">Neighborhoods I Know Intimately</div>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 4.4vw, 64px)', lineHeight: 1.05, fontWeight: 300, letterSpacing: '-0.015em', marginTop: 16 }}>
            Six pockets of <em style={{ color: 'var(--clay)' }}>Houston</em>.
          </h2>
        </div>
        <div className="container">
          <div className="community-grid">
            {neighborhoods.map((n, i) => (
              <article key={n.name} className="community-card">
                <div className="community-card-image">
                  <img src={n.image} alt={n.name} />
                </div>
                <div className="community-card-body">
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--taupe)', marginBottom: 14 }}>
                    № {String(i + 1).padStart(2, '0')} · {n.tag}
                  </div>
                  <h3 className="serif" style={{ fontSize: 32, lineHeight: 1.05, fontWeight: 400, marginBottom: 8 }}>{n.name}</h3>
                  <div className="community-card-tagline">{n.tagline}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ink-70)', marginTop: 16 }}>{n.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="container community-explore">
          <div className="community-explore-rule" />
          <div className="community-explore-inner">
            <div className="community-explore-copy">
              <div className="eyebrow" style={{ marginBottom: 12 }}>Beyond these six</div>
              <h3 className="serif" style={{ fontSize: 'clamp(26px, 2.6vw, 36px)', lineHeight: 1.15, fontWeight: 400, letterSpacing: '-0.01em', maxWidth: 520 }}>
                Houston has dozens more pockets worth knowing.
              </h3>
            </div>
            <a
              href="https://www.har.com/idx/neighborhood/search?sitetype=aws&cid=717039"
              target="_blank"
              rel="noopener"
              className="btn btn-clay"
            >
              Browse All Neighborhoods <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE OF MORE NEIGHBORHOODS */}
      <Marquee items={['Bellaire', 'Sugar Land', 'Katy', 'Midtown', 'EaDo', 'Galleria', 'Spring Branch', 'Cypress', 'Pearland', 'Friendswood', 'Tanglewood', 'Rice Military']} />

      {/* CULTURE STRIP */}
      <section className="section" style={{ background: 'var(--bone)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Culture · Food · Pace</div>
            <h2 className="serif" style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.08, fontWeight: 300, letterSpacing: '-0.01em', marginBottom: 28 }}>
              What it actually feels like to live here.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--ink-70)', marginBottom: 18 }}>
              Mornings begin slow at a coffee shop on West Alabama or 19th Street. Afternoons stretch through Memorial Park or the Buffalo Bayou trails. Evenings might be Vietnamese in Midtown, Cajun on Westheimer, or a quiet table on a Heights porch.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--ink-70)' }}>
              Weekends are art at the Menil, baseball at Minute Maid, brunch off Washington Ave, or a drive to Galveston for the gulf air. The city moves at the pace you set.
            </p>
          </div>
          <div className="community-strip-image">
            <img src="assets/nbhd-memorial.jpg" alt="An afternoon in the park" />
            <div className="community-strip-tag mono">Memorial Park · Saturday Afternoons</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--ink)', color: 'var(--bone)', textAlign: 'center' }}>
        <div className="container-narrow">
          <div className="eyebrow" style={{ color: 'var(--clay)', marginBottom: 24 }}>Find Your Pocket</div>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 4.4vw, 68px)', lineHeight: 1.05, fontWeight: 300, letterSpacing: '-0.015em', marginBottom: 28 }}>
            Tell me what you&apos;re after, and I&apos;ll point you toward the <em style={{ color: 'var(--clay)' }}>right neighborhood</em>.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(243,242,231,0.8)', maxWidth: 620, margin: '0 auto 40px' }}>
            Quiet streets and big trees? Walkable and lively? Top schools? Easy commute to the Med Center or downtown? I&apos;ll help you weigh the tradeoffs and find the place that actually fits.
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); onNav && onNav('contact'); }}
            className="btn btn-bone"
          >
            Start a Conversation <span className="btn-arrow">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Community });
