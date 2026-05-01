/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakSlider, TweakColor */
const { useState, useEffect, useRef } = React;

/* ----------------------------------------------------------------
   CONTATO — edite estes valores e tudo no site se ajusta sozinho.
   ---------------------------------------------------------------- */
const CONTACT = {
  whatsappNumber: "5586999990000",
  whatsappDisplay: "+55 86 99999 0000",
  phone: "+55 86 3000 0000",
  phoneTel: "+558630000000",
  email: "contato@hugovaz.adv.br",
  addressLines: [
    "Edifício Euro Business · Sala 1207",
    "Av. Nossa Senhora de Fátima, 1234",
    "Bairro de Fátima · Teresina · PI · 64049-200",
  ],
  mapsQuery: "Edifício Euro Business, Av. Nossa Senhora de Fátima, Teresina, PI",
  hoursLines: [
    "Segunda a sexta · 09h às 18h",
    "Atendimentos noturnos mediante agendamento",
  ],
};

const waLink = (text) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
const mapsEmbed =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(CONTACT.mapsQuery) +
  "&output=embed";

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "navy",
  "showAccent": true,
  "serifWeight": 400,
  "density": "spacious",
  "showCrest": true
}/*EDITMODE-END*/;

const PALETTES = {
  navy:    { bg: "#0B1B2B", bg2: "#0F2235", bg3: "#14304A" },
  midnight:{ bg: "#070F1A", bg2: "#0B1726", bg3: "#13243B" },
  graphite:{ bg: "#1A1F26", bg2: "#22282F", bg3: "#2C333C" },
};

/* ---------------------------------------------------------------- */
/* tiny helpers                                                     */
/* ---------------------------------------------------------------- */
const SectionLabel = ({ n, children }) => (
  <div style={styles.sectionLabel}>
    <span style={styles.sectionLabelN}>{n}</span>
    <span style={styles.sectionLabelDot} />
    <span>{children}</span>
  </div>
);

const Crest = ({ size = 44, color = "#F5F1EA" }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" aria-hidden>
    <rect x="0.5" y="0.5" width="43" height="43" fill="none" stroke={color} strokeOpacity="0.35" />
    <text x="22" y="20" textAnchor="middle" fontFamily="Cormorant Garamond, serif"
          fontSize="14" fontStyle="italic" fill={color} letterSpacing="1">HV</text>
    <line x1="10" y1="26" x2="34" y2="26" stroke={color} strokeOpacity="0.5" />
    <text x="22" y="35" textAnchor="middle" fontFamily="Inter, sans-serif"
          fontSize="6" fill={color} fillOpacity="0.7" letterSpacing="2">MMXIV</text>
  </svg>
);

/* ---------------------------------------------------------------- */
/* NAV                                                              */
/* ---------------------------------------------------------------- */
const Nav = ({ palette, onContact }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onS); onS();
    return () => window.removeEventListener("scroll", onS);
  }, []);
  return (
    <nav style={{
      ...styles.nav,
      background: scrolled ? palette.bg : "transparent",
      borderBottom: scrolled ? "1px solid rgba(245,241,234,0.08)" : "1px solid transparent",
    }}>
      <div style={styles.navInner}>
        <a href="#top" style={styles.brand}>
          <span style={styles.brandSerif}>Hugo Vaz</span>
        </a>
        <ul style={styles.navLinks}>
          <li><a href="#escritorio" style={styles.navLink}>Escritório</a></li>
          <li><a href="#atuacao"   style={styles.navLink}>Atuação</a></li>
          <li><a href="#processo"  style={styles.navLink}>Processo</a></li>
          <li><a href="#contato"   style={styles.navLink}>Contato</a></li>
        </ul>
        <button style={styles.navCta} onClick={onContact} className="nav-cta">
          Consulta reservada
          <span style={styles.navCtaArrow}>→</span>
        </button>
      </div>
    </nav>
  );
};

/* ---------------------------------------------------------------- */
/* HERO                                                             */
/* ---------------------------------------------------------------- */
const Hero = ({ showCrest, showAccent }) => (
  <header id="top" style={styles.hero} data-hero>
    <div style={styles.heroGrain} />
    <div style={styles.heroInner} data-section-inner>
      <div style={styles.heroMeta}>
        <span style={styles.heroMetaDot} />
        <span>Teresina · Piauí</span>
        <span style={styles.heroMetaSep}>·</span>
        <span>Edifício Euro Business</span>
        <span style={styles.heroMetaSep}>·</span>
        <span>Desde 2014</span>
      </div>

      <h1 style={styles.heroTitle}>
        A defesa <em style={styles.heroEm}>séria</em> dos seus<br/>
        direitos previdenciários,<br/>
        conduzida com <em style={styles.heroEm}>discrição</em>.
      </h1>

      <p style={styles.heroLede}>
        Há mais de uma década, o escritório <strong>Hugo Vaz da Rocha</strong> assessora
        servidores públicos, profissionais liberais e segurados do INSS em causas
        previdenciárias de alta complexidade, com a maturidade técnica e o cuidado
        humano que cada história exige.
      </p>

      <div style={styles.heroActions}>
        <a href="#contato" style={styles.btnPrimary}>
          Agendar análise do caso
          <span style={styles.btnArrow}>→</span>
        </a>
        <a href="#atuacao" style={styles.btnGhost}>
          Áreas de atuação
        </a>
      </div>

      <div style={styles.heroFoot} data-grid="hero-stats">
        <div style={styles.heroStat}>
          <div style={styles.heroStatN}>12</div>
          <div style={styles.heroStatL}>anos<br/>de atuação</div>
        </div>
        <div style={styles.heroStatRule} data-rule />
        <div style={styles.heroStat}>
          <div style={styles.heroStatN}>+ 800</div>
          <div style={styles.heroStatL}>processos<br/>previdenciários</div>
        </div>
        <div style={styles.heroStatRule} data-rule />
        <div style={styles.heroStat}>
          <div style={styles.heroStatN}>OAB / PI</div>
          <div style={styles.heroStatL}>nº 14.732<br/>Hugo Vaz da Rocha</div>
        </div>
      </div>


      {showAccent && <div style={styles.heroAccent} />}
    </div>
    <div style={styles.heroFootRule} />
  </header>
);

/* ---------------------------------------------------------------- */
/* ESCRITÓRIO                                                       */
/* ---------------------------------------------------------------- */
const Escritorio = () => (
  <section id="escritorio" style={styles.section}>
    <div style={styles.sectionInner} data-section-inner>
      <SectionLabel n="01">O escritório</SectionLabel>
      <div style={styles.twoCol} data-grid="2col">
        <div>
          <h2 style={styles.h2}>
            Uma banca pequena por escolha.<br/>
            <em style={styles.serifEm}>Pessoal</em> por convicção.
          </h2>
        </div>
        <div style={styles.twoColRight}>
          <p style={styles.body}>
            Fundado em 2014 e instalado no <strong>Edifício Euro Business</strong>,
            na zona leste de Teresina, o escritório foi concebido para receber um
            número reservado de clientes a cada ano. Cada caso é analisado, conduzido
            e acompanhado pessoalmente pelo titular, sem terceirizações, sem
            atendimentos em massa.
          </p>
          <p style={styles.body}>
            Trabalhamos para quem espera mais do que uma petição: um interlocutor
            atento, uma estratégia honesta e um compromisso de longo prazo com a
            integridade do seu benefício.
          </p>
          <ul style={styles.pillars}>
            <li><span style={styles.pillarN}>I.</span><span><strong>Discrição.</strong> Sigilo absoluto sobre fatos, valores e identidades.</span></li>
            <li><span style={styles.pillarN}>II.</span><span><strong>Maturidade técnica.</strong> Doze anos dedicados a uma única matéria.</span></li>
            <li><span style={styles.pillarN}>III.</span><span><strong>Resposta direta.</strong> Você fala com o advogado, não com um setor.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* ---------------------------------------------------------------- */
/* ATUAÇÃO                                                          */
/* ---------------------------------------------------------------- */
const AREAS = [
  { n: "I",   t: "Aposentadorias",
    d: "Por idade, tempo de contribuição, especial, da pessoa com deficiência e revisões da vida toda.",
    bullets: ["Planejamento previdenciário", "Aposentadoria especial", "Revisão de benefício"] },
  { n: "II",  t: "Servidores Públicos",
    d: "Aposentadoria de servidor federal, estadual e municipal, paridade, integralidade e abono de permanência.",
    bullets: ["Regime Próprio (RPPS)", "Pensão por morte", "Conversão de tempo especial"] },
  { n: "III", t: "Benefícios por Incapacidade",
    d: "Auxílio-doença, aposentadoria por invalidez, BPC/LOAS e auxílio-acidente, com perícia médica acompanhada.",
    bullets: ["Auxílio-doença / invalidez", "BPC ao idoso e à PcD", "Auxílio-acidente"] },
  { n: "IV",  t: "Revisões e Recursos",
    d: "Revisão de cálculos, teto, vida toda, reafirmação da DER e recursos administrativos e judiciais.",
    bullets: ["Revisão da vida toda", "Reafirmação da DER", "Recursos no INSS e TRFs"] },
];

const Atuacao = () => (
  <section id="atuacao" style={{...styles.section, background: "var(--paper-2)"}}>
    <div style={styles.sectionInner} data-section-inner>
      <SectionLabel n="02">Áreas de atuação</SectionLabel>
      <h2 style={{...styles.h2, maxWidth: 820}}>
        Concentração total em <em style={styles.serifEm}>Direito Previdenciário</em>.
      </h2>
      <p style={{...styles.body, maxWidth: 720, marginBottom: 64}}>
        Não somos um escritório generalista. A nossa profundidade vem de uma escolha
        feita há mais de uma década: atuar exclusivamente onde podemos entregar
        o melhor resultado possível.
      </p>

      <div style={styles.areaGrid} data-grid="areas">
        {AREAS.map(a => (
          <article key={a.n} style={styles.areaCard}>
            <div style={styles.areaN}>{a.n}.</div>
            <h3 style={styles.areaT}>{a.t}</h3>
            <p style={styles.areaD}>{a.d}</p>
            <ul style={styles.areaBullets}>
              {a.bullets.map(b => <li key={b}>· {b}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------------------------------------------------------- */
/* TITULAR                                                          */
/* ---------------------------------------------------------------- */
const Titular = () => (
  <section style={{...styles.section, background: "var(--navy-2)", color: "var(--paper)"}}>
    <div style={styles.sectionInner} data-section-inner>
      <SectionLabel n="03" dark>O titular</SectionLabel>
      <div style={styles.titularGrid} data-grid="titular">
        <div style={{...styles.titularPh}}>
          <img src="assets/hugo-vaz.jpeg" alt="Hugo Vaz da Rocha" style={styles.imgFill} />
        </div>
        <div>
          <div style={styles.titularName}>Hugo Vaz da Rocha</div>
          <div style={styles.titularRole}>Advogado titular · OAB/PI 14.732</div>

          <p style={{...styles.body, color: "rgba(245,241,234,0.78)", marginTop: 28}}>
            Bacharel em Direito pela Universidade Federal do Piauí, pós-graduado
            em Direito Previdenciário e Processual Previdenciário pela
            Escola Brasileira de Direito (EBRADI), com extensão em
            Aposentadoria Especial pelo IBDP.
          </p>
          <p style={{...styles.body, color: "rgba(245,241,234,0.78)"}}>
            Membro do Instituto Brasileiro de Direito Previdenciário (IBDP) e
            da Comissão de Direito Previdenciário da OAB/PI. Autor de pareceres
            técnicos e palestrante em cursos de aperfeiçoamento profissional.
          </p>

          <ul style={styles.titularList}>
            <li>
              <span style={styles.titularListN}>·</span>
              <span><strong>Formação.</strong> Direito · UFPI · 2012</span>
            </li>
            <li>
              <span style={styles.titularListN}>·</span>
              <span><strong>Pós-graduação.</strong> Direito Previdenciário · EBRADI · 2015</span>
            </li>
            <li>
              <span style={styles.titularListN}>·</span>
              <span><strong>Atuação.</strong> Banca própria desde 2014 · Teresina · PI</span>
            </li>
            <li>
              <span style={styles.titularListN}>·</span>
              <span><strong>Filiação.</strong> IBDP · Comissão OAB/PI</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* ---------------------------------------------------------------- */
/* PROCESSO                                                         */
/* ---------------------------------------------------------------- */
const STEPS = [
  { n: "01", t: "Contato reservado",
    d: "Você apresenta sua situação por telefone, WhatsApp ou e-mail. A primeira triagem é feita pelo próprio advogado em até 24 horas úteis." },
  { n: "02", t: "Análise documental",
    d: "Mediante CNIS, carnês e documentos pessoais, montamos um diagnóstico técnico do seu histórico contributivo e dos cenários possíveis." },
  { n: "03", t: "Reunião estratégica",
    d: "Em sessão presencial no Euro Business, ou por vídeo se preferir, discutimos cenários, prazos, riscos, custos e a melhor estratégia." },
  { n: "04", t: "Condução do processo",
    d: "Acompanhamento pessoal de cada movimentação administrativa ou judicial, com relatórios periódicos e linha direta com o titular." },
];

const Processo = () => (
  <section id="processo" style={styles.section}>
    <div style={styles.sectionInner} data-section-inner>
      <SectionLabel n="04">Como trabalhamos</SectionLabel>
      <h2 style={{...styles.h2, maxWidth: 820}}>
        Quatro etapas, conduzidas <em style={styles.serifEm}>pessoalmente</em>.
      </h2>

      <ol style={styles.steps}>
        {STEPS.map((s, i) => (
          <li key={s.n} style={styles.step} data-grid="step">
            <div style={styles.stepN}>{s.n}</div>
            <div style={styles.stepBody}>
              <h3 style={styles.stepT}>{s.t}</h3>
              <p style={styles.stepD}>{s.d}</p>
            </div>
            {i < STEPS.length - 1 && <div style={styles.stepRule} />}
          </li>
        ))}
      </ol>
    </div>
  </section>
);

/* ---------------------------------------------------------------- */
/* DEPOIMENTOS                                                      */
/* ---------------------------------------------------------------- */
const QUOTES = [
  { q: "Recebi um atendimento que eu nunca tinha tido. O Dr. Hugo me explicou cada documento, cada prazo, com uma paciência rara. Saí da reunião sabendo exatamente o que esperar.",
    a: "M. R. S.", r: "Servidora pública aposentada · Teresina/PI" },
  { q: "Procurei o escritório depois de dois indeferimentos do INSS. Em oito meses, tive minha aposentadoria especial reconhecida. A diferença foi a profundidade técnica.",
    a: "J. A. C.", r: "Engenheiro civil · Parnaíba/PI" },
  { q: "O que mais me marcou foi a discrição. Em nenhum momento me senti um número. Sou tratada como cliente do escritório, não de um setor.",
    a: "L. F. M.", r: "Médica · Teresina/PI" },
];

const Depoimentos = () => (
  <section style={{...styles.section, background: "var(--paper-2)"}}>
    <div style={styles.sectionInner} data-section-inner>
      <SectionLabel n="05">Em confiança</SectionLabel>
      <h2 style={{...styles.h2, maxWidth: 820, marginBottom: 64}}>
        Palavras de quem já <em style={styles.serifEm}>nos confiou</em> sua causa.
      </h2>
      <div style={styles.quoteGrid} data-grid="quotes">
        {QUOTES.map((q, i) => (
          <figure key={i} style={styles.quoteCard}>
            <div style={styles.quoteMark}>“</div>
            <blockquote style={styles.quoteText}>{q.q}</blockquote>
            <figcaption style={styles.quoteCap}>
              <div style={styles.quoteAuthor}>{q.a}</div>
              <div style={styles.quoteRole}>{q.r}</div>
            </figcaption>
          </figure>
        ))}
      </div>
      <p style={styles.quoteFoot}>
        Iniciais utilizadas em respeito ao sigilo profissional.
        Depoimentos cedidos voluntariamente pelos clientes.
      </p>
    </div>
  </section>
);

/* ---------------------------------------------------------------- */
/* LOCAL + CONTATO                                                  */
/* ---------------------------------------------------------------- */
const Contato = () => {
  const [form, setForm] = useState({ nome: "", email: "", tel: "", area: "Aposentadoria", msg: "" });
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const text =
      `Olá, Dr. Hugo. Gostaria de uma análise reservada do meu caso.\n\n` +
      `• Nome: ${form.nome}\n` +
      `• E-mail: ${form.email}\n` +
      `• Telefone: ${form.tel}\n` +
      `• Matéria: ${form.area}\n\n` +
      `Resumo:\n${form.msg || "(sem detalhes adicionais)"}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  };
  return (
    <section id="contato" style={{...styles.section, background: "var(--navy)", color: "var(--paper)"}}>
      <div style={styles.sectionInner} data-section-inner>
        <SectionLabel n="06" dark>Contato</SectionLabel>

        <div style={styles.contactGrid} data-grid="contact">
          <div>
            <h2 style={{...styles.h2, color: "var(--paper)"}}>
              Uma conversa <em style={styles.serifEm}>reservada</em>,<br/>
              sem compromisso.
            </h2>
            <p style={{...styles.body, color: "rgba(245,241,234,0.72)", maxWidth: 480}}>
              O primeiro contato não tem custo. Apresente seu caso pelo formulário,
              telefone ou WhatsApp. Responderemos em até <strong>24 horas úteis</strong>.
            </p>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.mapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{...styles.contactBlock, display: "block", textDecoration: "none"}}
            >
              <div style={styles.contactLabel}>Endereço</div>
              <div style={{...styles.contactValue, ...styles.contactLink}}>
                {CONTACT.addressLines.map((l, i) => (
                  <React.Fragment key={i}>{l}<br/></React.Fragment>
                ))}
              </div>
            </a>

            <div style={styles.contactRow} data-grid="contact-row">
              <a href={`tel:${CONTACT.phoneTel}`} style={{...styles.contactBlock, textDecoration: "none"}}>
                <div style={styles.contactLabel}>Telefone</div>
                <div style={{...styles.contactValue, ...styles.contactLink}}>{CONTACT.phone}</div>
              </a>
              <a
                href={waLink("Olá, Dr. Hugo. Gostaria de conversar sobre o meu caso.")}
                target="_blank" rel="noopener noreferrer"
                style={{...styles.contactBlock, textDecoration: "none"}}
              >
                <div style={styles.contactLabel}>WhatsApp</div>
                <div style={{...styles.contactValue, ...styles.contactLink}}>{CONTACT.whatsappDisplay}</div>
              </a>
              <a href={`mailto:${CONTACT.email}`} style={{...styles.contactBlock, textDecoration: "none"}}>
                <div style={styles.contactLabel}>E-mail</div>
                <div style={{...styles.contactValue, ...styles.contactLink}}>{CONTACT.email}</div>
              </a>
            </div>

            <div style={styles.contactBlock}>
              <div style={styles.contactLabel}>Horário de atendimento</div>
              <div style={styles.contactValue}>
                {CONTACT.hoursLines.map((l, i) => (
                  <React.Fragment key={i}>{l}<br/></React.Fragment>
                ))}
              </div>
            </div>

            <div style={{...styles.mapPh}}>
              <iframe
                title="Localização do escritório no Google Maps"
                src={mapsEmbed}
                style={{width: "100%", height: "100%", border: 0, display: "block"}}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {!sent ? (
            <form style={styles.form} onSubmit={onSubmit}>
              <div style={styles.formField}>
                <label style={styles.formLabel}>Nome completo</label>
                <input style={styles.formInput} required
                  value={form.nome}
                  onChange={e => setForm({...form, nome: e.target.value})}/>
              </div>
              <div style={styles.formRow}>
                <div style={styles.formField}>
                  <label style={styles.formLabel}>E-mail</label>
                  <input style={styles.formInput} type="email" required
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}/>
                </div>
                <div style={styles.formField}>
                  <label style={styles.formLabel}>Telefone</label>
                  <input style={styles.formInput} required
                    value={form.tel}
                    onChange={e => setForm({...form, tel: e.target.value})}/>
                </div>
              </div>
              <div style={styles.formField}>
                <label style={styles.formLabel}>Matéria</label>
                <select style={styles.formInput}
                  value={form.area}
                  onChange={e => setForm({...form, area: e.target.value})}>
                  <option>Aposentadoria</option>
                  <option>Servidor Público</option>
                  <option>Benefício por incapacidade</option>
                  <option>Revisão de benefício</option>
                  <option>Outro</option>
                </select>
              </div>
              <div style={styles.formField}>
                <label style={styles.formLabel}>Resumo do caso</label>
                <textarea style={{...styles.formInput, minHeight: 140, resize: "vertical"}} rows="5"
                  value={form.msg}
                  onChange={e => setForm({...form, msg: e.target.value})}/>
              </div>
              <button type="submit" style={styles.formSubmit}>
                Enviar pelo WhatsApp
                <span style={styles.btnArrow}>→</span>
              </button>
              <p style={styles.formNote}>
                Ao enviar, abriremos uma conversa privada no WhatsApp com o resumo
                do seu caso. Suas informações são tratadas em sigilo profissional,
                conforme a LGPD e o Código de Ética da OAB.
              </p>
            </form>
          ) : (
            <div style={styles.formSent}>
              <div style={styles.formSentMark}>✓</div>
              <h3 style={styles.formSentT}>Conversa iniciada no WhatsApp.</h3>
              <p style={styles.formSentD}>
                Abrimos uma conversa privada com o resumo do seu caso. Caso o WhatsApp
                não tenha aberto, clique no botão abaixo para tentar novamente. O escritório
                retornará pessoalmente em até <strong>24 horas úteis</strong>.
              </p>
              <div style={{display: "flex", gap: 12, flexWrap: "wrap"}}>
                <a
                  href={waLink(
                    `Olá, Dr. Hugo. Gostaria de uma análise reservada do meu caso.\n\n` +
                    `• Nome: ${form.nome}\n• E-mail: ${form.email}\n• Telefone: ${form.tel}\n` +
                    `• Matéria: ${form.area}\n\nResumo:\n${form.msg || "(sem detalhes adicionais)"}`
                  )}
                  target="_blank" rel="noopener noreferrer"
                  style={{...styles.btnGhostDark, textDecoration: "none"}}
                >
                  Abrir WhatsApp novamente
                </a>
                <button style={styles.btnGhostDark} onClick={() => { setSent(false); setForm({ nome:"", email:"", tel:"", area:"Aposentadoria", msg:"" }); }}>
                  Enviar novo pedido
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

/* ---------------------------------------------------------------- */
/* FOOTER                                                           */
/* ---------------------------------------------------------------- */
const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.sectionInner} data-section-inner>
      <div style={styles.footTop} data-grid="foot-top">
        <div>
          <div style={styles.footBrand}>
            <span style={styles.brandSerif}>Hugo Vaz</span>
            <span style={{...styles.brandRule, background: "rgba(245,241,234,0.4)"}} />
            <span style={styles.brandSans}>da Rocha</span>
          </div>
          <p style={styles.footTag}>
            Advocacia previdenciária ·<br/>Teresina · Piauí · desde 2014
          </p>
        </div>
        <div style={styles.footCols} data-grid="foot-cols">
          <div>
            <div style={styles.footColT}>Atuação</div>
            <ul style={styles.footList}>
              <li>Aposentadorias</li>
              <li>Servidores públicos</li>
              <li>Benefícios por incapacidade</li>
              <li>Revisões e recursos</li>
            </ul>
          </div>
          <div>
            <div style={styles.footColT}>Escritório</div>
            <ul style={styles.footList}>
              <li>O titular</li>
              <li>Como trabalhamos</li>
              <li>Depoimentos</li>
              <li>Contato</li>
            </ul>
          </div>
          <div>
            <div style={styles.footColT}>Endereço</div>
            <ul style={styles.footList}>
              <li>Edifício Euro Business</li>
              <li>Sala 1207</li>
              <li>Teresina · PI</li>
              <li>+55 86 3000 0000</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={styles.footBottom}>
        <span>© 2014–2026 Hugo Vaz da Rocha Sociedade Individual de Advocacia · OAB/PI 14.732</span>
        <span>Em conformidade com o Provimento 205/2021 — OAB.</span>
      </div>
    </div>
  </footer>
);

/* ---------------------------------------------------------------- */
/* FLOATING WHATSAPP                                                */
/* ---------------------------------------------------------------- */
const FloatingWhatsApp = () => {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={waLink("Olá, Dr. Hugo. Gostaria de tirar uma dúvida sobre o meu caso previdenciário.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "fixed", right: 24, bottom: 24, zIndex: 60,
        background: "#25D366", color: "#fff",
        width: 60, height: 60, borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: hover
          ? "0 12px 32px rgba(37,211,102,0.45)"
          : "0 8px 22px rgba(11,27,43,0.28)",
        transition: "transform 200ms ease, box-shadow 200ms ease",
        transform: hover ? "translateY(-2px) scale(1.04)" : "none",
        textDecoration: "none",
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19.05 4.91A10 10 0 0 0 4.6 18.6L3 22l3.5-1.5A10 10 0 1 0 19.05 4.91Zm-7 15.34a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-2.07.88.88-2.02-.2-.31a8.3 8.3 0 1 1 5.93 2.79Zm4.55-6.21c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13s-.64.81-.79.98c-.14.17-.29.18-.54.06a6.78 6.78 0 0 1-2-1.24 7.5 7.5 0 0 1-1.39-1.72c-.14-.25 0-.39.11-.51.11-.11.25-.29.37-.43a1.7 1.7 0 0 0 .25-.41.46.46 0 0 0 0-.43c-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48a.92.92 0 0 0-.67.31 2.8 2.8 0 0 0-.87 2.07 4.84 4.84 0 0 0 1 2.59 11.16 11.16 0 0 0 4.27 3.78c.6.26 1.07.41 1.43.53a3.46 3.46 0 0 0 1.58.1 2.59 2.59 0 0 0 1.69-1.19 2.1 2.1 0 0 0 .15-1.19c-.06-.11-.23-.18-.48-.31Z"/>
      </svg>
    </a>
  );
};

/* ---------------------------------------------------------------- */
/* APP                                                              */
/* ---------------------------------------------------------------- */
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const palette = PALETTES[tweaks.palette] || PALETTES.navy;

  // apply tweaks via CSS vars
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--navy",   palette.bg);
    r.style.setProperty("--navy-2", palette.bg2);
    r.style.setProperty("--navy-3", palette.bg3);
    r.style.setProperty("--serif-w", String(tweaks.serifWeight));
  }, [tweaks.palette, tweaks.serifWeight]);

  return (
    <div data-screen-label="Landing — Hugo Vaz da Rocha">
      <Nav palette={palette} onContact={() => document.getElementById("contato")?.scrollIntoView({behavior:"smooth"})} />
      <Hero showCrest={tweaks.showCrest} showAccent={tweaks.showAccent} />
      <Escritorio />
      <Atuacao />
      <Titular />
      <Processo />
      <Depoimentos />
      <Contato />
      <Footer />
      <FloatingWhatsApp />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Paleta">
          <TweakRadio
            label="Tom de fundo"
            value={tweaks.palette}
            options={[
              { value: "navy",     label: "Navy" },
              { value: "midnight", label: "Midnight" },
              { value: "graphite", label: "Grafite" },
            ]}
            onChange={v => setTweak("palette", v)}
          />
          <TweakToggle
            label="Acento dourado discreto"
            value={tweaks.showAccent}
            onChange={v => setTweak("showAccent", v)}
          />
        </TweakSection>
        <TweakSection title="Tipografia">
          <TweakRadio
            label="Peso da serifa display"
            value={String(tweaks.serifWeight)}
            options={[
              { value: "300", label: "Light" },
              { value: "400", label: "Regular" },
              { value: "500", label: "Medium" },
            ]}
            onChange={v => setTweak("serifWeight", Number(v))}
          />
        </TweakSection>
        <TweakSection title="Identidade">
          <TweakToggle
            label="Mostrar brasão HV no hero"
            value={tweaks.showCrest}
            onChange={v => setTweak("showCrest", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* STYLES                                                           */
/* ---------------------------------------------------------------- */
const W = 1240;
const styles = {
  /* nav */
  nav: {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    transition: "background 250ms ease, border-color 250ms ease",
    color: "var(--paper)",
  },
  navInner: {
    maxWidth: W, margin: "0 auto", padding: "20px 40px",
    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32,
  },
  brand: {
    display: "flex", alignItems: "baseline", gap: 12,
    color: "var(--paper)",
  },
  brandSerif: {
    fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 500,
    fontSize: 26, letterSpacing: "0.01em",
  },
  brandRule: {
    display: "inline-block", width: 24, height: 1,
    background: "rgba(245,241,234,0.6)", marginBottom: 6,
  },
  brandSans: {
    fontFamily: "var(--sans)", fontWeight: 400,
    fontSize: 12, textTransform: "uppercase", letterSpacing: "0.22em",
    opacity: 0.85,
  },
  navLinks: {
    display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0,
  },
  navLink: {
    fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase",
    color: "rgba(245,241,234,0.78)", fontWeight: 400,
  },
  navCta: {
    background: "transparent", color: "var(--paper)",
    border: "1px solid rgba(245,241,234,0.4)",
    padding: "10px 22px", fontSize: 12, letterSpacing: "0.18em",
    textTransform: "uppercase", fontFamily: "var(--sans)",
    cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10,
    transition: "background 200ms ease, border-color 200ms ease",
    borderRadius: 999,
  },
  navCtaArrow: { fontSize: 14, marginTop: -1 },

  /* photos */
  imgFill: {
    width: "100%", height: "100%", objectFit: "cover",
    display: "block",
  },

  /* hero */
  hero: {
    position: "relative",
    background: "var(--navy)",
    color: "var(--paper)",
    paddingTop: 180,
    paddingBottom: 120,
    overflow: "hidden",
  },
  heroGrain: {
    position: "absolute", inset: 0, pointerEvents: "none",
    background:
      "radial-gradient(ellipse at 80% -10%, rgba(20,48,74,0.55) 0%, transparent 55%)," +
      "radial-gradient(ellipse at 0% 110%, rgba(20,48,74,0.35) 0%, transparent 50%)",
    opacity: 1,
  },
  heroInner: {
    position: "relative",
    maxWidth: W, margin: "0 auto", padding: "0 40px",
  },
  heroMeta: {
    display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
    fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em",
    textTransform: "uppercase", color: "rgba(245,241,234,0.6)",
    marginBottom: 56,
  },
  heroMetaDot: {
    width: 6, height: 6, background: "var(--gold)", borderRadius: "50%",
    boxShadow: "0 0 0 4px rgba(212,175,108,0.12)",
  },
  heroMetaSep: { opacity: 0.4 },
  heroTitle: {
    fontFamily: "var(--serif)", fontWeight: "var(--serif-w, 400)",
    fontSize: "clamp(44px, 6.5vw, 92px)",
    lineHeight: 1.05, letterSpacing: "-0.012em",
    margin: "0 0 36px", maxWidth: 1100,
    color: "var(--paper)",
    textWrap: "pretty",
  },
  heroEm: {
    fontStyle: "italic", fontWeight: 400,
    color: "var(--gold-soft)",
  },
  heroLede: {
    fontFamily: "var(--serif-body)",
    fontSize: 22, lineHeight: 1.6, maxWidth: 660,
    color: "rgba(245,241,234,0.82)",
    margin: "0 0 56px",
  },
  heroActions: {
    display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center",
    marginBottom: 96,
  },
  heroFoot: {
    display: "grid",
    gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
    alignItems: "center",
    paddingTop: 40,
    borderTop: "1px solid rgba(245,241,234,0.14)",
    maxWidth: 820,
  },
  heroStat: { padding: "0 4px" },
  heroStatN: {
    fontFamily: "var(--serif)", fontSize: 44, lineHeight: 1,
    color: "var(--paper)", marginBottom: 10, fontWeight: 400,
  },
  heroStatL: {
    fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase",
    color: "rgba(245,241,234,0.6)", lineHeight: 1.45,
  },
  heroStatRule: {
    width: 1, height: 48, background: "rgba(245,241,234,0.14)", justifySelf: "center",
  },
  heroCrest: {
    position: "absolute", top: 0, right: 40, opacity: 0.85,
  },
  heroAccent: {
    position: "absolute",
    right: 40, top: 110,
    width: 1, height: 80,
    background: "linear-gradient(to bottom, transparent, var(--gold), transparent)",
    opacity: 0.6,
  },
  heroFootRule: {
    position: "absolute", bottom: 0, left: 0, right: 0, height: 1,
    background: "rgba(245,241,234,0.08)",
  },

  /* generic section */
  section: {
    padding: "140px 0",
    position: "relative",
  },
  sectionInner: {
    maxWidth: W, margin: "0 auto", padding: "0 40px",
  },
  sectionLabel: {
    display: "inline-flex", alignItems: "center", gap: 14,
    fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.22em",
    textTransform: "uppercase", color: "var(--muted)",
    marginBottom: 48,
  },
  sectionLabelN: { color: "var(--ink)", opacity: 0.6 },
  sectionLabelDot: { width: 28, height: 1, background: "currentColor", opacity: 0.5 },

  h2: {
    fontFamily: "var(--serif)", fontWeight: 400,
    fontSize: "clamp(34px, 4.4vw, 60px)",
    lineHeight: 1.08, letterSpacing: "-0.01em",
    margin: "0 0 28px", color: "var(--ink)",
    textWrap: "pretty",
  },
  serifEm: {
    fontStyle: "italic", color: "currentColor", opacity: 0.7,
  },
  body: {
    fontFamily: "var(--serif-body)",
    fontSize: 19, lineHeight: 1.65, color: "var(--ink-soft)",
    margin: "0 0 22px",
  },

  /* escritorio two-col */
  twoCol: {
    display: "grid",
    gridTemplateColumns: "1fr 1.3fr",
    gap: 80,
    alignItems: "start",
  },
  twoColRight: { paddingTop: 12 },
  pillars: {
    listStyle: "none", padding: 0, margin: "32px 0 0",
    display: "grid", gap: 18,
  },
  pillarN: {
    fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--ink)",
    minWidth: 32, marginRight: 16, fontSize: 18,
  },

  /* atuacao */
  areaGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 1,
    background: "rgba(11,27,43,0.12)",
    border: "1px solid rgba(11,27,43,0.12)",
  },
  areaCard: {
    background: "var(--paper-2)",
    padding: "44px 40px 40px",
    minHeight: 320,
    display: "flex", flexDirection: "column",
    borderRadius: 4,
  },
  areaN: {
    fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 26,
    color: "var(--ink)", opacity: 0.5, marginBottom: 28,
  },
  areaT: {
    fontFamily: "var(--serif)", fontWeight: 400, fontSize: 32,
    margin: "0 0 16px", letterSpacing: "-0.005em",
  },
  areaD: {
    fontFamily: "var(--serif-body)",
    fontSize: 18, lineHeight: 1.55, color: "var(--ink-soft)",
    margin: "0 0 24px",
  },
  areaBullets: {
    listStyle: "none", padding: 0, margin: "auto 0 0",
    display: "grid", gap: 8,
    fontSize: 14, color: "var(--ink)", opacity: 0.85,
    fontFamily: "var(--sans)",
    paddingTop: 24,
    borderTop: "1px solid rgba(11,27,43,0.12)",
  },

  /* titular */
  titularGrid: {
    display: "grid",
    gridTemplateColumns: "0.85fr 1fr",
    gap: 80,
    alignItems: "start",
  },
  titularPh: {
    aspectRatio: "4/5",
    width: "100%",
    borderRadius: 6,
    overflow: "hidden",
  },
  titularName: {
    fontFamily: "var(--serif)", fontWeight: 400,
    fontSize: 48, lineHeight: 1.1, color: "var(--paper)",
    marginBottom: 8,
  },
  titularRole: {
    fontFamily: "var(--mono)", fontSize: 11,
    letterSpacing: "0.2em", textTransform: "uppercase",
    color: "var(--gold-soft)",
  },
  titularList: {
    listStyle: "none", padding: 0, margin: "32px 0 0",
    display: "grid", gap: 14,
    color: "rgba(245,241,234,0.78)",
    fontSize: 15,
  },
  titularListN: {
    color: "var(--gold-soft)", marginRight: 14, opacity: 0.8,
  },

  /* processo */
  steps: {
    listStyle: "none", padding: 0, margin: 0,
    display: "grid", gap: 0,
    borderTop: "1px solid rgba(11,27,43,0.12)",
  },
  step: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    gap: 40,
    padding: "40px 0",
    borderBottom: "1px solid rgba(11,27,43,0.12)",
    alignItems: "start",
  },
  stepN: {
    fontFamily: "var(--mono)", fontSize: 12,
    color: "var(--muted)", letterSpacing: "0.2em",
    paddingTop: 12,
  },
  stepBody: { maxWidth: 720 },
  stepT: {
    fontFamily: "var(--serif)", fontWeight: 400,
    fontSize: 32, margin: "0 0 12px", letterSpacing: "-0.005em",
  },
  stepD: {
    fontFamily: "var(--serif-body)",
    fontSize: 19, lineHeight: 1.6, color: "var(--ink-soft)", margin: 0,
  },

  /* depoimentos */
  quoteGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 32,
  },
  quoteCard: {
    margin: 0,
    padding: "48px 36px 36px",
    background: "var(--paper)",
    border: "1px solid rgba(11,27,43,0.1)",
    display: "flex", flexDirection: "column",
    minHeight: 380,
    borderRadius: 6,
  },
  quoteMark: {
    fontFamily: "var(--serif)", fontStyle: "italic",
    fontSize: 80, lineHeight: 0.6, color: "var(--ink)", opacity: 0.25,
    marginBottom: 12,
  },
  quoteText: {
    fontFamily: "var(--serif)", fontStyle: "italic",
    fontSize: 22, lineHeight: 1.45, color: "var(--ink)",
    margin: "0 0 28px", flex: 1,
    fontWeight: 400,
  },
  quoteCap: {
    paddingTop: 24,
    borderTop: "1px solid rgba(11,27,43,0.12)",
  },
  quoteAuthor: {
    fontFamily: "var(--sans)", fontWeight: 500, fontSize: 14,
    letterSpacing: "0.06em",
    color: "var(--ink)", marginBottom: 4,
  },
  quoteRole: {
    fontFamily: "var(--mono)", fontSize: 11,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--muted)",
  },
  quoteFoot: {
    marginTop: 40,
    fontFamily: "var(--mono)", fontSize: 11,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--muted)",
  },

  /* contato */
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 80,
    alignItems: "start",
  },
  contactBlock: { marginTop: 32 },
  contactRow: {
    display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24,
    marginTop: 8,
  },
  contactLabel: {
    fontFamily: "var(--mono)", fontSize: 11,
    letterSpacing: "0.2em", textTransform: "uppercase",
    color: "var(--gold-soft)", marginBottom: 10,
  },
  contactValue: {
    fontSize: 15, color: "var(--paper)", lineHeight: 1.6,
  },
  contactLink: {
    transition: "color 200ms ease",
    cursor: "pointer",
  },
  mapPh: {
    marginTop: 40,
    aspectRatio: "16/9",
    width: "100%",
    border: "1px solid rgba(245,241,234,0.12)",
    borderRadius: 6,
    overflow: "hidden",
  },

  /* form */
  form: {
    background: "var(--navy-2)",
    border: "1px solid rgba(245,241,234,0.12)",
    padding: "44px 40px",
    display: "grid", gap: 22,
    borderRadius: 8,
  },
  formField: { display: "grid", gap: 8 },
  formRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 },
  formLabel: {
    fontFamily: "var(--mono)", fontSize: 11,
    letterSpacing: "0.18em", textTransform: "uppercase",
    color: "rgba(245,241,234,0.6)",
  },
  formInput: {
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(245,241,234,0.25)",
    padding: "10px 0",
    fontFamily: "var(--sans)", fontSize: 16,
    color: "var(--paper)",
    outline: "none",
  },
  formSubmit: {
    marginTop: 12,
    background: "var(--paper)",
    color: "var(--navy)",
    border: "none",
    padding: "18px 28px",
    fontFamily: "var(--sans)", fontSize: 12,
    letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500,
    display: "inline-flex", alignItems: "center", justifyContent: "space-between",
    cursor: "pointer",
    borderRadius: 999,
  },
  formNote: {
    fontFamily: "var(--mono)", fontSize: 11, lineHeight: 1.6,
    letterSpacing: "0.06em",
    color: "rgba(245,241,234,0.5)", margin: 0,
  },
  formSent: {
    background: "var(--navy-2)",
    border: "1px solid rgba(245,241,234,0.12)",
    padding: "60px 48px",
    textAlign: "left",
    borderRadius: 8,
  },
  formSentMark: {
    fontSize: 28, color: "var(--gold-soft)",
    width: 56, height: 56,
    border: "1px solid var(--gold-soft)",
    borderRadius: "50%",
    display: "grid", placeItems: "center",
    marginBottom: 28,
  },
  formSentT: {
    fontFamily: "var(--serif)", fontWeight: 400,
    fontSize: 36, margin: "0 0 12px", color: "var(--paper)",
  },
  formSentD: {
    fontSize: 16, lineHeight: 1.6, color: "rgba(245,241,234,0.75)",
    marginBottom: 32, maxWidth: 380,
  },

  /* buttons */
  btnPrimary: {
    background: "var(--paper)",
    color: "var(--navy)",
    padding: "16px 30px",
    fontSize: 12, letterSpacing: "0.2em",
    textTransform: "uppercase", fontWeight: 500,
    display: "inline-flex", alignItems: "center", gap: 14,
    cursor: "pointer",
    border: "1px solid var(--paper)",
    borderRadius: 999,
  },
  btnGhost: {
    color: "var(--paper)",
    padding: "16px 30px",
    fontSize: 12, letterSpacing: "0.2em",
    textTransform: "uppercase", fontWeight: 400,
    display: "inline-flex", alignItems: "center", gap: 14,
    border: "1px solid rgba(245,241,234,0.35)",
    borderRadius: 999,
  },
  btnGhostDark: {
    background: "transparent",
    color: "var(--paper)",
    padding: "14px 26px",
    fontSize: 12, letterSpacing: "0.2em",
    textTransform: "uppercase", fontWeight: 400,
    border: "1px solid rgba(245,241,234,0.4)",
    cursor: "pointer", fontFamily: "var(--sans)",
    borderRadius: 999,
  },
  btnArrow: { fontSize: 16, marginTop: -1 },

  /* footer */
  footer: {
    background: "var(--navy)",
    color: "rgba(245,241,234,0.7)",
    padding: "80px 0 40px",
    borderTop: "1px solid rgba(245,241,234,0.1)",
  },
  footTop: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: 80,
    paddingBottom: 60,
    borderBottom: "1px solid rgba(245,241,234,0.1)",
  },
  footBrand: { display: "flex", alignItems: "baseline", gap: 12, color: "var(--paper)" },
  footTag: {
    fontFamily: "var(--mono)", fontSize: 12,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "rgba(245,241,234,0.5)", marginTop: 16,
    lineHeight: 1.7,
  },
  footCols: {
    display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40,
  },
  footColT: {
    fontFamily: "var(--mono)", fontSize: 11,
    letterSpacing: "0.2em", textTransform: "uppercase",
    color: "var(--gold-soft)", marginBottom: 18,
  },
  footList: {
    listStyle: "none", padding: 0, margin: 0,
    display: "grid", gap: 10,
    fontSize: 14, color: "rgba(245,241,234,0.75)",
  },
  footBottom: {
    paddingTop: 28,
    display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
    fontFamily: "var(--mono)", fontSize: 11,
    letterSpacing: "0.12em", textTransform: "uppercase",
    color: "rgba(245,241,234,0.45)",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
