// Testimonials, About, Contact

function Testimonials({ onNav }) {
  const [showModal, setShowModal] = useState(false);
  const [review, setReview] = useState({ name: '', email: '', city: '', type: 'Buyer', quote: '' });
  const [sent, setSent] = useState(false);

  const submitReview = (e) => {
    e.preventDefault();
    const subject = `New Review from ${review.name || 'a client'}`;
    const body = [
      `Name: ${review.name}`,
      `Email: ${review.email}`,
      `Neighborhood / City: ${review.city || '(not provided)'}`,
      `Client Type: ${review.type}`,
      '',
      'Review:',
      review.quote || '(no review text)',
      '',
      '— Submitted via loanhoang.com testimonials page for your review and approval before posting.',
    ].join('\n');
    const url = `mailto:loan@hoangproperties.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setShowModal(false);
      setReview({ name: '', email: '', city: '', type: 'Buyer', quote: '' });
    }, 4000);
  };

  const quotes = [
    {
      quote: "This was only my second experience in home buying and I cannot believe how different it was from my first. I spoke with several agents before choosing someone I felt comfortable with, and I have absolutely zero regrets going with Loan. She was extremely communicative, knowledgeable, and honest. If it was not for her hard work and diligence I would not have been able to close on my previous home, let alone my new one. She was without a doubt the glue that held both deals together.",
      name: "Derek K.",
      detail: "Repeat Buyer · Houston · NextGen Review",
      highlight: true,
    },
    {
      quote: "Working with Loan is a pleasure. We had been in the market to buy a house in 2020 but had to quickly pivot to finding a rental home due to covid. She made the process smooth from start to finish.",
      name: "NextGen Client",
      detail: "Buyer to Renter · 2020",
    },
    {
      quote: "Loan helped me find my dream apartment! She is truly the best.",
      name: "Verified Client",
      detail: "Lease · Houston",
    },
    {
      quote: "Loan is the best realtor. She always goes above and beyond. She made my move to Texas very easy.",
      name: "Relocation Client",
      detail: "Out of State Buyer · Texas",
    },
    {
      quote: "She is the best in Houston, hands down. She made the process smooth and easy, and she is very friendly. I'd highly recommend her if you are looking for a new home.",
      name: "HAR Verified Client",
      detail: "Buyer · Houston · HAR.com",
    },
    {
      quote: "Loan was also able to put me in touch with a contractor who is well versed in the home improvements I wanted performed before I officially moved in. While I continue to recruit close friends to move to the Houston area, I will be giving all of them Loan's contact information. I undoubtedly know she will exceed any and all of their expectations.",
      name: "Peter N.",
      detail: "Buyer · Continued · NextGen Review",
    },
    {
      quote: "Loan is incredibly professional, patient, and detail oriented. She took the time to truly understand what we were looking for and never rushed us. We always felt like we were her only client.",
      name: "Houston Buyer",
      detail: "First Time Buyer · Spring Branch",
    },
  ];
  return (
    <div>
      <PageHeader
        eyebrow="Practice · Testimonials"
        title={<>In their <em style={{ color: 'var(--clay)' }}>own words</em>.</>}
        intro="Real notes from real clients, sourced from NextGen Real Estate, HAR.com, and elsewhere. The best part of this work is the relationships it leaves behind."
      />
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24, paddingBottom: 32, borderBottom: '1px solid var(--ink-20)' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Worked with Loan?</div>
            <div className="serif" style={{ fontSize: 28, fontWeight: 400, letterSpacing: '-0.01em' }}>I&apos;d love to hear from you.</div>
          </div>
          <button onClick={() => setShowModal(true)} className="btn btn-ink">
            Leave a Review <span className="btn-arrow">→</span>
          </button>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: 48, rowGap: 80 }}>
            {quotes.map((q, i) => {
              const col = i === 0 ? { gridColumn: 'span 2' } : {};
              return (
                <article key={i} style={{ ...col, borderTop: '1px solid var(--ink-20)', paddingTop: 32, breakInside: 'avoid' }}>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--taupe)', marginBottom: 24 }}>
                    {String(i+1).padStart(2, '0')} / 07
                  </div>
                  <blockquote className="serif" style={{ fontSize: q.highlight ? 40 : 24, lineHeight: 1.3, fontWeight: 300, letterSpacing: '-0.01em', marginBottom: 32, fontStyle: 'normal' }}>
                    &ldquo;{q.quote}&rdquo;
                  </blockquote>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, borderTop: '1px solid var(--ink-10)', paddingTop: 20 }}>
                    <div style={{ width: 40, height: 40, background: 'var(--cream)', borderRadius: '50%' }} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 500 }}>{q.name}</div>
                      <div className="mono" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--taupe)', marginTop: 2 }}>{q.detail}</div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <CTA onNav={onNav} label="Become the next story" sub="I'd be honored to guide your next chapter." />
      {showModal && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(38, 38, 37, 0.55)',
            zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 24, backdropFilter: 'blur(4px)',
          }}
        >
          <div style={{
            background: 'var(--bone)', maxWidth: 640, width: '100%',
            maxHeight: '90vh', overflowY: 'auto', padding: '56px 56px 48px',
            position: 'relative', border: '1px solid var(--ink-10)',
          }}>
            <button
              onClick={() => setShowModal(false)}
              aria-label="Close"
              style={{
                position: 'absolute', top: 20, right: 20, background: 'transparent',
                border: 'none', cursor: 'pointer', fontSize: 22, color: 'var(--ink)',
                width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >×</button>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Leave a Review</div>
            <h2 className="serif" style={{ fontSize: 36, fontWeight: 400, letterSpacing: '-0.01em', marginBottom: 12, lineHeight: 1.15 }}>
              Share your <em style={{ color: 'var(--clay)' }}>experience</em>.
            </h2>
            <p style={{ fontSize: 14, color: 'var(--ink-70)', lineHeight: 1.6, marginBottom: 36 }}>
              Thank you for taking the time to share your experience. Your words mean the world.
            </p>
            <form onSubmit={submitReview}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
                <div className="field">
                  <label>Name</label>
                  <input required value={review.name} onChange={(e) => setReview({...review, name: e.target.value})} placeholder="Your name" />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" required value={review.email} onChange={(e) => setReview({...review, email: e.target.value})} placeholder="you@email.com" />
                </div>
                <div className="field">
                  <label>Neighborhood / City</label>
                  <input value={review.city} onChange={(e) => setReview({...review, city: e.target.value})} placeholder="e.g. Heights, Memorial" />
                </div>
                <div className="field">
                  <label>Type</label>
                  <select value={review.type} onChange={(e) => setReview({...review, type: e.target.value})}>
                    <option>Buyer</option>
                    <option>Seller</option>
                    <option>Renter / Lease</option>
                    <option>Investor</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="field" style={{ marginBottom: 32 }}>
                <label>Your Review</label>
                <textarea
                  required
                  rows="6"
                  value={review.quote}
                  onChange={(e) => setReview({...review, quote: e.target.value})}
                  placeholder="Tell me about your experience working together."
                />
              </div>
              <button type="submit" className="btn btn-ink" disabled={sent}>
                {sent ? 'Thank you ✓' : <>Submit Review <span className="btn-arrow">→</span></>}
              </button>
              <p className="mono" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--taupe)', marginTop: 24 }}>
                Your information stays with me · Typical reply within one business day
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function About({ onNav }) {
  return (
    <div>
      <PageHeader
        eyebrow="Practice · About"
        title={<>Loan <em style={{ color: 'var(--clay)' }}>Hoang</em>.</>}
        intro="Houston Realtor. Guiding families, investors, and friends home, with trust, patience, and a deep love of the work."
      />
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 96, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 120 }}>
            <div style={{ height: 720, overflow: 'hidden' }}>
              <img src={window.__resources.loanPortrait} alt="Loan Hoang portrait" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
            </div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--taupe)', marginTop: 16, display: 'flex', justifyContent: 'space-between' }}>
              <span>Portrait</span><span>Houston · 2026</span>
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>A Note from Loan</div>
            <p className="serif" style={{ fontSize: 32, lineHeight: 1.35, fontWeight: 300, letterSpacing: '-0.005em', marginBottom: 40 }}>
              My name is Loan Hoang, and for over 8+ years I&apos;ve had the privilege of helping families, investors, and friends navigate one of the most important decisions of their lives.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--ink-70)', marginBottom: 24 }}>
              I truly enjoy helping people find their forever home and being there for my clients every step of the way. Throughout the years, real estate has taught me that every move is more than a transaction. It is a milestone built on trust, relationships, and finding the right place to call home.
            </p>
            <div style={{ margin: '48px 0', padding: '40px 0', borderTop: '1px solid var(--ink-20)', borderBottom: '1px solid var(--ink-20)' }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}>Outside the Practice</div>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--ink-70)' }}>
                Outside of real estate, I enjoy spending time with my two bunnies, <em className="serif">Camo and PJ</em>, who always keep life fun and full of personality. I love traveling, making memories with friends, baking cookies, and trying new recipes in the kitchen. One of my favorite treats to make is matcha cookies, a perfect combination of creativity and comfort.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--ink-70)', marginTop: 20 }}>
                Whether I&apos;m helping clients achieve their goals or enjoying life&apos;s simple moments, I believe in creating experiences that feel meaningful and memorable.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, marginBottom: 48 }}>
              {[
                ['8+ Years', 'In Houston Real Estate'],
                ['Bilingual', 'English and Vietnamese'],
                ['Licensed', 'Texas Real Estate · TREC'],
                ['Serving', 'Greater Houston and beyond'],
              ].map(([t, d], i) => (
                <div key={i} style={{ borderTop: '1px solid var(--ink-10)', paddingTop: 16 }}>
                  <div className="serif" style={{ fontSize: 28, fontWeight: 400, marginBottom: 4 }}>{t}</div>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--taupe)' }}>{d}</div>
                </div>
              ))}
            </div>
            <a href="#contact" onClick={(e) => { e.preventDefault(); onNav('contact'); }} className="btn btn-ink">Work with Loan <span className="btn-arrow">→</span></a>
          </div>
        </div>
      </section>
      <section style={{ padding: '100px 48px', background: 'var(--cream)' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 32 }}>A Few Things I Love</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              ['Camo and PJ', 'My two bunnies', window.__resources.camoPj, '50% 40%'],
              ['Matcha Cookies', 'Signature bake', window.__resources.matchaCookies, '50% 5%'],
              ['Slow Travel', 'Always planning the next', window.__resources.slowTravel, '50% 35%'],
              ['Morning Walks', 'Sunshine and palm trees', window.__resources.morningWalks, '50% 60%'],
            ].map(([t, d, img, pos], i) => (
              <div key={i}>
                <div style={{ height: 300, marginBottom: 16, overflow: 'hidden', background: 'var(--bone)' }}>
                  {img ? (
                    <img src={img} alt={t} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos, display: 'block' }} />
                  ) : (
                    <Placeholder label={t} variant={i % 2 === 0 ? 'clay' : 'cream'} />
                  )}
                </div>
                <div className="serif" style={{ fontSize: 24, fontWeight: 400 }}>{t}</div>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--taupe)', marginTop: 6 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Contact() {
  const [intent, setIntent] = useState('buying');
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const submit = (e) => {
    e.preventDefault();
    const intentLabel = {
      buying: 'Buying a home',
      selling: 'Selling a home',
      leasing: 'Leasing',
      investing: 'Investing',
      relocating: 'Relocating to Houston',
      other: 'Something else',
    }[intent] || intent;
    const subject = `New inquiry from ${form.name || 'the website'} — ${intentLabel}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || '(not provided)'}`,
      `Reason: ${intentLabel}`,
      '',
      'Message:',
      form.message || '(no message)',
      '',
      '— Sent from loanhoang.com contact form',
    ].join('\n');
    const url = `mailto:loan@hoangproperties.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', phone: '', message: '' }); }, 4000);
  };

  return (
    <div>
      <PageHeader
        eyebrow="Practice · Contact"
        title={<>Let&apos;s <em style={{ color: 'var(--clay)' }}>begin</em>.</>}
        intro="A conversation costs nothing and often clarifies everything. Share a little about what you&apos;re considering and I&apos;ll be in touch within one business day."
      />
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 96, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 120 }}>
            <div style={{ height: 380, marginBottom: 40 }}>
              <Placeholder label="Houston · Skyline" variant="taupe" />
            </div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Direct</div>
            <div style={{ fontSize: 14, lineHeight: 2, color: 'var(--ink-70)', marginBottom: 32 }}>
              Loan@Hoangproperties.com<br/>
              (832)-364-3629<br/>
              9135 Katy Fwy #211, Houston, TX, 77024<br/>
              <br/>
              <br/>
            </div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Hours</div>
            <div style={{ fontSize: 14, lineHeight: 2, color: 'var(--ink-70)', marginBottom: 32 }}>
              Mon to Fri · 9am to 6pm<br/>
              Sat/Sun · by appointment<br/>
            </div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Elsewhere</div>
            <div style={{ display: 'flex', gap: 16, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>
              <a href="#" style={{ borderBottom: '1px solid var(--ink)', paddingBottom: 3 }}>Instagram</a>
              <a href="https://www.har.com/loan-hoang/agent_loaaannnh" target="_blank" rel="noopener" style={{ borderBottom: '1px solid var(--ink)', paddingBottom: 3 }}>HAR</a>
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>01 · What brings you here?</div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 56, flexWrap: 'wrap' }}>
              {[
                ['buying', 'Buying a home'],
                ['selling', 'Selling a home'],
                ['leasing', 'Leasing'],
                ['investing', 'Investing'],
                ['relocating', 'Relocating to Houston'],
                ['other', 'Something else'],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => setIntent(id)}
                  style={{
                    padding: '12px 20px',
                    fontSize: 12,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontFamily: 'Inter, sans-serif',
                    border: '1px solid var(--ink)',
                    background: intent === id ? 'var(--ink)' : 'transparent',
                    color: intent === id ? 'var(--bone)' : 'var(--ink)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
            <form onSubmit={submit}>
              <div className="eyebrow" style={{ marginBottom: 32 }}>02 · Tell me a little about yourself</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 40 }}>
                <div className="field">
                  <label>Name</label>
                  <input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Your full name" />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="you@email.com" />
                </div>
                <div className="field">
                  <label>Phone</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} placeholder="(000) 000 0000" />
                </div>
                <div className="field">
                  <label>Preferred Contact</label>
                  <select>
                    <option>Email, please</option>
                    <option>A phone call</option>
                    <option>Text message</option>
                  </select>
                </div>
              </div>
              <div className="field" style={{ marginBottom: 48 }}>
                <label>A little about what you&apos;re considering</label>
                <textarea
                  rows="6"
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  placeholder="Neighborhoods you love, timeline, anything that would help me understand how to help."
                />
              </div>
              <button type="submit" className="btn btn-ink" disabled={sent}>
                {sent ? 'Sent, thank you ✓' : <>Send Message <span className="btn-arrow">→</span></>}
              </button>
              <p className="mono" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--taupe)', marginTop: 32 }}>
                Typical reply within one business day · Your information stays with me
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Testimonials, About, Contact });
