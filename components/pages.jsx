/* global React, ReactDOM */
const { useState: useStateP, useEffect: useEffectP } = React;

/* ============================================================
   PAGE HERO (inner banner)
============================================================ */
function PageHero({ eyebrow, title, lead, bg, crumb }) {
  return (
    <section className="page-hero">
      <img className="bg" src={bg} alt="" />
      <div className="container">
        <div className="breadcrumb">
          <a href="index.html">Início</a>
          <span className="sep">/</span>
          <span className="current">{crumb}</span>
        </div>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}

/* ============================================================
   VALUES
============================================================ */
function Values() {
  const cards = [
    {
      icon: <Icon.Trend/>,
      t: 'Missão',
      d: 'Garantir a saúde financeira dos condomínios eliminando a inadimplência, com repasses pontuais e atendimento humano e próximo.',
    },
    {
      icon: <Icon.Money/>,
      t: 'Visão',
      d: 'Ser a garantidora de taxas condominiais de referência no Sul e Sudeste do Brasil, reconhecida pela solidez e confiança.',
    },
    {
      icon: <Icon.Doc/>,
      t: 'Valores',
      d: 'Probidade, competência, transparência, credibilidade, eficácia e parceria em cada relação que construímos.',
    },
  ];
  return (
    <section className="values">
      <div className="container">
        <div className="section-head-center reveal">
          <div className="section-label">Nossos Princípios</div>
          <h2 className="section-h2">O que nos <em>move</em></h2>
        </div>
        <div className="values-grid">
          {cards.map(c => (
            <div className="value-card reveal" key={c.t}>
              <div className="vc-icon">{c.icon}</div>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   STATS BAND
============================================================ */
function StatsBand() {
  const stats = [
    { n: '15+', l: 'Anos de Mercado' },
    { n: '100%', l: 'Receita Garantida' },
    { n: '3º', l: 'Dia útil de Repasse' },
    { n: 'R$ 0', l: 'Custo Jurídico' },
  ];
  return (
    <section className="stats-band">
      <div className="container">
        <div className="stats-band-grid">
          {stats.map(s => (
            <div className="stat reveal" key={s.l}>
              <div className="num">{s.n}</div>
              <div className="lbl">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE SHELL
============================================================ */
function PageShell({ children }) {
  const [menuOpen, setMenuOpen] = useStateP(false);
  useEffectP(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
  useEffectP(() => { document.body.style.overflow = menuOpen ? 'hidden' : ''; }, [menuOpen]);
  return (
    <React.Fragment>
      <AnnouncementBar />
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}

/* ============================================================
   PAGE: QUEM SOMOS
============================================================ */
function QuemSomosPage() {
  return (
    <PageShell>
      <PageHero
        crumb="Quem Somos"
        eyebrow="QUEM SOMOS"
        title={<>Solidez e parceria há <em>mais de 15 anos</em></>}
        lead="Especialistas em antecipação garantida de receitas condominiais, atendendo o Paraná, Santa Catarina e Espírito Santo com pontualidade e cuidado."
        bg="../assets/aerial-cityscape.jpg"
      />
      <About />
      <Values />
      <StatsBand />
      <CTAFinal />
    </PageShell>
  );
}

/* ============================================================
   PAGE: SERVIÇOS
============================================================ */
function ServicosPage() {
  return (
    <PageShell>
      <PageHero
        crumb="Serviços"
        eyebrow="O QUE FAZEMOS"
        title={<>Uma solução completa para o <em>condomínio</em></>}
        lead="Da antecipação garantida à cobrança presencial, assumimos toda a operação financeira para que síndicos e administradoras foquem na gestão."
        bg="../assets/glass-building.jpg"
      />
      <Services />
      <HowItWorks />
      <BoletoStrip />
      <CTAFinal />
    </PageShell>
  );
}

/* ============================================================
   PAGE: DIFERENCIAIS
============================================================ */
function DiferenciaisPage() {
  return (
    <PageShell>
      <PageHero
        crumb="Diferenciais"
        eyebrow="POR QUE NOS ESCOLHER"
        title={<>O que nos torna <em>diferentes</em></>}
        lead="Mais que uma garantidora, somos um parceiro estratégico que une solidez financeira, experiência operacional e cuidado próximo com cada condomínio."
        bg="../assets/facade.jpg"
      />
      <Differentials />
      <StatsBand />
      <CTAFinal />
    </PageShell>
  );
}

/* ============================================================
   PAGE: DÚVIDAS
============================================================ */
function DuvidasPage() {
  return (
    <PageShell>
      <PageHero
        crumb="Dúvidas"
        eyebrow="PERGUNTAS FREQUENTES"
        title={<>Tudo o que você <em>precisa saber</em></>}
        lead="Respostas diretas para as perguntas mais comuns de síndicos e administradoras que avaliam nossa parceria."
        bg="../assets/meeting.jpg"
      />
      <FAQ />
      <BoletoStrip />
      <CTAFinal />
    </PageShell>
  );
}

/* ============================================================
   PAGE: CONTATO
============================================================ */
function ContatoPage() {
  return (
    <PageShell>
      <PageHero
        crumb="Contato"
        eyebrow="FALE CONOSCO"
        title={<>Atendimento próximo e <em>presencial</em></>}
        lead="Estamos em Curitiba e Joinville, prontos para elaborar uma proposta sob medida para o seu condomínio."
        bg="../assets/city-night.jpg"
      />
      <Offices />
      <BoletoStrip />
      <CTAFinal />
    </PageShell>
  );
}

/* ============================================================
   PAGE: 2ª VIA DE BOLETO (simulação)
============================================================ */
function maskCPF(v) {
  v = v.replace(/\D/g, '').slice(0, 11);
  if (v.length > 9) return v.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
  if (v.length > 6) return v.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
  if (v.length > 3) return v.replace(/(\d{3})(\d{1,3})/, '$1.$2');
  return v;
}

function BoletoForm() {
  const [cpf, setCpf] = useStateP('');
  const [senha, setSenha] = useStateP('');
  const [showPw, setShowPw] = useStateP(false);
  const [result, setResult] = useStateP(false);
  const [err, setErr] = useStateP('');

  const submit = (e) => {
    e.preventDefault();
    if (cpf.replace(/\D/g, '').length < 11 || !senha) {
      setErr('Preencha o CPF completo e a senha para consultar.');
      return;
    }
    setErr('');
    setResult(true);
  };

  const reset = () => { setResult(false); setCpf(''); setSenha(''); };

  return (
    <section className="boleto-page">
      <div className="container">
        <div className="boleto-layout">
          {/* form / login card */}
          <div className="boleto-card reveal">
            <div className="bc-head">
              <div className="bc-lock"><Icon.Lock/></div>
              <div>
                <h3>Consulta de 2ª Via</h3>
                <p>Acesso do condômino</p>
              </div>
            </div>

            {!result ? (
              <form onSubmit={submit} className="bc-form" noValidate>
                <label className="field">
                  <span>CPF</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={(e) => setCpf(maskCPF(e.target.value))}
                    autoComplete="off"
                  />
                </label>
                <label className="field">
                  <span>Senha</span>
                  <div className="pw-wrap">
                    <input
                      type={showPw ? 'text' : 'password'}
                      placeholder="Digite sua senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      autoComplete="off"
                    />
                    <button type="button" className="pw-toggle" onClick={() => setShowPw(!showPw)} aria-label="Mostrar senha">
                      {showPw ? 'ocultar' : 'mostrar'}
                    </button>
                  </div>
                </label>
                {err && <div className="bc-err">{err}</div>}
                <button type="submit" className="btn btn-gold btn-lg bc-submit">
                  Consultar 2ª Via de Boleto <Icon.Arrow/>
                </button>
                <a href="https://wa.me/554130151400" target="_blank" rel="noopener" className="bc-help">
                  <Icon.Whats/> Esqueci minha senha — falar no WhatsApp
                </a>
              </form>
            ) : (
              <div className="bc-result">
                <div className="boleto-doc">
                  <div className="bd-top">
                    <img src="../assets/progarantia-logo.png" alt="Pró Garantia" className="bd-logo" />
                    <span className="bd-status">Em aberto</span>
                  </div>
                  <div className="bd-rows">
                    <div className="bd-row"><span>Sacado</span><strong>Condômino — CPF {cpf}</strong></div>
                    <div className="bd-row"><span>Condomínio</span><strong>Residencial Exemplo</strong></div>
                    <div className="bd-row"><span>Referência</span><strong>Junho / 2026</strong></div>
                    <div className="bd-row"><span>Vencimento</span><strong>10/06/2026</strong></div>
                    <div className="bd-row bd-total"><span>Valor</span><strong>R$ 487,90</strong></div>
                  </div>
                  <div className="bd-line">
                    <span>Linha digitável</span>
                    <code>34191.79001 01043.510047 91020.150008 1 99410000048790</code>
                  </div>
                  <div className="bd-barcode" aria-hidden="true">
                    {Array.from({ length: 60 }).map((_, i) => (
                      <i key={i} style={{ width: (i % 4 === 0 ? 3 : i % 3 === 0 ? 1 : 2) + 'px' }}></i>
                    ))}
                  </div>
                  <div className="bd-actions">
                    <button className="btn btn-navy" onClick={() => window.print()}><Icon.Doc/> Imprimir / PDF</button>
                    <button className="btn btn-ghost-dark" onClick={() => { navigator.clipboard && navigator.clipboard.writeText('34191790010104351004791020150008199410000048790'); }}>Copiar linha digitável</button>
                  </div>
                </div>
                <button className="bc-back" onClick={reset}>← Fazer nova consulta</button>
              </div>
            )}
          </div>

          {/* info side */}
          <aside className="boleto-aside reveal">
            <div className="sim-note">
              <Icon.Doc/>
              <div>
                <strong>Ambiente de demonstração</strong>
                Esta é uma simulação para você visualizar como funcionará a consulta.
                Nenhum dado é enviado ou armazenado.
              </div>
            </div>
            <ul className="boleto-help-list">
              <li><Icon.Money/><div><strong>Pague onde preferir</strong>Aceito em toda a rede bancária, internet banking e casas lotéricas.</div></li>
              <li><Icon.Clock/><div><strong>Disponível 24h</strong>Emita sua segunda via a qualquer momento, sem espera.</div></li>
              <li><Icon.Whats/><div><strong>Suporte humano</strong>Dúvidas? Fale com nossa equipe pelo WhatsApp (41) 3015-1400.</div></li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Boleto2ViaPage() {
  return (
    <PageShell>
      <PageHero
        crumb="2ª Via de Boleto"
        eyebrow="ÁREA DO CONDÔMINO"
        title={<>Sua <em>2ª via</em> em segundos</>}
        lead="Informe seu CPF e senha para emitir a segunda via do seu boleto condominial."
        bg="../assets/facade.jpg"
      />
      <BoletoForm />
      <CTAFinal />
    </PageShell>
  );
}

/* ============================================================
   MOUNT — selects component from <body data-page>
============================================================ */
const PAGES = {
  'quem-somos': QuemSomosPage,
  'servicos': ServicosPage,
  'diferenciais': DiferenciaisPage,
  'duvidas': DuvidasPage,
  'contato': ContatoPage,
  'boleto-2via': Boleto2ViaPage,
};
const pageKey = document.body.getAttribute('data-page');
const PageComponent = PAGES[pageKey];
if (PageComponent) {
  ReactDOM.createRoot(document.getElementById('root')).render(<PageComponent />);
}
