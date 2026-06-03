/* global React */
const { useState: useStateC } = React;

/* ============================================================
   COMO FUNCIONA
============================================================ */
function HowItWorks() {
  const steps = [
    {
      n: '01',
      t: 'Contato e Proposta',
      d: 'Analisamos o perfil do condomínio e elaboramos uma proposta ideal para sua realidade.',
      img: '../assets/handshake.jpg',
      alt: 'Reunião de apresentação e proposta',
    },
    {
      n: '02',
      t: 'Emissão dos Boletos',
      d: 'Assumimos a confecção e distribuição dos boletos — físicos ou digitais — para todos os condôminos.',
      img: '../assets/aerial-residential.jpg',
      alt: 'Vista aérea de condomínios',
    },
    {
      n: '03',
      t: 'Repasse Garantido',
      d: 'Até o 3º dia útil, 100% da receita é repassada ao condomínio — independente de quem pagou.',
      img: '../assets/facade.jpg',
      alt: 'Fachada de edifício',
    },
  ];
  return (
    <section className="how" id="como-funciona">
      <div className="container">
        <div className="section-head-center reveal">
          <div className="section-label">Como Funciona</div>
          <h2 className="section-h2">
            Três passos para a <em>tranquilidade financeira</em>
          </h2>
          <p className="section-sub">
            Um processo simples e transparente para colocar a saúde financeira
            do seu condomínio em piloto automático.
          </p>
        </div>
      </div>
      <div className="how-row">
        {steps.map(s => (
          <div className="how-step reveal" key={s.n}>
            <img className="img-ph" src={s.img} alt={s.alt} />
            <div className="content">
              <div className="step-num">{s.n}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
============================================================ */
function FAQ() {
  const [open, setOpen] = useStateC(0);
  const items = [
    {
      q: 'Como funciona o serviço de Antecipação?',
      a: 'Antecipação garantida: repassamos o integral da receita mensal na data programada, independente dos recebimentos das taxas condominiais. Com consulta prévia, também antecipamos verbas para obras e benfeitorias.',
    },
    {
      q: 'Como é feita a cobrança dos inadimplentes?',
      a: 'Nossa equipe especializada atua com cobradores internos e externos, além de equipe jurídica para ações judiciais — tudo sem custo ao condomínio. Quando necessário, realizamos cobranças presenciais, superando o padrão de mercado.',
    },
    {
      q: 'A consultoria jurídica tem algum custo?',
      a: 'Não. Disponibilizamos assessoria jurídica sem custo e sem limite de consultas. Atendemos de segunda a sexta, das 10h às 18h. Custas judiciais e honorários também são bancados pela Pró Garantia.',
    },
    {
      q: 'Como solicito a 2ª via de boleto?',
      a: 'Pelo telefone (41) 3015-1400, por e-mail em contato@progarantia.com.br. Os boletos são aceitos em toda a rede bancária, internet e casas lotéricas.',
    },
    {
      q: 'O que é o Cashback condominial?',
      a: 'Quando nossa atuação melhora os índices de liquidez dos condôminos, reduzimos automaticamente a Taxa de Serviços. O próprio resultado do nosso trabalho gera economia que pode ser reinvestida no condomínio.',
    },
  ];
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-left reveal">
            <div className="section-label">Dúvidas Frequentes</div>
            <h2 className="section-h2">
              Tudo o que você <em>precisa saber</em>
            </h2>
            <p className="section-sub">
              Respostas diretas para as perguntas mais comuns de síndicos e
              administradoras que avaliam nossa parceria.
            </p>
            <a href="mailto:contato@progarantia.com.br" className="btn btn-navy">
              <Icon.Mail/> Enviar Dúvida
            </a>
          </div>
          <div className="faq-list reveal">
            {items.map((it, i) => (
              <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{it.q}</span>
                  <span className="faq-icon"><Icon.Chevron/></span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">{it.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ESCRITÓRIOS
============================================================ */
function Offices() {
  return (
    <section className="offices" id="contato">
      <div className="container">
        <div className="section-head-center reveal">
          <div className="section-label">Nossos Escritórios</div>
          <h2 className="section-h2">
            Atendimento próximo e <em>presencial</em>
          </h2>
        </div>
        <div className="offices-grid">
          <div className="office-card reveal">
            <div className="office-photo">
              <img className="img-ph" src="../assets/city-night.jpg" alt="Curitiba à noite" />
              <span className="state-badge">Paraná</span>
              <div className="city">Curitiba</div>
            </div>
            <div className="office-body">
              <div className="office-row">
                <Icon.Pin/>
                <div>Alameda Augusto Stellfeld, 1314 — Bigorrilho<br/>CEP 80430-140 · Curitiba/PR</div>
              </div>
              <div className="office-row">
                <Icon.Phone/>
                <a href="tel:+554130151400">(41) 3015-1400</a>
              </div>
              <div className="office-row">
                <Icon.Mail/>
                <a href="mailto:contato@progarantia.com.br">contato@progarantia.com.br</a>
              </div>
              <div className="office-row">
                <Icon.Calendar/>
                <div>Segunda a sexta · 10h às 18h</div>
              </div>
            </div>
          </div>
          <div className="office-card reveal">
            <div className="office-photo">
              <img className="img-ph" src="../assets/campinas-aerial.jpg" alt="Vista aérea de Joinville" />
              <span className="state-badge">Santa Catarina</span>
              <div className="city">Joinville</div>
            </div>
            <div className="office-body">
              <div className="office-row">
                <Icon.Pin/>
                <div>Rua Lajes, 544 — Centro<br/>CEP 89201-205 · Joinville/SC</div>
              </div>
              <div className="office-row">
                <Icon.Phone/>
                <div>
                  <a href="tel:+554735120330">(47) 3512-0330</a>
                  <span style={{ color: 'var(--muted)' }}> &nbsp;·&nbsp; </span>
                  <a href="tel:+5547999151400">(47) 99915-1400</a>
                </div>
              </div>
              <div className="office-row">
                <Icon.Mail/>
                <div>
                  <span className="lbl" style={{ display: 'block', fontSize: 10, color: 'var(--muted)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 4 }}>Gestão de Clientes — Marco</span>
                  <a href="mailto:marco@progarantia.com.br">marco@progarantia.com.br</a>
                  <span style={{ color: 'var(--muted)' }}> &nbsp;·&nbsp; </span>
                  <a href="tel:+5541992287980">(41) 99228-7980</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CTA FINAL
============================================================ */
function CTAFinal() {
  return (
    <section className="cta-final">
      <img className="bg" src="../assets/glass-building.jpg" alt="" />
      <div className="container">
        <div className="section-label" style={{ color: 'var(--gold-light)', justifyContent: 'center', display: 'inline-flex' }}>
          Pronto para começar?
        </div>
        <h2>
          Se é Pro,
          <em>é Garantido.</em>
        </h2>
        <p>
          Solicite uma proposta personalizada e descubra como transformamos
          a gestão financeira do seu condomínio.
        </p>
        <div className="cta-buttons">
          <a href="mailto:contato@progarantia.com.br" className="btn btn-gold btn-lg">
            Solicitar Proposta <Icon.Arrow/>
          </a>
          <a href="tel:+554130151400" className="btn btn-ghost btn-lg">
            <Icon.Phone/> (41) 3015-1400
          </a>
        </div>
        <div className="cta-info">
          <span><Icon.Mail/> contato@progarantia.com.br</span>
          <span><Icon.Pin/> Curitiba &amp; Joinville</span>
          <span><Icon.Calendar/> Seg–Sex · 10h às 18h</span>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
============================================================ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <LogoMark/>
            <div className="slogan">"Se é Pro, é Garantido."</div>
            <div className="desc">
              Garantidora de taxas condominiais com mais de 15 anos atuando no
              Paraná, Santa Catarina e Espírito Santo. Solidez, transparência e
              parceria como compromisso.
            </div>
          </div>
          <div className="footer-col">
            <h5>Serviços</h5>
            <ul>
              <li><a href="#servicos">Antecipação Garantida</a></li>
              <li><a href="#servicos">Cobrança Especializada</a></li>
              <li><a href="#servicos">Consultoria Jurídica</a></li>
              <li><a href="#servicos">Cashback Condominial</a></li>
              <li><a href="#boleto">2ª Via de Boleto</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Empresa</h5>
            <ul>
              <li><a href="#sobre">Quem Somos</a></li>
              <li><a href="#diferenciais">Diferenciais</a></li>
              <li><a href="#como-funciona">Como Funciona</a></li>
              <li><a href="#faq">Dúvidas Frequentes</a></li>
            </ul>
          </div>
          <div className="footer-col footer-contact">
            <h5>Contato</h5>
            <ul>
              <li>
                <span className="lbl">Curitiba</span><br/>
                <a className="ph" href="tel:+554130151400">(41) 3015-1400</a>
              </li>
              <li>
                <span className="lbl">Joinville</span><br/>
                <a className="ph" href="tel:+554735120330">(47) 3512-0330</a>
              </li>
              <li>
                <span className="lbl">Gestão</span><br/>
                <a className="ph" href="tel:+5541992287980">(41) 99228-7980</a>
              </li>
              <li>
                <a href="mailto:contato@progarantia.com.br">contato@progarantia.com.br</a><br/>
                <a href="mailto:marco@progarantia.com.br">marco@progarantia.com.br</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2025 Pró Garantia Créditos e Cobranças · Todos os direitos reservados</div>
          <em>"Segurança e Tranquilidade Eliminando a Inadimplência"</em>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { HowItWorks, FAQ, Offices, CTAFinal, Footer });
