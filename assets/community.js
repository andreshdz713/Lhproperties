// Community page — Houston neighborhoods, culture, and a sense of place

function Community({ onNav }) {
  const neighborhoods = [
    {
      name: 'River Oaks',
      tagline: 'Old-money grace and live oak canopies.',
      body: "Houston's most established address. Boulevards lined with century-old oaks, gracious gardens, and the city's most storied homes. River Oaks Country Club anchors a quiet, deeply rooted community.",
      tag: 'Established · Walkable',
      image: window.__resources.editorialInterior,
    },
    {
      name: 'The Heights',
      tagline: 'Historic bungalows, modern energy.',
      body: 'Tree-lined streets of restored Victorian and craftsman homes meet a thriving food and shop scene. Walking distance to White Oak Bayou trails, breweries, and Houston\'s best independent boutiques.',
      tag: 'Walkable · Foodie',
      image: window.__resources.slowTravel,
    },
    {
      name: 'Memorial',
      tagline: 'Family, parks, and excellent schools.',
      body: 'Sprawling, leafy, and centered on Memorial Park — one of the largest urban parks in the country. Top-rated SBISD schools, golf, hike-and-bike trails, and quick access to the Energy Corridor.',
      tag: 'Family · Green Space',
      image: window.__resources.morningWalks,
    },
    {
      name: 'Montrose',
      tagline: 'Eclectic, artistic, unmistakably Houston.',
      body: 'Galleries, cafés, and the Menil Collection. A creative neighborhood with deep cultural roots — diverse, walkable, and wonderfully alive on a Saturday afternoon.',
      tag: 'Arts · Walkable',
      image: window.__resources.matchaCookies,
    },
    {
      name: 'West University',
      tagline: 'A village within the city.',
      body: 'Tree-lined streets, top-tier schools, and a tight-knit community. Minutes to the Texas Medical Center, Rice Village shopping, and Hermann Park. One of Houston\'s most consistently sought-after addresses.',
      tag: 'Schools · Family',
      image: window.__resources.camoPj,
    },
    {
      name: 'The Woodlands',
      tagline: 'Master-planned, surrounded by forest.',
      body: 'A 30-minute drive north, set among 28,000 acres of preserved woodland. Walkable Town Center, top schools, lakes, and trails — a natural choice for families wanting space and amenities together.',
      tag: 'Suburban · Nature',
      image: window.__resources.houstonSkyline,
    },
  ];

  const facts = [
    ['4th', 'Largest city in the U.S.'],
    ['90+', 'Languages spoken across Greater Houston'],
    ['38', 'Distinct neighborhoods inside the Loop'],
    ['145', 'Parks managed by the city'],
  ];

  return (
    <div>
      {/* HERO BANNER */}
      <section className="community-hero">
        <div className="community-hero-media" aria-hidden="true">
          <video
            className="community-hero-video"
            src="assets/houston-skyline.mp4"
            poster={window.__resources.houstonSkyline}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <img className="community-hero-still" src={window.__resources.houstonSkyline} alt="" />
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
            Six years of guiding clients through Houston has taught me that no two neighborhoods feel alike. The right home is rarely just about square footage — it&apos;s about the streets, the corner café, the rhythm of the place.
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
              Houston is a city of contradictions. World-class museums sit beside taquerias on Telephone Road. Energy executives share commutes with rocket engineers. The food is Vietnamese, Cajun, Tex-Mex, and Lebanese, sometimes on the same block.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--ink-70)', marginBottom: 28 }}>
              It&apos;s also one of the most quietly opportunity-rich places in the country — no state income tax, growing job market, and a housing landscape that still rewards patience and a good guide.
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
            <img src={window.__resources.matchaCookies} alt="A taste of Houston" />
            <div className="community-strip-tag mono">Saturday Mornings · Houston</div>
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
            Quiet streets and big trees? Walkable and lively? Top schools? Easy commute to the Med Center or downtown? I&apos;ll help you weigh the trade-offs and find the place that actually fits.
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
