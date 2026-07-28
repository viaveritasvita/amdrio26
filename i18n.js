/* ============================================================
   i18n.js — TEXTOS DE INTERFACE (PT / FR / EN)
   Termos maçônicos sensíveis: ver README-SETUP.md → "Revisão
   fraterna das traduções". Nomes próprios de corpos não se
   traduzem (AMD, RCC, OSM, Acon, Athelstan, Red Branch of Eri,
   Order of St Patrick, Secret Monitor, Allied Masonic Degrees).
   ============================================================ */

const I18N = {
  pt: {
    langName: 'Português',
    docTitle: 'Programa Oficial — AMD · RCC · OSM · Rio de Janeiro 2026',
    eyebrow: 'Rio de Janeiro · Brasil',
    programTitle: 'Programa Oficial',
    datesPlaque: '27–30 de agosto de 2026',
    motto1: 'Conhecer · Conectar · Transformar',
    motto2: 'Por uma Maçonaria forte e unida',

    weekdays: { wed: 'Quarta-feira', thu: 'Quinta-feira', fri: 'Sexta-feira', sat: 'Sábado', sun: 'Domingo' },
    weekdaysShort: { wed: 'Qua', thu: 'Qui', fri: 'Sex', sat: 'Sáb', sun: 'Dom' },
    monthShort: 'ago',
    dayOfMonthLabel: 'de agosto',

    now: 'Agora',
    next: 'A seguir',
    startsIn: 'começa em',
    endsIn: 'termina em',
    openingCountdown: 'Contagem para a abertura oficial',
    openingDate: 'Quinta-feira, 27 de agosto · 10h',
    closedTitle: 'Trabalhos encerrados',
    closedMsg: 'O encontro do Rio de Janeiro cumpriu a sua jornada. Gratidão a todos os irmãos que conheceram, conectaram e transformaram.',
    days: 'd', hours: 'h', minutes: 'min', seconds: 's',

    tabsLabel: 'Dias do evento',
    viewAll: 'Programação completa',
    viewMine: 'Meu roteiro',
    emptyMine: 'O seu roteiro ainda está vazio. Toque na estrela de uma sessão para guardá-la aqui.',
    vesperTag: 'cerimônias preliminares · véspera',
    tabVesperMini: 'preliminares',

    legendTitle: 'Legenda de cores por rito',
    legendLogistics: 'Traslados e refeições',

    inProgress: 'em curso',
    restrictedLabel: 'Sessão restrita',
    noteLabel: 'Observação',
    openMap: 'Abrir no mapa',
    gcalBtn: 'Google Agenda',
    icsBtn: 'Baixar (.ics)',
    addAllToCalendar: 'Agenda (.ics)',
    addAllToCalendarLong: 'Baixar agenda completa (.ics)',
    favAdd: 'Adicionar ao meu roteiro',
    favRemove: 'Remover do meu roteiro',
    toBeDefined: 'Local a definir',

    locationsTitle: 'Locais',
    locationsSub: 'Os quatro endereços do encontro',
    addressLabel: 'Endereço',

    noticesTitle: 'Aviso da organização',
    dismissNotice: 'Dispensar aviso',
    /* usado APENAS no modo de pré-visualização (?demo=1) */
    demoNoticeText: 'Exemplo de aviso (demonstração): o almoço de hoje será às 12h30 no Palácio Mariz e Barros.',
    pushBtn: 'Receber avisos',
    pushGranted: 'Avisos ativados',
    pushDenied: 'Avisos bloqueados no navegador',
    whatsappBtn: 'Avisos no WhatsApp',
    installBtn: 'Instalar app',

    /* fluxo de instalação (modal iOS / Android) — trechos entre **asteriscos**
       aparecem em negrito no modal */
    installModalTitle: 'Instalar o aplicativo',
    installIntroIOS: 'No iPhone e no iPad, a instalação é feita pelo Safari, em três passos:',
    iosStep1: 'Toque no ícone **Compartilhar** na barra do Safari.',
    iosStep2: 'Role a lista e toque em **“Adicionar à Tela de Início”**.',
    iosStep3: 'Confirme em **Adicionar** e abra o aplicativo pelo novo ícone na tela de início.',
    iosPushNote: 'No iPhone, as notificações só funcionam depois de instalar assim.',
    pushAfterInstall: 'Para receber avisos no iPhone, instale o aplicativo primeiro — as notificações são ativadas depois, dentro do aplicativo instalado.',
    iosOtherIntro: 'Neste aparelho, somente o **Safari** consegue instalar o aplicativo.',
    iosOtherStep1: 'Abra o **Safari** e visite **{url}**.',
    iosOtherStep2: 'Lá, toque em **“Instalar app”** para ver o passo a passo.',
    androidIntro: 'Se o convite de instalação não apareceu, instale pelo menu do navegador:',
    androidStep1: 'Toque no menu **⋮** no canto do navegador.',
    androidStep2: 'Toque em **“Instalar aplicativo”** (ou **“Adicionar à tela inicial”**) e confirme.',
    closeModal: 'Fechar',
    appInstalled: 'Aplicativo instalado',

    shareBtn: 'Compartilhar',
    shareText: 'Programa Oficial — AMD · RCC · OSM · Rio de Janeiro, 27–30 de agosto de 2026',
    linkCopied: 'Link copiado',
    icsReady: 'Arquivo de agenda gerado',

    emergencyLabel: 'Emergências',
    emergencyAria: 'Ligar para o telefone de emergência',
    contactTitle: 'Contato',
    registrationEmailLabel: 'Inscrições e reconhecimento',

    offlineReady: 'Disponível offline',
    footerNote: 'Aplicativo oficial do encontro · funciona offline',
    /* "ViaVeritasVita" é nome próprio (não se traduz) */
    brandTagline: 'conheça nossa estrutura de apoio à Maçonaria',
  },

  fr: {
    langName: 'Français',
    docTitle: 'Programme Officiel — AMD · RCC · OSM · Rio de Janeiro 2026',
    eyebrow: 'Rio de Janeiro · Brésil',
    programTitle: 'Programme Officiel',
    datesPlaque: '27–30 août 2026',
    motto1: 'Connaître · Connecter · Transformer',
    motto2: 'Pour une Franc-maçonnerie forte et unie',

    weekdays: { wed: 'Mercredi', thu: 'Jeudi', fri: 'Vendredi', sat: 'Samedi', sun: 'Dimanche' },
    weekdaysShort: { wed: 'Mer', thu: 'Jeu', fri: 'Ven', sat: 'Sam', sun: 'Dim' },
    monthShort: 'août',
    dayOfMonthLabel: 'août',

    now: 'En ce moment',
    next: 'À suivre',
    startsIn: 'commence dans',
    endsIn: 'se termine dans',
    openingCountdown: 'Compte à rebours vers l’ouverture officielle',
    openingDate: 'Jeudi 27 août · 10 h',
    closedTitle: 'Travaux clos',
    closedMsg: 'La rencontre de Rio de Janeiro a accompli son chemin. Gratitude à tous les frères qui ont connu, connecté et transformé.',
    days: 'j', hours: 'h', minutes: 'min', seconds: 's',

    tabsLabel: 'Jours de l’événement',
    viewAll: 'Programme complet',
    viewMine: 'Mon parcours',
    emptyMine: 'Votre parcours est encore vide. Touchez l’étoile d’une séance pour la garder ici.',
    vesperTag: 'cérémonies préliminaires · veille',
    tabVesperMini: 'préliminaires',

    legendTitle: 'Légende des couleurs par rite',
    legendLogistics: 'Transferts et repas',

    inProgress: 'en cours',
    restrictedLabel: 'Séance réservée',
    noteLabel: 'Remarque',
    openMap: 'Ouvrir la carte',
    gcalBtn: 'Google Agenda',
    icsBtn: 'Télécharger (.ics)',
    addAllToCalendar: 'Agenda (.ics)',
    addAllToCalendarLong: 'Télécharger tout l’agenda (.ics)',
    favAdd: 'Ajouter à mon parcours',
    favRemove: 'Retirer de mon parcours',
    toBeDefined: 'Lieu à définir',

    locationsTitle: 'Lieux',
    locationsSub: 'Les quatre adresses de la rencontre',
    addressLabel: 'Adresse',

    noticesTitle: 'Avis de l’organisation',
    dismissNotice: 'Fermer l’avis',
    /* utilisé UNIQUEMENT en mode aperçu (?demo=1) */
    demoNoticeText: 'Exemple d’avis (démonstration) : le déjeuner d’aujourd’hui aura lieu à 12 h 30 au Palais Mariz e Barros.',
    pushBtn: 'Recevoir les avis',
    pushGranted: 'Avis activés',
    pushDenied: 'Avis bloqués par le navigateur',
    whatsappBtn: 'Avis sur WhatsApp',
    installBtn: 'Installer l’application',

    /* parcours d’installation (fenêtre iOS / Android) — les passages entre
       **astérisques** apparaissent en gras */
    installModalTitle: 'Installer l’application',
    installIntroIOS: 'Sur iPhone et iPad, l’installation se fait via Safari, en trois étapes :',
    iosStep1: 'Touchez l’icône **Partager** dans la barre de Safari.',
    iosStep2: 'Faites défiler la liste et touchez **« Sur l’écran d’accueil »**.',
    iosStep3: 'Confirmez avec **Ajouter**, puis ouvrez l’application depuis la nouvelle icône de l’écran d’accueil.',
    iosPushNote: 'Sur iPhone, les notifications ne fonctionnent qu’après cette installation.',
    pushAfterInstall: 'Pour recevoir les avis sur iPhone, installez d’abord l’application — les notifications s’activent ensuite, dans l’application installée.',
    iosOtherIntro: 'Sur cet appareil, seul **Safari** peut installer l’application.',
    iosOtherStep1: 'Ouvrez **Safari** et visitez **{url}**.',
    iosOtherStep2: 'Là, touchez **« Installer l’application »** pour voir les étapes.',
    androidIntro: 'Si l’invitation d’installation n’est pas apparue, installez via le menu du navigateur :',
    androidStep1: 'Touchez le menu **⋮** dans le coin du navigateur.',
    androidStep2: 'Touchez **« Installer l’application »** (ou **« Ajouter à l’écran d’accueil »**) et confirmez.',
    closeModal: 'Fermer',
    appInstalled: 'Application installée',

    shareBtn: 'Partager',
    shareText: 'Programme Officiel — AMD · RCC · OSM · Rio de Janeiro, 27–30 août 2026',
    linkCopied: 'Lien copié',
    icsReady: 'Fichier d’agenda généré',

    emergencyLabel: 'Urgences',
    emergencyAria: 'Appeler le numéro d’urgence',
    contactTitle: 'Contact',
    registrationEmailLabel: 'Inscriptions et reconnaissance',

    offlineReady: 'Disponible hors ligne',
    footerNote: 'Application officielle de la rencontre · fonctionne hors ligne',
    /* « ViaVeritasVita » est un nom propre (ne se traduit pas) */
    brandTagline: 'découvrez notre structure de soutien à la Franc-maçonnerie',
  },

  en: {
    langName: 'English',
    docTitle: 'Official Programme — AMD · RCC · OSM · Rio de Janeiro 2026',
    eyebrow: 'Rio de Janeiro · Brazil',
    programTitle: 'Official Programme',
    datesPlaque: 'August 27–30, 2026',
    motto1: 'To Know · To Connect · To Transform',
    motto2: 'For a strong and united Freemasonry',

    weekdays: { wed: 'Wednesday', thu: 'Thursday', fri: 'Friday', sat: 'Saturday', sun: 'Sunday' },
    weekdaysShort: { wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat', sun: 'Sun' },
    monthShort: 'Aug',
    dayOfMonthLabel: 'August',

    now: 'Happening now',
    next: 'Up next',
    startsIn: 'starts in',
    endsIn: 'ends in',
    openingCountdown: 'Countdown to the official opening',
    openingDate: 'Thursday, August 27 · 10 am',
    closedTitle: 'Labours closed',
    closedMsg: 'The Rio de Janeiro gathering has completed its journey. Gratitude to all the brethren who came to know, to connect and to transform.',
    days: 'd', hours: 'h', minutes: 'min', seconds: 's',

    tabsLabel: 'Event days',
    viewAll: 'Full programme',
    viewMine: 'My itinerary',
    emptyMine: 'Your itinerary is still empty. Tap the star on a session to keep it here.',
    vesperTag: 'preliminary ceremonies · eve',
    tabVesperMini: 'preliminary',

    legendTitle: 'Colour key by rite',
    legendLogistics: 'Transfers and meals',

    inProgress: 'in progress',
    restrictedLabel: 'Restricted session',
    noteLabel: 'Note',
    openMap: 'Open map',
    gcalBtn: 'Google Calendar',
    icsBtn: 'Download (.ics)',
    addAllToCalendar: 'Calendar (.ics)',
    addAllToCalendarLong: 'Download full calendar (.ics)',
    favAdd: 'Add to my itinerary',
    favRemove: 'Remove from my itinerary',
    toBeDefined: 'Venue to be defined',

    locationsTitle: 'Venues',
    locationsSub: 'The four addresses of the gathering',
    addressLabel: 'Address',

    noticesTitle: 'Notice from the organisers',
    dismissNotice: 'Dismiss notice',
    /* used ONLY in preview mode (?demo=1) */
    demoNoticeText: 'Sample notice (demo): today’s lunch will be at 12:30 pm at the Mariz e Barros Palace.',
    pushBtn: 'Receive alerts',
    pushGranted: 'Alerts enabled',
    pushDenied: 'Alerts blocked by the browser',
    whatsappBtn: 'WhatsApp alerts',
    installBtn: 'Install app',

    /* install flow (iOS / Android modal) — text between **asterisks**
       is rendered in bold */
    installModalTitle: 'Install the app',
    installIntroIOS: 'On iPhone and iPad, installation is done through Safari, in three steps:',
    iosStep1: 'Tap the **Share** icon in the Safari toolbar.',
    iosStep2: 'Scroll the list and tap **“Add to Home Screen”**.',
    iosStep3: 'Confirm with **Add**, then open the app from the new icon on your home screen.',
    iosPushNote: 'On iPhone, notifications only work after installing this way.',
    pushAfterInstall: 'To receive alerts on iPhone, install the app first — notifications are enabled afterwards, inside the installed app.',
    iosOtherIntro: 'On this device, only **Safari** can install the app.',
    iosOtherStep1: 'Open **Safari** and visit **{url}**.',
    iosOtherStep2: 'There, tap **“Install app”** to see the steps.',
    androidIntro: 'If the install invitation did not appear, install from the browser menu:',
    androidStep1: 'Tap the **⋮** menu in the corner of the browser.',
    androidStep2: 'Tap **“Install app”** (or **“Add to Home screen”**) and confirm.',
    closeModal: 'Close',
    appInstalled: 'App installed',

    shareBtn: 'Share',
    shareText: 'Official Programme — AMD · RCC · OSM · Rio de Janeiro, August 27–30, 2026',
    linkCopied: 'Link copied',
    icsReady: 'Calendar file generated',

    emergencyLabel: 'Emergencies',
    emergencyAria: 'Call the emergency number',
    contactTitle: 'Contact',
    registrationEmailLabel: 'Registration and recognition',

    offlineReady: 'Available offline',
    footerNote: 'Official app of the gathering · works offline',
    /* "ViaVeritasVita" is a proper name (never translated) */
    brandTagline: 'discover our structure in support of Freemasonry',
  },
};
