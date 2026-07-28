/* ============================================================
   data.js — CONTEÚDO OFICIAL DA PROGRAMAÇÃO
   AMD · RCC · OSM — Rio de Janeiro — 27–30 de agosto de 2026
   ------------------------------------------------------------
   Este arquivo é a fonte da verdade do conteúdo.
   A apresentação (HTML/CSS/JS) vive nos demais arquivos.
   Fuso do evento: America/Sao_Paulo (UTC-03:00, sem DST em 2026).
   ============================================================ */

/* ---------- CONFIGURAÇÃO DO SITE (PREENCHER PLACEHOLDERS) ---------- */
const SITE_CONFIG = {
  // URL pública do site (GitHub Pages)
  siteUrl: 'https://viaveritasvita.github.io/amdrio26/',
  shortUrl: 'https://tinyurl.com/amdrio26',

  // >>> PLACEHOLDER 1: App ID do OneSignal (painel OneSignal → Settings → Keys & IDs)
  oneSignalAppId: '9d7b5742-cb8c-4965-8ed6-142a509f5924',

  // >>> PLACEHOLDER 2: link do canal/grupo de avisos no WhatsApp
  // Grupo:  https://chat.whatsapp.com/CODIGO_DO_CONVITE
  // Canal:  https://whatsapp.com/channel/CODIGO_DO_CANAL
  // Número: https://wa.me/5521XXXXXXXXX
  whatsappUrl: 'https://chat.whatsapp.com/COLE_O_CODIGO_DO_GRUPO_AQUI',

  // >>> PLACEHOLDERS 3 e 4: URLs dos CSVs publicados da PLANILHA do Google
  // (Google Sheets → Arquivo → Compartilhar → Publicar na web →
  //  escolher a aba → "Valores separados por vírgula (.csv)" → copiar o link).
  // Com as URLs preenchidas, o site passa a ler a programação e os avisos
  // AO VIVO da planilha. Enquanto forem placeholders (ou se a planilha
  // falhar), o site usa os dados embutidos abaixo + avisos.json — nada quebra.
  sheetProgramacaoCsvUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwmcYsZG0STetIPP0wmTnZIyWJ2mDv7FXPtfHbgSWdFZWPTrHkmhUxi_ZwB_F6ezHQAuzOd_-jRhMf/pub?gid=192383127&single=true&output=csv',
  sheetAvisosCsvUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwmcYsZG0STetIPP0wmTnZIyWJ2mDv7FXPtfHbgSWdFZWPTrHkmhUxi_ZwB_F6ezHQAuzOd_-jRhMf/pub?gid=0&single=true&output=csv',

  // Feed .ics AO VIVO (Google Apps Script da planilha) para a ASSINATURA da
  // agenda completa. Se preenchido, a assinatura reflete a planilha em tempo real.
  // Vazio = usa o arquivo estático assets/agenda-amdrio26.ics (fotografia).
  icsFeedUrl: 'https://script.google.com/macros/s/AKfycbwq44tzVqrY5zHR2-MtZGP3uwD5XhZxmvlu1aVLwvdJBCs2nV-27sIj7WcvHM7Dfev8/exec',
};

const EVENT_INFO = {
  bodies: 'AMD · RCC · OSM',
  city: 'Rio de Janeiro · Brasil',
  tz: 'America/Sao_Paulo',
  utcOffset: '-03:00',

  /* Datas oficiais do crachá: 27–30/08. O dia 26 entra como véspera. */
  officialStart: '2026-08-27',
  officialEnd: '2026-08-30',
  openingISO: '2026-08-27T10:00:00-03:00',  // abertura oficial (contagem regressiva)

  emergencyDisplay: '+55 21 99020-0951',
  emergencyTel: '+5521990200951',
  secretariatEmail: 'grandesecretaria@scrb33.org.br',
};

/* ---------- LOCAIS ---------- */
const LOCATIONS = {
  mariz: {
    name: 'Palácio Maçônico da Mariz e Barros',
    detail: 'Condomínio Maçônico Antônio Rodrigues Lopes',
    address: 'R. Mariz e Barros, 945 – Maracanã, Rio de Janeiro – RJ, 20270-004',
    coords: '-22.9169956,-43.2224141',
  },
  casa: {
    name: 'Casa do Rito Brasileiro',
    detail: '',
    address: 'R. Fontes Castelo, 16 – Alto da Boa Vista, Rio de Janeiro – RJ, 20531-150',
    coords: '-22.9475534,-43.2586994',
  },
  hotel: {
    name: 'Hotel Sesc Copacabana',
    detail: '',
    address: 'R. Domingos Ferreira, 160 – Copacabana, Rio de Janeiro – RJ, 22050-012',
    coords: '-22.9731655,-43.1874073',
  },
  amorio: {
    name: 'AMORIO',
    detail: '',
    address: 'Av. Pref. Dulcídio Cardoso, 406, Barra da Tijuca, Rio de Janeiro – RJ, 22620-311',
    coords: '-23.0065437,-43.3846825',
  },
};

/* ---------- CORPOS / ORDENS (filete + chip de cor nos cartões) ----------
   Nomes próprios de corpos não se traduzem.
   Cores escuras o bastante para texto AA (>= 4.5:1) sobre o marfim. */
const BODIES = {
  osm:       { label: 'OSM',            color: '#3d5a80' }, /* azul-aço */
  rcc:       { label: 'RCC',            color: '#8e3b45' }, /* vinho */
  amd:       { label: 'AMD',            color: '#8a6828' }, /* dourado envelhecido */
  acon:      { label: 'Acon',           color: '#3f6b4f' }, /* verde-floresta */
  athelstan: { label: 'Athelstan',      color: '#5f4b8b' }, /* violeta */
  rbe:       { label: 'Red Branch of Eri', color: '#2e6e62' }, /* verde-mar */
  rb33:      { label: 'Rito Brasileiro', color: '#8f5524' }, /* cobre */
  geral:     { label: '',               color: '#566072' }, /* neutro marinho */
  log:       { label: '',               color: '#64748b' }, /* logística (quieto) */
};

/* ---------- GRADE OFICIAL ----------
   start/end em HH:MM (fuso -03:00); end null = horário aberto.
   loc = chave em LOCATIONS (null = a definir).
   t = título em pt/fr/en; restriction = tarja âmbar; note = observação neutra.
   kind = natureza logística/social do item (símbolo monoline no cartão):
     'pickup' (buscar delegação) · 'meal' (refeição) · 'hotel' (retorno)
     'transfer' (traslado) · 'coffee' (café/intervalo) · 'social' (confraternização).
     Sessões sem kind são cerimônias. */
const SCHEDULE = [
  {
    date: '2026-08-26', weekday: 'wed', official: false,
    sessions: [
      { id: 'd26-1', start: '14:00', end: '16:00', loc: 'casa', body: 'geral',
        t: { pt: 'Cerimônias Privativas Esoterismo',
             fr: 'Cérémonies privées – Ésotérisme',
             en: 'Private Ceremonies – Esotericism' } },
      { id: 'd26-2', start: '17:00', end: '22:00', loc: 'casa', body: 'athelstan',
        t: { pt: 'Cerimônias Especiais Athelstan & Acon',
             fr: 'Cérémonies spéciales Athelstan & Acon',
             en: 'Special Ceremonies Athelstan & Acon' } },
    ],
  },
  {
    date: '2026-08-27', weekday: 'thu', official: true,
    sessions: [
      { id: 'd27-1', start: '09:00', end: null, loc: 'hotel', body: 'log', kind: 'pickup',
        t: { pt: 'Buscar a delegação francesa no hotel',
             fr: 'Prise en charge de la délégation française à l’hôtel',
             en: 'Pick up the French delegation at the hotel' } },
      { id: 'd27-2', start: '10:00', end: '11:00', loc: 'mariz', body: 'geral',
        t: { pt: 'Apresentação do que será feito nos próximos dias',
             fr: 'Présentation du programme des prochains jours',
             en: 'Presentation of the coming days’ programme' } },
      { id: 'd27-3', start: '11:00', end: '12:00', loc: 'mariz', body: 'osm',
        t: { pt: 'Cerimônias de obrigação + Grau da Cátedra – OSM',
             fr: 'Cérémonies d’obligation + Grade de la Chaire – OSM',
             en: 'Obligation Ceremonies + Chair Degree – OSM' } },
      { id: 'd27-4', start: '12:00', end: '13:30', loc: null, body: 'log', kind: 'meal',
        t: { pt: 'Almoço · A definir',
             fr: 'Déjeuner · À définir',
             en: 'Lunch · To be defined' } },
      { id: 'd27-5', start: '13:30', end: '14:00', loc: 'mariz', body: 'osm',
        t: { pt: 'Ensaio para Consagrações (OSM)',
             fr: 'Répétition des Consécrations (OSM)',
             en: 'Rehearsal for Consecrations (OSM)' } },
      { id: 'd27-6', start: '14:00', end: '16:00', loc: 'mariz', body: 'osm',
        t: { pt: 'Consagração de Conclaves (OSM)',
             fr: 'Consécration de Conclaves (OSM)',
             en: 'Consecration of Conclaves (OSM)' } },
      { id: 'd27-7', start: '16:00', end: '16:30', loc: 'mariz', body: 'amd',
        t: { pt: 'Cerimônias de obrigação + Grau da Cátedra – AMD',
             fr: 'Cérémonies d’obligation + Grade de la Chaire – AMD',
             en: 'Obligation Ceremonies + Chair Degree – AMD' } },
      { id: 'd27-8', start: '16:30', end: '17:00', loc: 'mariz', body: 'amd',
        t: { pt: 'Ensaio para Consagrações (AMD)',
             fr: 'Répétition des Consécrations (AMD)',
             en: 'Rehearsal for Consecrations (AMD)' } },
      { id: 'd27-9', start: '17:00', end: '19:00', loc: 'mariz', body: 'amd',
        t: { pt: 'Consagração de Conselhos (AMD)',
             fr: 'Consécration de Conseils (AMD)',
             en: 'Consecration of Councils (AMD)' } },
      { id: 'd27-10', start: '19:00', end: '19:30', loc: 'casa', body: 'rbe',
        t: { pt: 'Cerimônias de obrigação: Red Branch of Eri – Order of St Patrick',
             fr: 'Cérémonies d’obligation : Red Branch of Eri – Order of St Patrick',
             en: 'Obligation Ceremonies: Red Branch of Eri – Order of St Patrick' } },
      { id: 'd27-11', start: '19:30', end: null, loc: 'hotel', body: 'log', kind: 'hotel',
        t: { pt: 'Retorno ao hotel',
             fr: 'Retour à l’hôtel',
             en: 'Return to the hotel' } },
    ],
  },
  {
    date: '2026-08-28', weekday: 'fri', official: true,
    sessions: [
      { id: 'd28-1', start: '09:00', end: null, loc: 'hotel', body: 'log', kind: 'pickup',
        t: { pt: 'Buscar a delegação francesa no hotel',
             fr: 'Prise en charge de la délégation française à l’hôtel',
             en: 'Pick up the French delegation at the hotel' } },
      { id: 'd28-2', start: '10:00', end: '11:00', loc: 'mariz', body: 'rcc',
        t: { pt: 'Cerimônias de obrigação + Graus da Cátedra – RCC',
             fr: 'Cérémonies d’obligation + Grades de la Chaire – RCC',
             en: 'Obligation Ceremonies + Chair Degrees – RCC' } },
      { id: 'd28-3', start: '11:00', end: '12:00', loc: 'mariz', body: 'rcc',
        t: { pt: 'Ensaio para Consagrações (RCC)',
             fr: 'Répétition des Consécrations (RCC)',
             en: 'Rehearsal for Consecrations (RCC)' } },
      { id: 'd28-4', start: '12:00', end: '13:30', loc: null, body: 'log', kind: 'meal',
        t: { pt: 'Almoço · A definir',
             fr: 'Déjeuner · À définir',
             en: 'Lunch · To be defined' } },
      { id: 'd28-5', start: '13:30', end: '15:30', loc: 'mariz', body: 'rcc',
        t: { pt: 'Consagração de Conclaves (RCC)',
             fr: 'Consécration de Conclaves (RCC)',
             en: 'Consecration of Conclaves (RCC)' } },
      { id: 'd28-6', start: '15:30', end: '16:00', loc: 'mariz', body: 'rcc',
        t: { pt: 'Ensaio para Constituição do Grande Conclave (RCC)',
             fr: 'Répétition de la Constitution du Grand Conclave (RCC)',
             en: 'Rehearsal for the Constitution of the Grand Conclave (RCC)' } },
      { id: 'd28-7', start: '16:00', end: '18:00', loc: 'mariz', body: 'rcc',
        t: { pt: 'Constituição do Grande Conclave do RCC para o Rio de Janeiro',
             fr: 'Constitution du Grand Conclave du RCC pour Rio de Janeiro',
             en: 'Constitution of the Grand Conclave of the RCC for Rio de Janeiro' } },
      { id: 'd28-8', start: '18:00', end: '19:00', loc: 'casa', body: 'log', kind: 'transfer',
        t: { pt: 'Transferência para a sede do Rito Brasileiro e Café',
             fr: 'Transfert vers le siège du Rite Brésilien et café',
             en: 'Transfer to the Brazilian Rite headquarters and coffee' } },
      { id: 'd28-9', start: '19:15', end: '20:45', loc: 'casa', body: 'acon',
        t: { pt: 'Reunião Provincial Anual da Acon – Província da América do Sul',
             fr: 'Réunion provinciale annuelle de l’Acon – Province d’Amérique du Sud',
             en: 'Annual Provincial Meeting of Acon – Province of South America' },
        restriction: { pt: 'Somente membros do Acon',
                       fr: 'Réservé aux membres de l’Acon',
                       en: 'Members of Acon only' } },
      { id: 'd28-10', start: '21:00', end: '22:00', loc: 'casa', body: 'athelstan',
        t: { pt: 'Reunião Provincial Anual de Athelstan – Província do Brasil',
             fr: 'Réunion provinciale annuelle d’Athelstan – Province du Brésil',
             en: 'Annual Provincial Meeting of Athelstan – Province of Brazil' },
        restriction: { pt: 'Somente membros de Athelstan',
                       fr: 'Réservé aux membres d’Athelstan',
                       en: 'Members of Athelstan only' } },
      { id: 'd28-11', start: '22:00', end: null, loc: 'hotel', body: 'log', kind: 'hotel',
        t: { pt: 'Retorno ao hotel',
             fr: 'Retour à l’hôtel',
             en: 'Return to the hotel' } },
    ],
  },
  {
    date: '2026-08-29', weekday: 'sat', official: true,
    sessions: [
      { id: 'd29-1', start: '09:30', end: null, loc: 'hotel', body: 'log', kind: 'pickup',
        t: { pt: 'Buscar a delegação francesa no hotel',
             fr: 'Prise en charge de la délégation française à l’hôtel',
             en: 'Pick up the French delegation at the hotel' } },
      { id: 'd29-2', start: '10:30', end: '12:30', loc: 'mariz', body: 'osm',
        t: { pt: 'Constituição do Grande Conclave do Secret Monitor para o Rio de Janeiro',
             fr: 'Constitution du Grand Conclave du Secret Monitor pour Rio de Janeiro',
             en: 'Constitution of the Grand Conclave of the Secret Monitor for Rio de Janeiro' } },
      { id: 'd29-3', start: '12:30', end: '14:00', loc: null, body: 'log', kind: 'meal',
        t: { pt: 'Almoço · A definir',
             fr: 'Déjeuner · À définir',
             en: 'Lunch · To be defined' } },
      { id: 'd29-4', start: '14:00', end: '15:30', loc: 'hotel', body: 'log', kind: 'hotel',
        t: { pt: 'Retorno ao hotel – intervalo',
             fr: 'Retour à l’hôtel – pause',
             en: 'Return to the hotel – break' } },
      { id: 'd29-5', start: '15:30', end: null, loc: 'amorio', body: 'log', kind: 'transfer',
        t: { pt: 'Transferência para a AMO Rio',
             fr: 'Transfert vers l’AMO Rio',
             en: 'Transfer to AMO Rio' } },
      { id: 'd29-6', start: '15:30', end: '17:00', loc: 'amorio', body: 'log', kind: 'coffee',
        t: { pt: 'Intervalo para café',
             fr: 'Pause café',
             en: 'Coffee break' } },
      { id: 'd29-7', start: '17:00', end: '20:00', loc: 'amorio', body: 'rb33',
        t: { pt: 'Cerimônia do 33º Grau do Rito Brasileiro e Cerimônia de Premiação (Irmãos Franceses)',
             fr: 'Cérémonie du 33e Degré du Rite Brésilien et cérémonie de distinctions (Frères français)',
             en: '33rd Degree Ceremony of the Brazilian Rite and Award Ceremony (French Brethren)' },
        restriction: {
          pt: 'Somente para Servidores da Pátria, da Ordem e da Humanidade, grau 33 do Rito Brasileiro, e irmãos grau 33 de ritos coirmãos. Interessados no reconhecimento devem contatar o conclave: grandesecretaria@scrb33.org.br',
          fr: 'Réservé aux Serviteurs de la Patrie, de l’Ordre et de l’Humanité, 33e degré du Rite Brésilien, et aux frères du 33e degré de rites frères. Pour la reconnaissance, veuillez contacter le conclave : grandesecretaria@scrb33.org.br',
          en: 'Restricted to Servants of the Homeland, of the Order and of Humanity, 33rd Degree of the Brazilian Rite, and 33rd-Degree brethren of sister rites. Those interested in recognition should contact the conclave: grandesecretaria@scrb33.org.br' } },
      { id: 'd29-8', start: '20:00', end: '22:00', loc: 'amorio', body: 'geral', kind: 'social',
        t: { pt: 'Jantar de despedida',
             fr: 'Dîner d’adieu',
             en: 'Farewell dinner' },
        note: { pt: 'Inscrições pelo e-mail grandesecretaria@scrb33.org.br',
                fr: 'Inscriptions par e-mail : grandesecretaria@scrb33.org.br',
                en: 'Registration by e-mail: grandesecretaria@scrb33.org.br' } },
      { id: 'd29-9', start: '22:00', end: null, loc: 'hotel', body: 'log', kind: 'hotel',
        t: { pt: 'Retorno ao hotel',
             fr: 'Retour à l’hôtel',
             en: 'Return to the hotel' } },
    ],
  },
  {
    date: '2026-08-30', weekday: 'sun', official: true,
    sessions: [
      { id: 'd30-1', start: '09:30', end: null, loc: 'hotel', body: 'log', kind: 'pickup',
        t: { pt: 'Buscar a delegação francesa no hotel',
             fr: 'Prise en charge de la délégation française à l’hôtel',
             en: 'Pick up the French delegation at the hotel' } },
      { id: 'd30-2', start: '10:30', end: '12:30', loc: 'mariz', body: 'amd',
        t: { pt: 'Constituição do Grande Conselho de Allied Masonic Degrees para o Rio de Janeiro',
             fr: 'Constitution du Grand Conseil des Allied Masonic Degrees pour Rio de Janeiro',
             en: 'Constitution of the Grand Council of the Allied Masonic Degrees for Rio de Janeiro' } },
      { id: 'd30-3', start: '12:30', end: '14:00', loc: null, body: 'log', kind: 'meal',
        t: { pt: 'Almoço · A definir',
             fr: 'Déjeuner · À définir',
             en: 'Lunch · To be defined' } },
      { id: 'd30-4', start: '14:00', end: null, loc: 'hotel', body: 'log', kind: 'hotel',
        t: { pt: 'Retorno ao hotel',
             fr: 'Retour à l’hôtel',
             en: 'Return to the hotel' } },
    ],
  },
];
