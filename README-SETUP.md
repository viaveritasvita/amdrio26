# Programa Oficial — AMD · RCC · OSM · Rio 2026
### Guia de configuração e publicação

Site 100% estático (PWA offline, trilingue PT/FR/EN), pronto para o GitHub Pages.
URL final: `https://viaveritasvita.github.io/amdrio26/` → encurtada em `https://tinyurl.com/amdrio26` (QR do crachá).

---

## PLACEHOLDERS QUE VOCÊ PRECISA PREENCHER

Todos ficam em **`data.js`**, no bloco `SITE_CONFIG` (topo do arquivo):

| # | Placeholder | Onde | O que colocar |
|---|-------------|------|----------------|
| 1 | `COLE_SEU_ONESIGNAL_APP_ID_AQUI` | `data.js` → `SITE_CONFIG.oneSignalAppId` | App ID do OneSignal (passo 3 abaixo). Enquanto o placeholder estiver lá, o botão "Receber avisos" fica oculto automaticamente. |
| 2 | `https://chat.whatsapp.com/COLE_O_CODIGO_DO_GRUPO_AQUI` | `data.js` → `SITE_CONFIG.whatsappUrl` | Link do grupo/canal/número de avisos no WhatsApp (passo 4 abaixo). |
| 3 | `COLE_A_URL_CSV_PUBLICADA_DA_ABA_PROGRAMACAO` | `data.js` → `SITE_CONFIG.sheetProgramacaoCsvUrl` | URL do CSV publicado da aba **Programação** da planilha do Google (passo 2 abaixo). Enquanto o placeholder estiver lá, o site usa a grade embutida em `data.js`. |
| 4 | `COLE_A_URL_CSV_PUBLICADA_DA_ABA_AVISOS` | `data.js` → `SITE_CONFIG.sheetAvisosCsvUrl` | URL do CSV publicado da aba **Avisos** da mesma planilha (passo 2 abaixo). Enquanto o placeholder estiver lá, o site usa `avisos.json`. |
| 5 | `assets/medalhao.png` | pasta `assets/` | A arte oficial do brasão (moeda dourada) em PNG com fundo branco ou transparente. O `index.html` já aponta para esse arquivo; enquanto ele não existir, o site recua automaticamente para o emblema em SVG (`assets/medallion.svg`). Basta colocar o PNG na pasta — nada a editar. |
| 6 | *(opcional)* `assets/icon-180.png` | `index.html` (comentário no `<head>`) | Ícone 180×180 px em PNG para tela inicial do iPhone (`<link rel="apple-touch-icon" href="assets/icon-180.png">`). Os SVGs já cobrem Android/desktop. |

---

## 1. Publicar no GitHub Pages

1. Crie (ou use) o repositório `viaveritasvita/amdrio26`.
2. Envie **todo o conteúdo desta pasta `site/`** para a **raiz** do branch `main`
   (o `index.html` deve ficar na raiz do repositório).
3. No GitHub: **Settings → Pages → Build and deployment**
   - Source: *Deploy from a branch*
   - Branch: `main` · Pasta: `/ (root)` → **Save**
4. Aguarde 1–2 minutos. O site sobe em `https://viaveritasvita.github.io/amdrio26/`.
5. Confirme que o TinyURL `amdrio26` aponta para essa URL (é o destino do QR do crachá).

> Atualizações de **conteúdo** (programação/avisos): com a planilha configurada
> (passo 2), basta editar a planilha — sem commit e sem mexer no cache.
> Atualizações de **código/visual**: edite os arquivos, faça commit/push e aumente
> a versão do cache em `sw.js` (`amdrio26-v13` → `-v14`) para forçar a atualização
> em aparelhos que já instalaram o app.

> **IMPORTANTE — agenda completa no Google Agenda:** o link "Google Agenda" da linha
> de views assina o arquivo **estático** `assets/agenda-amdrio26.ics` (via
> `https://calendar.google.com/calendar/render?cid=webcal%3A%2F%2Fviaveritasvita.github.io%2Famdrio26%2Fassets%2Fagenda-amdrio26.ics`).
> Esse arquivo é uma cópia fixa da grade de `data.js`. **Se mudar a programação em
> `data.js`, REGERE o `assets/agenda-amdrio26.ics`** para que os dois batam
> (mesmas sessões, horários em UTC = hora local +3h, títulos em português), e suba
> a versão do cache no `sw.js`. A assinatura só funciona com o site **publicado**
> (URL pública); o Google revalida o feed periodicamente (pode levar horas até
> refletir mudanças para quem já assinou).

## 2. Planilha do Google (programação e avisos AO VIVO) — ~10 minutos

É daqui que o organizador edita o conteúdo no dia a dia, sem tocar em código.
O passo a passo completo (com a explicação de cada coluna) está em
**`COMO-EDITAR.md`**; o resumo:

1. Crie uma planilha no Google Sheets e importe os modelos prontos:
   - aba **Programação** ← `planilha/programacao.csv` (já preenchido com a grade atual);
   - aba **Avisos** ← `planilha/avisos.csv`.
2. **Arquivo → Compartilhar → Publicar na web** → escolha a aba **Programação** +
   formato **CSV** → Publicar → copie a URL. Repita para a aba **Avisos**.
3. Cole as 2 URLs em `data.js` → `SITE_CONFIG.sheetProgramacaoCsvUrl` e
   `SITE_CONFIG.sheetAvisosCsvUrl`. Commit + push (uma única vez).
4. Pronto: o site passa a ler a planilha a cada abertura (o cache do Google pode
   levar ~5 min para refletir edições). Offline, vale a última versão baixada.

> **Fallback garantido:** com os placeholders ainda em `data.js`, ou se a planilha
> falhar/for apagada, o site usa a grade embutida (`SCHEDULE` em `data.js`) e o
> `avisos.json` — nunca quebra.
>
> **Assinatura no Google Agenda:** `assets/agenda-amdrio26.ics` é um **snapshot**
> estático; se a grade mudar na planilha, regenere-o (ver aviso acima). O download
> `.ics` do site é sempre gerado com os dados em uso (planilha).

## 3. OneSignal (avisos push) — ~10 minutos

> **O guia completo e atualizado está em `README-PUSH.md`** (passo a passo no
> painel do OneSignal, configuração do service worker único `sw.js` no escopo
> `/amdrio26/` e roteiro de teste em Android e iPhone). Siga aquele arquivo —
> ele substitui as instruções antigas que ficavam nesta seção.

Resumo: criar app Web Push no OneSignal → *Typical Site* com a URL
`https://viaveritasvita.github.io/amdrio26/` → em *Advanced → Service Workers*
apontar TUDO para o `sw.js` do site (escopo `/amdrio26/`) → copiar o **App ID**
para `data.js` → `SITE_CONFIG.oneSignalAppId` → commit + push + subir a versão
do cache no `sw.js`. Enquanto o App ID for placeholder, o botão
**"Receber avisos"** fica oculto automaticamente.

## 4. WhatsApp (disparo garantido)

1. Crie um **grupo** (só admins postam) ou um **canal** de avisos do evento.
2. Copie o link de convite:
   - Grupo: *Dados do grupo → Convidar via link* → `https://chat.whatsapp.com/XXasdf...`
   - Canal: *Compartilhar canal* → `https://whatsapp.com/channel/XX...`
   - Ou número direto: `https://wa.me/5521XXXXXXXXX`
3. Cole o link em `data.js` → `SITE_CONFIG.whatsappUrl`. Commit + push.

## 5. Avisos in-page (sem push, funciona para todos)

Com a planilha configurada (passo 2), publique avisos pela aba **Avisos** da
planilha: linha nova com `id` único, `ativo` = `TRUE`, textos nos 3 idiomas.
Ver `COMO-EDITAR.md`.

Sem planilha (ou como reserva), o site lê **`avisos.json`** — edite e faça
commit/push. Exemplo:

```json
{
  "id": "2026-08-28-cafe",
  "ativo": true,
  "publicadoEm": "2026-08-28T17:40:00-03:00",
  "texto": {
    "pt": "O café na Casa do Rito Brasileiro foi antecipado para 17h45.",
    "fr": "Le café à la Casa do Rito Brasileiro est avancé à 17 h 45.",
    "en": "Coffee at the Casa do Rito Brasileiro moved up to 5:45 pm."
  },
  "link": ""
}
```

Regras: cada aviso precisa de um **id novo e único**; `ativo: false` retira o aviso;
o site verifica o arquivo a cada abertura e mostra uma tarja no topo (o usuário pode
dispensar; avisos dispensados não voltam).

## 6. Revisão fraterna das traduções (IMPORTANTE)

As traduções FR/EN dos títulos rituais foram feitas com o melhor cuidado, mas
**termos maçônicos têm tradições consagradas em cada obediência** — recomendo
validação por um irmão francófono e um anglófono antes do evento. Pontos sensíveis
(todos em `data.js` e `i18n.js`):

| Português | Francês (proposto) | Inglês (proposto) |
|---|---|---|
| Grau da Cátedra | Grade de la Chaire | Chair Degree |
| Cerimônias de obrigação | Cérémonies d’obligation | Obligation Ceremonies |
| Consagração de Conclaves / Conselhos | Consécration de Conclaves / Conseils | Consecration of Conclaves / Councils |
| Constituição do Grande Conclave / Grande Conselho | Constitution du Grand Conclave / Grand Conseil | Constitution of the Grand Conclave / Grand Council |
| Rito Brasileiro | Rite Brésilien | Brazilian Rite |
| Servidores da Pátria, da Ordem e da Humanidade | Serviteurs de la Patrie, de l’Ordre et de l’Humanité | Servants of the Homeland, of the Order and of Humanity |
| ritos coirmãos | rites frères | sister rites |
| Reunião Provincial Anual | Réunion provinciale annuelle | Annual Provincial Meeting |
| Trabalhos encerrados (mensagem final) | Travaux clos | Labours closed |

Nomes próprios **não são traduzidos** (por decisão): AMD, RCC, OSM, Acon, Athelstan,
Red Branch of Eri, Order of St Patrick, Secret Monitor, Allied Masonic Degrees.

## 7. Mapa dos arquivos

| Arquivo | Papel |
|---|---|
| `index.html` | Estrutura, medalhão SVG, skyline do Rio, botões |
| `styles.css` | Identidade visual (marinho + dourado, Cinzel + Source Serif 4) |
| `data.js` | **Conteúdo embutido (fallback)**: grade oficial, locais, corpos, `SITE_CONFIG` (placeholders, incl. URLs dos CSVs da planilha) |
| `planilha/programacao.csv` | **Modelo** da aba "Programação" para importar no Google Sheets (grade atual completa) |
| `planilha/avisos.csv` | **Modelo** da aba "Avisos" para importar no Google Sheets |
| `i18n.js` | Textos de interface em PT/FR/EN |
| `app.js` | Motor: idiomas, "Agora/A seguir", abas, roteiro, .ics, avisos, push, PWA |
| `manifest.json` | Instalação como app (nome, ícones, cores) |
| `sw.js` | Offline (cache do app shell) + importa worker do OneSignal |
| `OneSignalSDKWorker.js` | Legado (não é mais usado: o OneSignal aponta para o próprio `sw.js`) |
| `avisos.json` | Avisos in-page (fallback quando a planilha não está configurada/disponível) |
| `assets/agenda-amdrio26.ics` | Agenda completa **estática** (assinatura no Google Agenda) — regerar sempre que a grade de `data.js` mudar |
| `assets/icon.svg` / `icon-maskable.svg` | Ícones do PWA |

## 8. Teste rápido antes do evento

- Abra no celular, mude os idiomas (PT/FR/EN) — a escolha fica gravada.
- Toque num local → deve abrir o Google Maps.
- Toque em "Agenda" numa sessão → baixa `.ics` → abre no calendário.
- Instale o app (menu do navegador → "Adicionar à tela inicial"), ative o modo
  avião e reabra: a programação deve carregar normalmente.
- Publique um aviso de teste em `avisos.json` e recarregue a página.
