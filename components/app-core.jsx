/* global React */
const { useState, useEffect, useRef } = React;

/* ============================================================
   ICONS
============================================================ */
const Icon = {
  Arrow: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 5l7 7-7 7"/>
    </svg>
  ),
  Money: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9"/>
      <path d="M15 9.5a3 3 0 0 0-3-1.5c-1.66 0-3 .9-3 2s1.34 2 3 2 3 .9 3 2-1.34 2-3 2a3 3 0 0 1-3-1.5M12 6v2M12 16v2"/>
    </svg>
  ),
  Clock: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 7v5l3 2"/>
    </svg>
  ),
  Doc: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
      <path d="M14 3v6h6M9 14h6M9 17h4"/>
    </svg>
  ),
  Trend: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 17l6-6 4 4 8-8M14 7h7v7"/>
    </svg>
  ),
  Pin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 22s8-7.58 8-13a8 8 0 0 0-16 0c0 5.42 8 13 8 13z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
  ),
  Phone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <path d="m3 7 9 6 9-6"/>
    </svg>
  ),
  Calendar: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="16" rx="2"/>
      <path d="M3 9h18M8 3v4M16 3v4"/>
    </svg>
  ),
  Chevron: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  ),
  Whats: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.91-2.19-.24-.57-.48-.49-.66-.5l-.56-.01c-.2 0-.51.07-.78.37-.27.3-1.02 1-1.02 2.43 0 1.43 1.04 2.82 1.19 3.01.15.2 2.05 3.13 4.97 4.39.69.3 1.24.48 1.66.61.7.22 1.33.19 1.83.12.56-.08 1.75-.71 1.99-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.55 15.18L2 22l4.94-1.3A10 10 0 1 0 12 2zm0 18.17c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-2.93.77.78-2.86-.2-.3A8.17 8.17 0 1 1 12 20.17z"/>
    </svg>
  ),
  Lock: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="11" width="16" height="10" rx="2"/>
      <path d="M8 11V8a4 4 0 0 1 8 0v3"/>
    </svg>
  ),
  Close: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6 6 18M6 6l12 12"/>
    </svg>
  ),
};

/* ============================================================
   LOGO MARK (reusable)
============================================================ */
function LogoMark() {
  return (
    <a href="index.html" className="logo-mark" aria-label="Pró Garantia — Créditos e Cobranças">
      <img src="../assets/progarantia-logo.png" alt="Pró Garantia — Créditos e Cobranças" className="logo-img" />
    </a>
  );
}

/* ============================================================
   ANNOUNCEMENT BAR
============================================================ */
function AnnouncementBar() {
  return (
    <div className="announcement">
      <div className="container">
        <div className="ann-locs">PARANÁ · SANTA CATARINA · ESPÍRITO SANTO &nbsp;|&nbsp; +15 ANOS DE SOLIDEZ</div>
        <a href="contato.html">Solicite uma proposta →</a>
      </div>
    </div>
  );
}

/* ============================================================
   HEADER
============================================================ */
function Header({ onOpenMenu }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <LogoMark />
        <nav className="nav-main">
          <a href="quem-somos.html">Quem Somos</a>
          <a href="servicos.html">Serviços</a>
          <a href="diferenciais.html">Diferenciais</a>
          <a href="duvidas.html">Dúvidas</a>
          <a href="contato.html">Contato</a>
        </nav>
        <div className="header-cta">
          <a href="contato.html#boleto" className="btn btn-ghost">2ª Via de Boleto</a>
          <a href="contato.html" className="btn btn-gold">Fale Conosco</a>
        </div>
        <button className="hamburger" onClick={onOpenMenu} aria-label="Abrir menu">
          <span></span>
        </button>
      </div>
    </header>
  );
}

function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu ${open ? 'open' : ''}`}>
      <button className="close" onClick={onClose} aria-label="Fechar menu">
        <Icon.Close />
      </button>
      <nav>
        <a onClick={onClose} href="quem-somos.html">Quem Somos</a>
        <a onClick={onClose} href="servicos.html">Serviços</a>
        <a onClick={onClose} href="diferenciais.html">Diferenciais</a>
        <a onClick={onClose} href="duvidas.html">Dúvidas</a>
        <a onClick={onClose} href="contato.html">Contato</a>
      </nav>
      <div className="mm-cta">
        <a onClick={onClose} href="contato.html#boleto" className="btn btn-ghost">2ª Via de Boleto</a>
        <a onClick={onClose} href="contato.html" className="btn btn-gold">Fale Conosco</a>
      </div>
    </div>
  );
}

/* ============================================================
   HERO
============================================================ */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="eyebrow">GARANTIDORA DE TAXAS CONDOMINIAIS</div>
          <h1>
            Segurança e<br/>
            <em>Tranquilidade</em><br/>
            no seu Condomínio
          </h1>
          <p className="lead">
            Eliminamos a inadimplência sem nenhum custo ao condomínio.
            Repasse de 100% da receita até o 3º dia útil, com assessoria
            jurídica integral e cobrança especializada.
          </p>
          <div className="hero-cta">
            <a href="#contato" className="btn btn-gold btn-lg">
              Solicitar Proposta <Icon.Arrow/>
            </a>
            <a href="#servicos" className="btn btn-ghost btn-lg">Nossos Serviços</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="num">15+</div>
              <div className="lbl">Anos de Mercado</div>
            </div>
            <div className="stat">
              <div className="num">100%</div>
              <div className="lbl">Receita Garantida</div>
            </div>
            <div className="stat">
              <div className="num">R$ 0</div>
              <div className="lbl">Custo Jurídico</div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img className="img-ph" src="../assets/hero-tower.jpg" alt="Edifício residencial moderno ao entardecer" />
          <div className="hero-badge">
            <div className="y">2010</div>
            <div className="l">Fundada em</div>
          </div>
          <div className="hero-logo-anim">
            <svg viewBox="0 0 200 200" width="160" height="160">
              <defs>
                <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#D4AF6E"/>
                  <stop offset="1" stopColor="#B8963E"/>
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="80" fill="none" stroke="url(#lg)" strokeWidth="2.5">
                <animate attributeName="stroke-dasharray" values="0,500;500,0" dur="3s" repeatCount="indefinite"/>
              </circle>
              <text x="100" y="120" fontFamily="Cormorant Garamond, serif" fontWeight="700" fontSize="92" fill="url(#lg)" textAnchor="middle">G</text>
              <path d="M 135 90 L 148 103 L 170 78" stroke="url(#lg)" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TICKER
============================================================ */
function Ticker() {
  const items = [
    "Se é Pro, é Garantido",
    "Segurança e Tranquilidade sem Inadimplência",
    "Repasse 100% Garantido",
    "Assessoria Jurídica sem Custos",
    "15 anos de Solidez",
  ];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Icon, LogoMark, AnnouncementBar, Header, MobileMenu, Hero, Ticker });
