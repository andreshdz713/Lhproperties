// Shared UI components: Nav, Footer, Placeholder, Marquee
const { useEffect, useState, useRef } = React;

function Nav({ current, onNav }) {
  const [shrunk, setShrunk] = useState(false);
  const [buyingOpen, setBuyingOpen] = useState(false);
  const [sellingOpen, setSellingOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {document.body.style.overflow = '';};
  }, [mobileOpen]);

  const tabs = [
  ['home', 'Home'],
  ['buying', 'Buying'],
  ['selling', 'Selling'],
  ['leasing', 'Leasing'],
  ['testimonials', 'Testimonials'],
  ['about', 'About Me'],
  ['contact', 'Contact']];


  const closeMobile = () => setMobileOpen(false);
  const navTo = (id, sub) => {onNav(id, sub);closeMobile();};

  const renderDropdown = (id, label, open, setOpen, items) =>
  <div
    key={id}
    className={`nav-dropdown ${open ? 'open' : ''}`}
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}>

      <a
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        if (window.matchMedia('(max-width: 1024px)').matches) {
          setOpen(!open);
        } else {
          navTo(id);
        }
      }}
      className={current === id ? 'active' : ''}>

        {label}
        <span className="nav-dropdown-caret" aria-hidden="true">+</span>
      </a>
      <div className={`nav-menu ${open ? 'open' : ''}`}>
        {items.map(([sub, title, desc], i) =>
      <a
        key={sub}
        href={`#${id}`}
        onClick={(e) => {e.preventDefault();navTo(id, sub);setOpen(false);}}>

            <span className="nav-menu-num">{String(i + 1).padStart(2, '0')}</span>
            <span>
              <span className="nav-menu-title">{title}</span>
              <span className="nav-menu-sub">{desc}</span>
            </span>
          </a>
      )}
      </div>
    </div>;


  return (
    <nav className={`nav ${shrunk ? 'shrunk' : ''}`}>
      <a href="#home" onClick={(e) => {e.preventDefault();navTo('home');}} className="nav-brand">
        Loan Hoang <span className="initials" style={{ color: 'var(--taupe)', marginLeft: 8, fontSize: '0.75em', letterSpacing: '0.1em', fontFamily: 'JetBrains Mono, monospace', fontStyle: 'normal', textTransform: 'uppercase' }}>Texas Realtor</span>
      </a>
      <button
        className={`nav-burger ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
        
        <span></span><span></span><span></span>
      </button>
      <div className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
        {tabs.map(([id, label]) => {
          if (id === 'buying') {
            return renderDropdown(id, label, buyingOpen, setBuyingOpen, [
            ['overview', 'Overview', 'Featured listings and process'],
            ['calculator', 'Payment Calculator', 'Estimate your monthly cost']]
            );
          }
          if (id === 'selling') {
            return renderDropdown(id, label, sellingOpen, setSellingOpen, [
            ['overview', 'Overview', 'My process, start to close'],
            ['valuation', "What's My Home Worth?", 'Free, tailored home estimate']]
            );
          }
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {e.preventDefault();navTo(id);}}
              className={current === id ? 'active' : ''}>
              
              {label}
            </a>);

        })}
      </div>
    </nav>);

}

function Footer({ onNav }) {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--bone)', padding: '96px 48px 32px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, paddingBottom: 80, borderBottom: '1px solid rgba(243,242,231,0.2)' }}>
        <div>
          <div className="serif" style={{ fontSize: 40, lineHeight: 1.1, marginBottom: 20, maxWidth: 420 }}>
            Let's find the place that feels like home.
          </div>
          <a href="#contact" onClick={(e) => {e.preventDefault();onNav('contact');}} className="link-underline" style={{ color: 'var(--bone)', borderColor: 'var(--bone)' }}>
            Start a conversation →
          </a>
        </div>
        <div>
          <div className="eyebrow" style={{ color: 'var(--clay)', marginBottom: 18 }}>Office</div>
          <div style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(243,242,231,0.8)' }}>
            Houston, Texas<br />
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ color: 'var(--clay)', marginBottom: 18 }}>Contact</div>
          <div style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(243,242,231,0.8)' }}>
            <a href="mailto:loan@hoangproperties.com" style={{ color: 'inherit', borderBottom: '1px solid rgba(243,242,231,0.3)' }}>Loan@Hoangproperties.com</a><br />
            <a href="tel:+18323643629" style={{ color: 'inherit', borderBottom: '1px solid rgba(243,242,231,0.3)' }}>(832) 364 3629</a><br />
            By appointment
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ color: 'var(--clay)', marginBottom: 18 }}>Navigate</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, color: 'rgba(243,242,231,0.8)' }}>
            <a href="#buying" onClick={(e) => {e.preventDefault();onNav('buying');}}>Buying</a>
            <a href="#selling" onClick={(e) => {e.preventDefault();onNav('selling');}}>Selling</a>
            <a href="#leasing" onClick={(e) => {e.preventDefault();onNav('leasing');}}>Leasing</a>
            <a href="#about" onClick={(e) => {e.preventDefault();onNav('about');}}>About</a>
          </div>
        </div>
      </div>
      <div className="container" style={{ paddingTop: 40, borderTop: '1px solid rgba(243,242,231,0.15)', marginTop: 24 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, fontSize: 12, color: 'rgba(243,242,231,0.75)', marginBottom: 18 }}>
          <a href="docs/consumer-protection-notice.pdf" target="_blank" rel="noopener" style={{ borderBottom: '1px solid rgba(243,242,231,0.3)' }}>Texas Real Estate Commission Consumer Protection Notice</a>
          <span style={{ color: 'rgba(243,242,231,0.3)' }}>|</span>
          <a href="docs/information-about-brokerage-services.pdf" target="_blank" rel="noopener" style={{ borderBottom: '1px solid rgba(243,242,231,0.3)' }}>Texas Real Estate Commission Information About Brokerage Services</a>
        </div>
        <div style={{ fontSize: 12, color: 'rgba(243,242,231,0.65)', marginBottom: 24, lineHeight: 1.7 }}>
          © 2026 Loan Hoang, Realtor<sup style={{ fontSize: 8 }}>®</sup> | TREC LIC #717039 | NextGen Real Estate Properties · All rights reserved · Member HAR, TAR, NAR
        </div>
        <p style={{ fontSize: 11, lineHeight: 1.75, color: 'rgba(243,242,231,0.55)', maxWidth: 1200 }}>
          Loan Hoang is a real estate agent affiliated with NextGen Real Estate Properties, a licensed Texas real estate broker and abides by all applicable Equal Housing Opportunity laws. All material presented herein is intended for informational purposes only. Information is compiled from sources deemed reliable but is subject to errors, omissions, changes in price, condition, sale, or withdrawal without notice. No statement is made as to accuracy of any description. All measurements and square footages are approximate. This is not intended to solicit property already listed. Some or all of the listings may not belong to the firm whose website is being visited. Nothing herein shall be construed as legal, accounting or other professional advice outside the realm of real estate brokerage.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(243,242,231,0.1)' }}>
          <div style={{ width: 28, height: 28, border: '1.5px solid rgba(243,242,231,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontFamily: 'Cormorant Garamond, serif' }}>⌂</div>
          <div style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(243,242,231,0.55)', fontFamily: 'JetBrains Mono, monospace' }}>
            Equal Housing Opportunity · Fair Housing Act
          </div>
        </div>
      </div>
    </footer>);

}

function Placeholder({ label, variant = 'cream', style = {}, height }) {
  const cls = variant === 'clay' ? 'ph ph-clay' :
  variant === 'taupe' ? 'ph ph-taupe' :
  variant === 'ink' ? 'ph ph-ink' : 'ph';
  return (
    <div className={cls} style={{ width: '100%', height: height || '100%', ...style }}>
      <span className="ph-label">{label}</span>
    </div>);

}

function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>);

}

Object.assign(window, { Nav, Footer, Placeholder, Marquee });