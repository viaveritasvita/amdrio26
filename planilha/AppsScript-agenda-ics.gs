/* ============================================================================
   AppsScript-agenda-ics.gs
   Gera um .ics AO VIVO a partir da aba "Programação" da planilha do Google.
   Assim, a ASSINATURA no Google Agenda passa a refletir a planilha
   automaticamente (não é mais uma "fotografia").

   COMO INSTALAR (uma única vez):
   1) Abra a SUA planilha no Google Sheets.
   2) Menu Extensões → Apps Script.
   3) Apague o conteúdo que estiver lá e COLE este arquivo inteiro. Salve (ícone de disquete).
   4) Clique em Implantar → Nova implantação.
      - Tipo: Aplicativo da Web (Web app).
      - Descrição: "Agenda ICS".
      - Executar como: Eu (seu e-mail).
      - Quem tem acesso: Qualquer pessoa.   <-- IMPORTANTE (senão o Google Agenda não lê).
      - Implantar → autorize o acesso quando pedir.
   5) Copie a URL do aplicativo da Web (termina em /exec) e ME MANDE.
      Eu ligo essa URL no botão "Google Agenda" da agenda completa.

   OBS.: deixe as colunas "data", "inicio" e "fim" formatadas como TEXTO SIMPLES
   na planilha (Formatar → Número → Texto simples). O script também tenta lidar
   com datas/horas "normais", mas texto simples é o mais seguro.
   ============================================================================ */

// Se a sua aba de programação NÃO se chamar "Programação", ajuste aqui.
// Se ficar em branco/errado, o script usa a primeira aba da planilha.
var SHEET_NAME = 'Programação';

// Endereços dos locais (usados no campo LOCATION do evento).
var LOCS = {
  mariz:  'Palácio Maçônico da Mariz e Barros, R. Mariz e Barros, 945 – Maracanã, Rio de Janeiro – RJ, 20270-004',
  casa:   'Casa do Rito Brasileiro, R. Fontes Castelo, 16 – Alto da Boa Vista, Rio de Janeiro – RJ, 20531-150',
  hotel:  'Hotel Sesc Copacabana, R. Domingos Ferreira, 160 – Copacabana, Rio de Janeiro – RJ, 22050-012',
  amorio: 'AMORIO, Av. Pref. Dulcídio Cardoso, 406, Barra da Tijuca, Rio de Janeiro – RJ, 22620-311'
};

function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
  var values = sh.getDataRange().getValues();
  var headers = values.shift().map(function (h) { return String(h).trim(); });
  var col = {};
  headers.forEach(function (h, i) { col[h] = i; });

  var out = [];
  out.push('BEGIN:VCALENDAR');
  out.push('VERSION:2.0');
  out.push('PRODID:-//AMD RCC OSM Rio 2026//Programa Oficial//PT');
  out.push('CALSCALE:GREGORIAN');
  out.push('METHOD:PUBLISH');
  out.push('X-WR-CALNAME:Programa Oficial — AMD · RCC · OSM · Rio 2026');
  out.push('X-WR-TIMEZONE:America/Sao_Paulo');

  var stamp = toIcsUTC(new Date());

  values.forEach(function (row) {
    var id = str(row[col['id']]);
    var dateStr = normDate(row[col['data']]);
    var ini = normTime(row[col['inicio']]);
    if (!id || !dateStr || !ini) return;                 // linha incompleta -> ignora

    var fim = normTime(row[col['fim']]);
    var start = localToUTC(dateStr, ini);                // -03:00 -> UTC
    var end = fim ? localToUTC(dateStr, fim) : addHours(start, 1);

    var title = str(row[col['titulo_pt']]) || 'Sessão';
    var location = LOCS[str(row[col['local']])] || '';
    var restr = str(row[col['restricao_pt']]);
    var nota = str(row[col['nota_pt']]);
    var desc = [];
    if (restr) desc.push('Restrição: ' + restr);
    if (nota) desc.push(nota);
    desc.push('https://tinyurl.com/amdrio26');

    out.push('BEGIN:VEVENT');
    out.push('UID:' + id + '@amdrio26');
    out.push('DTSTAMP:' + stamp);
    out.push('DTSTART:' + toIcsUTC(start));
    out.push('DTEND:' + toIcsUTC(end));
    out.push(fold('SUMMARY:' + esc(title)));
    if (location) out.push(fold('LOCATION:' + esc(location)));
    out.push(fold('DESCRIPTION:' + esc(desc.join('\\n'))));
    out.push('END:VEVENT');
  });

  out.push('END:VCALENDAR');

  return ContentService
    .createTextOutput(out.join('\r\n'))
    .setMimeType(ContentService.MimeType.ICAL);
}

/* ---------- helpers ---------- */
function str(v) { return (v === null || v === undefined) ? '' : String(v).trim(); }
function pad(n) { n = Number(n); return (n < 10 ? '0' : '') + n; }

function normDate(v) {
  if (v instanceof Date) {
    return v.getFullYear() + '-' + pad(v.getMonth() + 1) + '-' + pad(v.getDate());
  }
  var s = String(v).trim();
  var m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (m) return m[1] + '-' + pad(m[2]) + '-' + pad(m[3]);
  m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);      // dd/mm/aaaa
  if (m) return m[3] + '-' + pad(m[2]) + '-' + pad(m[1]);
  return '';
}

function normTime(v) {
  if (v === '' || v === null || v === undefined) return '';
  if (v instanceof Date) return pad(v.getHours()) + ':' + pad(v.getMinutes());
  var m = String(v).trim().match(/^(\d{1,2}):(\d{2})/);
  return m ? pad(m[1]) + ':' + m[2] : '';
}

// Horário local (-03:00) convertido para UTC: UTC = local + 3h.
function localToUTC(dateStr, hhmm) {
  var d = dateStr.split('-'), t = hhmm.split(':');
  return new Date(Date.UTC(+d[0], +d[1] - 1, +d[2], +t[0] + 3, +t[1], 0));
}
function addHours(dt, n) { return new Date(dt.getTime() + n * 3600000); }

function toIcsUTC(dt) {
  return dt.getUTCFullYear() + pad(dt.getUTCMonth() + 1) + pad(dt.getUTCDate())
    + 'T' + pad(dt.getUTCHours()) + pad(dt.getUTCMinutes()) + pad(dt.getUTCSeconds()) + 'Z';
}

function esc(s) {
  return String(s)
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n');
}

// Dobra linhas longas (RFC 5545: máx. ~75 caracteres por linha).
function fold(line) {
  if (line.length <= 73) return line;
  var parts = [], i = 0;
  while (i < line.length) {
    parts.push((i === 0 ? '' : ' ') + line.substr(i, i === 0 ? 73 : 72));
    i += (i === 0 ? 73 : 72);
  }
  return parts.join('\r\n');
}
