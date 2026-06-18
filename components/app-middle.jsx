/* global React */
const { useState: useStateB, useEffect: useEffectB } = React;

/* ============================================================
   QUEM SOMOS
============================================================ */
function About() {
  const tags = ['Probidade', 'Competência', 'Transparência', 'Credibilidade', 'Eficácia', 'Parceria'];
  return (
    <section className="about" id="sobre">
      <div className="container">
        <div className="about-grid">
          <div className="about-img reveal">
            <img className="img-ph" src="assets/aerial-cityscape.jpg" alt="Vista aérea de condomínios residenciais" />
            <div className="badge">
              <div className="y">2010</div>
              <div className="l">Fundada em</div>
            </div>
          </div>
          <div className="about-content reveal">
            <div className="section-label">Quem Somos</div>
            <h2 className="section-h2">
              A garantidora de referência no <em>Sul do Brasil</em>
            </h2>
            <div style={{ marginTop: 32 }}>
              <p>
                A Pró Garantia é especializada em antecipação garantida das receitas
                das taxas condominiais. Atendemos condomínios no Paraná, Santa Catarina
                e Espírito Santo há mais de 15 anos, com solidez nos repasses e
                experiência consolidada em cobranças.
              </p>
              <p>
                Assumimos todos os procedimentos de cobrança para que o síndico e a
                administradora possam focar no que realmente importa — a gestão
                operacional do condomínio.
              </p>
            </div>
            <div className="about-tags">
              {tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   BOLETO STRIP
============================================================ */
function BoletoStrip() {
  return (
    <section className="boleto" id="boleto">
      <div className="container">
        <div className="boleto-flex">
          <div>
            <h3>2ª Via de Boleto</h3>
            <p>
              Emita sua segunda via rapidamente por e-mail ou telefone.
              Boletos aceitos em toda a rede bancária, internet banking e casas lotéricas.
            </p>
          </div>
          <div className="boleto-cta">
            <a href="boleto-2via.html" className="btn btn-gold">
              Solicitar agora <Icon.Arrow/>
            </a>
            <a href="https://wa.me/554130151400" target="_blank" rel="noopener" className="btn btn-navy">
              <Icon.Whats/> Dúvidas · (41) 3015-1400
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SERVIÇOS
============================================================ */
function Services() {
  const cards = [
    {
      icon: <Icon.Money/>,
      title: 'Antecipação Garantida',
      desc: '100% da receita condominial até o 3º dia útil, independente dos condôminos.',
      img: 'assets/handshake.jpg',
      alt: 'Aperto de mãos fechando parceria',
      principal: true,
    },
    {
      icon: <Icon.Clock/>,
      title: 'Cobrança Especializada',
      desc: 'Equipe própria de cobradores, atuação presencial quando necessário e equipe jurídica integrada.',
      img: 'assets/meeting.jpg',
      alt: 'Reunião de negócios analisando indicadores',
    },
    {
      icon: <Icon.Doc/>,
      title: 'Consultoria Jurídica',
      desc: 'Assessoria jurídica sem custos e sem limite de consultas para síndicos e administradoras.',
      img: 'assets/facade.jpg',
      alt: 'Fachada de edifício corporativo iluminada',
    },
    {
      icon: <Icon.Trend/>,
      title: 'Cashback & Facilidades',
      desc: 'Boletos digitais ou físicos, relatórios mensais, CND gratuita e cashback condominial automático.',
      img: 'assets/aerial-residential.jpg',
      alt: 'Vista aérea de área residencial arborizada',
    },
  ];
  return (
    <section className="services" id="servicos">
      <div className="container">
        <div className="section-head-center reveal">
          <div className="section-label">Serviços</div>
          <h2 className="section-h2">
            Uma solução completa para o <em>condomínio</em>
          </h2>
          <p className="section-sub">
            Da antecipação à cobrança presencial, cuidamos de toda a operação
            financeira para que síndicos e administradoras foquem na gestão.
          </p>
        </div>
        <div className="services-grid">
          {cards.map((c, i) => (
            <div className="service-card reveal" key={i}>
              <img className="img-ph" src={c.img} alt={c.alt} />
              {c.principal && <span className="principal-tag">Serviço Principal</span>}
              <div className="content">
                <div className="icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p className="desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   DIFERENCIAIS
============================================================ */
function Differentials() {
  const items = [
    { n: '01', t: 'Solidez nos Repasses', d: 'Jamais atrasamos os repasses — 15 anos consecutivos de pontualidade absoluta.' },
    { n: '02', t: 'Acesso Facilitado à Gestão', d: 'Tratativas diretas e eficientes com síndicos e administradoras, sem burocracia.' },
    { n: '03', t: 'Experiência em Cobranças', d: 'Sólida expertise em inadimplência condominial, com equipe jurídica integrada.' },
    { n: '04', t: 'Cobrança Presencial', d: 'Atuamos presencialmente quando necessário, superando o padrão de mercado.' },
    { n: '05', t: 'Prestação de Contas Mensais', d: 'Relatórios mensais detalhados para total transparência da operação.' },
  ];
  return (
    <section className="differentials" id="diferenciais">
      <div className="container">
        <div className="diff-grid">
          <div className="reveal">
            <div className="section-label">Por que nos escolher</div>
            <h2 className="section-h2">
              O que nos torna <em>diferentes</em>
            </h2>
            <p className="section-sub">
              Não somos apenas uma garantidora — somos um parceiro estratégico
              que une solidez financeira, experiência operacional e cuidado
              próximo com cada condomínio.
            </p>
            <ul className="diff-list">
              {items.map(it => (
                <li className="diff-item" key={it.n}>
                  <div className="diff-num">{it.n}</div>
                  <div>
                    <h4>{it.t}</h4>
                    <p>{it.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="diff-visual reveal">
            <div className="diff-highlights">
              <div className="dh-group">
                <div className="dh-head">
                  <span className="dh-diamond">❖</span>
                  <h4>Taxa Unitária de Boletos</h4>
                </div>
                <ul className="dh-list">
                  <li><span className="check">✓</span><span>Taxa de geração de <strong>boleto digital</strong> pode chegar a <strong>R$ 1,00</strong> unitário.</span></li>
                  <li><span className="check">✓</span><span>Taxa de geração de <strong>boletos físicos</strong>: <strong>R$ 1,99</strong> unitário.</span></li>
                  <li><span className="check">✓</span><span>Envios de boletos: físico ou digital — por e-mail, WhatsApp ou direto em nosso site.</span></li>
                </ul>
              </div>
              <div className="dh-group">
                <div className="dh-head">
                  <span className="dh-diamond">❖</span>
                  <h4>Cashback</h4>
                  <span className="dh-note">"dinheiro de volta"</span>
                </div>
                <ul className="dh-list">
                  <li><span className="check">✓</span><span>Com a melhora histórica dos indicadores de liquidez dos condôminos, proporcionamos <strong>redução na Taxa de Serviços</strong> (Taxa de Garantidora).</span></li>
                  <li><span className="check">✓</span><span>O condomínio se beneficia com a redução, que se origina na própria atuação da Pró Garantia.</span></li>
                  <li><span className="check">✓</span><span>Essa economia pode ser <strong>investida em melhoramentos</strong> no próprio condomínio.</span></li>
                </ul>
              </div>
              <div className="dh-group">
                <div className="dh-head">
                  <span className="dh-diamond">❖</span>
                  <h4>Repasse Mensal</h4>
                </div>
                <ul className="dh-list">
                  <li><span className="check">✓</span><span><strong>100% da receita</strong> do condomínio é repassada até o <strong>3º dia útil</strong> após o vencimento, independente do pagamento pelos condôminos.</span></li>
                </ul>
              </div>
              <div className="dh-group">
                <div className="dh-head">
                  <span className="dh-diamond">❖</span>
                  <h4>Serviços Gratuitos</h4>
                </div>
                <ul className="dh-list">
                  <li><span className="check">✓</span><span><strong>Consultoria Jurídica</strong>: corpo jurídico próprio à disposição dos condomínios, sem limite de consultas.</span></li>
                  <li><span className="check">✓</span><span><strong>CND</strong>: Certidão Negativa de Débitos.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About, BoletoStrip, Services, Differentials });
