/* =====================================================
   translations.js – Greta Andreolli Portfolio
   Aggiungere a tutte le pagine prima di </body>
===================================================== */

const TRANSLATIONS = {
  it: {
    nav_home: "Home",
    nav_progetti: "Progetti",
    nav_chi_sono: "Chi sono",
    nav_contatti: "Contatti",

    footer_copy: "© 2025 Greta Andreolli – UX/UI Designer",

    home_h1: "Ciao, sono Greta Andreolli",
    home_intro: "UX/UI Designer appassionata di esperienze digitali semplici e autentiche.",
    home_btn: "Scopri i miei progetti",
    stack_h2: "Stack",
    stack_p: "Strumenti che uso ogni giorno",

    proj_h1: "Progetti",
    proj_intro1:
      "Ogni progetto è stato un laboratorio di crescita: un'occasione per unire competenze tecniche e sensibilità umana, sperimentando soluzioni sempre nuove per creare esperienze significative.",
    proj_intro2:
      "Qui trovi una selezione di lavori che raccontano il mio percorso e il mio modo di pensare, osservare e progettare come designer.",

    proj1_title: "iVegan",
    proj1_desc: "Re-design del sito iVegan.",
    proj2_title: "Autoservizi Andreolli",
    proj2_desc: "Sito web per azienda di trasporti familiare.",
    proj3_title: "Rifugio Altissimo",
    proj3_desc: "Re-design del sito Rifugio Altissimo.",

    label_anno: "Anno:",
    label_ruolo: "Ruolo:",
    label_strumenti: "Strumenti:",
    label_processo: "Processo di lavoro",
    label_processo_p: "Il processo è stato articolato in cinque fasi principali:",
    label_risultati: "Risultati",
    label_scopri: "Scopri il progetto!",

    /* ================= IVEGAN ================= */

    ivegan_h1: "iVegan",
    ivegan_h2: "ri-design del sito iVegan",
    ivegan_ov_h: "Overview",
    ivegan_ov_p:
      "Il progetto iVegan nasce con l'obiettivo di migliorare l'esperienza d'acquisto del più grande e-commerce italiano dedicato ai prodotti vegani. L'intervento ha riguardato la riorganizzazione dell'architettura informativa, il miglioramento della chiarezza visiva e l'ottimizzazione dei flussi per supportare un'esperienza più accessibile, intuitiva e coinvolgente.",

    ivegan_s1_h: "1. Discovery",
    ivegan_s1_p: "Analisi del sito, competitor, utenti e journey per individuare aree di miglioramento.",
    ivegan_s2_h: "2. Accessibilità",
    ivegan_s2_p: "Applicazione dei principi WCAG per un'esperienza inclusiva e chiara.",
    ivegan_s3_h: "3. Wireframing",
    ivegan_s3_p: "Creazione di flussi e layout principali per validare la struttura.",
    ivegan_s4_h: "4. User Interface",
    ivegan_s4_p: "Sviluppo del design system e delle interfacce finali coerenti e piacevoli da usare.",
    ivegan_s5_h: "5. User Test",
    ivegan_s5_p: "Test con utenti reali e iterazione sulle soluzioni proposte.",

    ivegan_r1: "Esperienza d'acquisto più fluida",
    ivegan_r2: "Maggior chiarezza e accessibilità",
    ivegan_r3: "Riduzione dei punti di attrito nel flusso",
    ivegan_r4: "Interfaccia coerente e scalabile nel tempo",

    /* ================= AUTOSERVIZI ================= */

    auto_h1: "Autoservizi Andreolli",
    auto_h2: "Sito web per azienda di trasporti familiare",
    auto_ov_h: "Overview",
    auto_ov_p:
      "Il progetto ha portato Autoservizi Andreolli online con una presenza digitale completa. Partendo da una situazione in cui l'azienda aveva solo un numero di telefono, ho progettato e sviluppato un sito web responsive con approccio mobile-first, sistema multilingua (IT/EN/DE) e architettura informativa strutturata su 5 pagine. Il sito include design system coerente, form contatti funzionante e storytelling della storia familiare dell'azienda attraverso tre generazioni.",

    auto_s1_h: "1. Discovery",
    auto_s1_p:
      "Analisi degli obiettivi aziendali, definizione dell'architettura informativa e studio del logo esistente per guidare le scelte di design.",

    auto_s2_h: "2. Wireframing",
    auto_s2_p:
      "Progettazione mobile-first con griglia a 4 colonne, definizione dei flussi utente e strutturazione delle 5 pagine principali.",

    auto_s3_h: "3. User Interface",
    auto_s3_p:
      "Sviluppo del design system (palette colori, tipografia Quicksand, componenti), UI responsive e interfacce accessibili.",

    auto_s4_h: "4. Development & Launch",
    auto_s4_p:
      "Sviluppo frontend con HTML, CSS e JavaScript, sistema multilingua, form validation e pubblicazione su GitHub Pages.",

    auto_r1: "Presenza digitale completa da zero",
    auto_r2: "Sistema multicanale di acquisizione clienti",
    auto_r3: "Sito responsive mobile-first accessibile internazionalmente",
    auto_r4: "Storytelling efficace della storia familiare",

    /* ================= RIFUGIO ALTISSIMO ================= */

    rif_h1: "Rifugio Altissimo",
    rif_h2: "Redesign del sito Rifugio Altissimo",
    rif_ov_h: "Overview",

    rif_ov_p: `Il Rifugio Altissimo "Damiano Chiesa" si trova sulla vetta più alta del Monte Baldo, a Brentonico (TN), con una vista unica sul Lago di Garda. Il sito esistente, realizzato su Wix, non rispecchiava la qualità dell'esperienza reale: navigazione confusa, architettura informativa frammentata, nessuna ottimizzazione mobile e un flusso di prenotazione nascosto e dispersivo. L'obiettivo del redesign era trasformare il sito in uno strumento chiaro, coerente e orientato all'utente, mantenendo intatta l'identità autentica del rifugio.`,

    rif_s1_h: "1. Branding & Grafica",

    rif_s1_p: `Redesign completo dell'identità visiva: nuovo logo con la "A" di Altissimo integrata nella forma della montagna, payoff "Tra cielo e lago", palette cromatica ispirata ai materiali del rifugio e al paesaggio, tipografia modulare e set di icone lineari.`,

    rif_s2_h: "2. Discovery",
    rif_s2_p:
      "Analisi euristica, competitor, survey utenti, definizione target e user journey as-is/to-be.",

    rif_s3_h: "3. Wireframing",
    rif_s3_p:
      "Mobile-first con griglie 12 e 4 colonne, wireframe per tutte le pagine e nuova navigazione.",

    rif_s4_h: "4. User Interface",
    rif_s4_p:
      "Design system completo, componenti, toggle stagionale e prototipo Figma.",

    rif_s5_h: "5. User Test",
    rif_s5_p:
      "Test su Maze con 8 utenti: SUS 74/100 e 83% task success.",

    rif_r1: "Tempo di ricerca ridotto del 58%",
    rif_r2: "100% success rate prenotazione stanza",
    rif_r3: "SUS 74/100",
    rif_r4: "Soddisfazione 4,1/5",
    rif_r5: "Architettura semplificata",

    /* ================= ABOUT ================= */

    about_h1: "Ciao, mi presento!",
    about_info: "Qui trovi altre informazioni su di me!",
    about_cv: "Scarica il mio CV",
    about_linkedin: "Visita il mio LinkedIn",
    about_bio_h: "Empatia che prende forma",

   about_bio_p:    "Ho sempre avuto una grande curiosità per le persone e per il mondo.<br>Ed è proprio questa curiosità che mi ha portata nel mondo dello UX/UI Design, dopo un percorso fatto di esperienze molto diverse e profondamente formative.<br><br>A 17 anni ho vissuto sei mesi in Svezia per frequentare una scuola internazionale inglese.<br>Poi, a 19 anni, sono volata in Australia per un anno. Questa esperienza mi ha allenata al problem solving sul campo: lavoravo, viaggiavo e mi adattavo a situazioni completamente nuove, da sola dall'altra parte del mondo.<br>Dopo l'università ho lavorato per un catering di lusso in Emilia-Romagna, dove ho capito quanto conti anticipare i bisogni, curare i dettagli e creare esperienze memorabili. Esattamente ciò che cerco di fare oggi nel digitale.<br>Più tardi ho collaborato con il team Hyundai nel mondiale rally 2024, un mix di logistica, velocità e precisione. Ho imparato a gestire la pressione e a far funzionare collaborazioni complesse.<br><br>Dopo queste esperienze ho deciso di rimettermi in gioco per seguire un'altra mia passione.<br>Lo UX/UI Design si è rivelato il mix che cercavo: unire creatività ed empatia con metodo e visione strategica.<br><br>Così mi sono rimboccata le maniche e sono tornata a studiare. Un anno intenso, pieno di sfide ma anche di soddisfazioni.<br><br>Oggi il design per me non è solo estetica e funzionalità, ma è il modo in cui metto in pratica tutto quello che ho imparato sulle persone. Il design non è altro che empatia che prende forma.",
    /* ================= CONTACT ================= */

    contact_h1: "Contattami",
    contact_sub: "Soluzioni creative e funzionali",
    contact_nome: "Nome",
    contact_cogn: "Cognome",
    contact_email: "Email",
    contact_msg: "Messaggio",
    contact_send: "Invia"
  },

  en: {
    nav_home: "Home",
    nav_progetti: "Projects",
    nav_chi_sono: "About me",
    nav_contatti: "Contact",
    footer_copy: "© 2025 Greta Andreolli – UX/UI Designer",
    
    home_h1:    "Hi, I'm Greta Andreolli",
    home_intro: "UX/UI Designer passionate about simple and authentic digital experiences.",
    home_btn:   "Explore my projects",
    stack_h2:   "Stack",
    stack_p:    "Tools I use every day",
 
    proj_h1:     "Projects",
    proj_intro1: "Each project has been a laboratory of growth: an opportunity to combine technical skills and human sensibility, experimenting with new solutions to create meaningful experiences.",
    proj_intro2: "Here you'll find a selection of works that tell the story of my journey and my way of thinking, observing, and designing.",
    proj1_title: "iVegan",
    proj1_desc:  "Re-design of the iVegan website.",
    proj2_title: "Autoservizi Andreolli",
    proj2_desc:  "Website for a family transport company.",
    proj3_title: "Rifugio Altissimo",
    proj3_desc:  "Re-design of the Rifugio Altissimo website.",
 
    label_anno:      "Year:",
    label_ruolo:     "Role:",
    label_strumenti: "Tools:",
    label_processo:  "Process",
    label_processo_p:"The process was structured into five main phases:",
    label_risultati: "Results",
    label_scopri:    "Explore the project!",
 
    ivegan_h1:    "iVegan",
    ivegan_h2:    "Re-design of the iVegan website",
    ivegan_ov_h:  "Overview",
    ivegan_ov_p:  "The iVegan project aims to improve the shopping experience of Italy's largest vegan e-commerce platform. The work involved reorganising the information architecture, improving visual clarity, and optimising user flows to support a more accessible, intuitive, and engaging experience.",
    ivegan_s1_h:  "1. Discovery",
    ivegan_s1_p:  "Analysis of the site, competitors, users, and journeys to identify areas for improvement.",
    ivegan_s2_h:  "2. Accessibility",
    ivegan_s2_p:  "Application of WCAG principles for an inclusive and clear experience.",
    ivegan_s3_h:  "3. Wireframing",
    ivegan_s3_p:  "Creation of main flows and layouts to validate the structure.",
    ivegan_s4_h:  "4. User Interface",
    ivegan_s4_p:  "Development of the design system and final interfaces, consistent and pleasant to use.",
    ivegan_s5_h:  "5. User Testing",
    ivegan_s5_p:  "Testing with real users and iteration on the proposed solutions.",
    ivegan_r1:    "Smoother shopping experience",
    ivegan_r2:    "Greater clarity and accessibility",
    ivegan_r3:    "Reduced friction points in the flow",
    ivegan_r4:    "Consistent and scalable interface over time",
 
    auto_h1:   "Autoservizi Andreolli",
    auto_h2:   "Website for a family transport company",
    auto_ov_h: "Overview",
    auto_ov_p: "The project brought Autoservizi Andreolli online with a complete digital presence. Starting from a situation where the company had only a phone number, I designed and developed a responsive mobile-first website with a multilingual system (IT/EN/DE) and an information architecture structured across 5 pages. The site includes a coherent design system, a working contact form, and storytelling of the company's family history across three generations.",
    auto_s1_h: "1. Discovery",
    auto_s1_p: "Analysis of business objectives, definition of information architecture, and study of the existing logo to guide design choices.",
    auto_s2_h: "2. Wireframing",
    auto_s2_p: "Mobile-first design with a 4-column grid, definition of user flows, and structuring of the 5 main pages.",
    auto_s3_h: "3. User Interface",
    auto_s3_p: "Development of the design system (colour palette, Quicksand typography, components), responsive UI design, and creation of consistent, accessible interfaces.",
    auto_s4_h: "4. Development & Launch",
    auto_s4_p: "Frontend development with HTML, CSS and JavaScript, multilingual system implementation, form validation, and online publication via GitHub Pages.",
    auto_r1:   "Complete digital presence from scratch",
    auto_r2:   "Multi-channel customer acquisition system",
    auto_r3:   "Internationally accessible responsive mobile-first site",
    auto_r4:   "Effective storytelling of the company's family history",
 
    rif_h1:   "Rifugio Altissimo",
    rif_h2:   "Redesign of the Rifugio Altissimo website",
    rif_ov_h: "Overview",
    rif_ov_p: 'Rifugio Altissimo "Damiano Chiesa" sits on the highest peak of Monte Baldo, in Brentonico (TN), with a unique view of Lake Garda. The existing Wix-based site did not reflect the quality of the real experience: confusing navigation, fragmented information architecture, no mobile optimisation, and a hidden, dispersive booking flow. The goal of the redesign was to transform the site from a simple information showcase into a clear, coherent, user-oriented tool, while preserving the authentic identity of the refuge.',
    rif_s1_h: "1. Branding & Visual Design",
    rif_s1_p: "Complete visual identity redesign: new logo with the 'A' of Altissimo integrated into the mountain shape, tagline 'Between sky and lake', colour palette inspired by the refuge's materials and landscape, modular typographic scale on two families (Bricolage Grotesque + Source Serif 4), linear icon set.",
    rif_s2_h: "2. Discovery",
    rif_s2_p: "Heuristic analysis of the existing site using Nielsen's 10 heuristics, comparative analysis of 5 competitor refuges in Trentino-Alto Adige, target definition with 2024 industry data, survey with 15 real users, 3 user personas, as-is and to-be user journeys for each persona.",
    rif_s3_h: "3. Wireframing",
    rif_s3_p: "Mobile-first design with a 12-column desktop grid (1280px) and 4-column mobile grid (393px). High-fidelity wireframes for all pages: homepage, kitchen, sleeping at the refuge, outdoor, shop. Navigation rethought with a desktop sidebar and sticky mobile header.",
    rif_s4_h: "4. User Interface",
    rif_s4_p: "Complete design system with components, states (hover/focus/disabled), summer/winter seasonal toggle, dual-mode slider animations. UI designed for both desktop and mobile across all pages, with an interactive Figma prototype.",
    rif_s5_h: "5. User Testing",
    rif_s5_p: "Remote unmoderated usability test on Maze with 8 participants from the real target. 4 tasks tested: dinner booking, room booking, trail search, shop purchase. SUS Score 74/100 (Good range), 83% average task success rate, 100% completion rate on the room booking flow.",
    rif_r1:   "Information search time reduced by 58% compared to the current site",
    rif_r2:   "100% success rate on the room booking flow",
    rif_r3:   "SUS Score 74/100, above the minimum threshold of 70 set as a goal",
    rif_r4:   "Average post-task satisfaction: 4.1/5",
    rif_r5:   "Information architecture simplified from 3 navigation levels to a flat structure",
 
    about_h1:       "Hi, let me introduce myself!",
    about_info:     "Here you'll find more information about me!",
    about_cv:       "Download my CV",
    about_linkedin: "Visit my LinkedIn",
    about_bio_h:    "Empathy taking shape",
    about_bio_p:    "I have always had a deep curiosity for people and the world around me.<br>It is precisely this curiosity that brought me into the world of UX/UI Design, after a journey made up of very different and deeply formative experiences.<br><br>At 17 I spent six months in Sweden attending an international English school.<br>Then, at 19, I flew to Australia for a year. That experience trained me in on-the-ground problem solving: I was working, travelling, and adapting to completely new situations, alone on the other side of the world.<br>After university I worked for a luxury catering company in Emilia-Romagna, where I learned how important it is to anticipate needs, attend to detail, and create memorable experiences — exactly what I try to do today in the digital world.<br>Later I collaborated with the Hyundai team at the 2024 World Rally Championship, a mix of logistics, speed, and precision. I learned to handle pressure and make complex collaborations work.<br><br>After all these experiences I decided to reinvent myself and follow another passion.<br>UX/UI Design turned out to be exactly the mix I was looking for: combining creativity and empathy with method and strategic vision.<br><br>So I rolled up my sleeves and went back to studying. An intense year, full of challenges but also great satisfaction.<br><br>Today, design for me is not just aesthetics and functionality — it is the way I put into practice everything I have learned about people. Design is nothing but empathy taking shape.",
 
    contact_h1:   "Contact me",
    contact_sub:  "To find creative and functional solutions tailored to your needs",
    contact_nome: "First name",
    contact_cogn: "Last name",
    contact_email:"Email",
    contact_msg:  "Message",
    contact_send: "Send",
  },

  de: {
    nav_home:        "Startseite",
    nav_progetti:    "Projekte",
    nav_chi_sono:    "Über mich",
    nav_contatti:    "Kontakt",
    footer_copy:     "© 2025 Greta Andreolli – UX/UI Designerin",
 
    home_h1:    "Hallo, ich bin Greta Andreolli",
    home_intro: "UX/UI Designerin mit Leidenschaft für einfache und authentische digitale Erlebnisse.",
    home_btn:   "Meine Projekte entdecken",
    stack_h2:   "Stack",
    stack_p:    "Werkzeuge, die ich täglich nutze",
 
    proj_h1:     "Projekte",
    proj_intro1: "Jedes Projekt war ein Wachstumslabor: eine Gelegenheit, technische Fähigkeiten mit menschlichem Feingefühl zu verbinden und neue Lösungen zu entwickeln, um bedeutungsvolle Erlebnisse zu schaffen.",
    proj_intro2: "Hier finden Sie eine Auswahl von Arbeiten, die meinen Werdegang und meine Art zu denken, zu beobachten und zu gestalten widerspiegeln.",
    proj1_title: "iVegan",
    proj1_desc:  "Neugestaltung der iVegan-Website.",
    proj2_title: "Autoservizi Andreolli",
    proj2_desc:  "Website für ein Familienunternehmen im Transportbereich.",
    proj3_title: "Rifugio Altissimo",
    proj3_desc:  "Neugestaltung der Website Rifugio Altissimo.",
 
    label_anno:      "Jahr:",
    label_ruolo:     "Rolle:",
    label_strumenti: "Werkzeuge:",
    label_processo:  "Arbeitsprozess",
    label_processo_p:"Der Prozess gliederte sich in fünf Hauptphasen:",
    label_risultati: "Ergebnisse",
    label_scopri:    "Projekt entdecken!",
 
    ivegan_h1:    "iVegan",
    ivegan_h2:    "Neugestaltung der iVegan-Website",
    ivegan_ov_h:  "Überblick",
    ivegan_ov_p:  "Das iVegan-Projekt zielt darauf ab, das Einkaufserlebnis der größten italienischen Vegan-E-Commerce-Plattform zu verbessern. Die Arbeit umfasste die Neuorganisation der Informationsarchitektur, die Verbesserung der visuellen Klarheit und die Optimierung der Benutzerflüsse für ein zugänglicheres, intuitiveres und ansprechenderes Erlebnis.",
    ivegan_s1_h:  "1. Discovery",
    ivegan_s1_p:  "Analyse der Website, Wettbewerber, Nutzer und User Journeys zur Identifizierung von Verbesserungsbereichen.",
    ivegan_s2_h:  "2. Barrierefreiheit",
    ivegan_s2_p:  "Anwendung der WCAG-Prinzipien für ein inklusives und klares Erlebnis.",
    ivegan_s3_h:  "3. Wireframing",
    ivegan_s3_p:  "Erstellung von Hauptflüssen und Layouts zur Validierung der Struktur.",
    ivegan_s4_h:  "4. User Interface",
    ivegan_s4_p:  "Entwicklung des Design-Systems und der finalen, konsistenten und angenehm nutzbaren Oberflächen.",
    ivegan_s5_h:  "5. User Test",
    ivegan_s5_p:  "Tests mit echten Nutzern und Iteration der vorgeschlagenen Lösungen.",
    ivegan_r1:    "Flüssigeres Einkaufserlebnis",
    ivegan_r2:    "Mehr Klarheit und Barrierefreiheit",
    ivegan_r3:    "Weniger Reibungspunkte im Fluss",
    ivegan_r4:    "Konsistente und skalierbare Benutzeroberfläche",
 
    auto_h1:   "Autoservizi Andreolli",
    auto_h2:   "Website für ein Familienunternehmen im Transportbereich",
    auto_ov_h: "Überblick",
    auto_ov_p: "Das Projekt brachte Autoservizi Andreolli mit einer vollständigen digitalen Präsenz online. Ausgehend von einer Situation, in der das Unternehmen nur eine Telefonnummer hatte, habe ich eine responsive Mobile-First-Website mit einem mehrsprachigen System (IT/EN/DE) und einer auf 5 Seiten strukturierten Informationsarchitektur entworfen und entwickelt. Die Website umfasst ein kohärentes Design-System, ein funktionierendes Kontaktformular und das Storytelling der Familiengeschichte des Unternehmens über drei Generationen.",
    auto_s1_h: "1. Discovery",
    auto_s1_p: "Analyse der Unternehmensziele, Definition der Informationsarchitektur und Studie des bestehenden Logos zur Orientierung der Designentscheidungen.",
    auto_s2_h: "2. Wireframing",
    auto_s2_p: "Mobile-First-Design mit einem 4-Spalten-Raster, Definition der Benutzerflüsse und Strukturierung der 5 Hauptseiten.",
    auto_s3_h: "3. User Interface",
    auto_s3_p: "Entwicklung des Design-Systems (Farbpalette, Quicksand-Typografie, Komponenten), responsives UI-Design und Erstellung kohärenter, zugänglicher Oberflächen.",
    auto_s4_h: "4. Entwicklung & Launch",
    auto_s4_p: "Frontend-Entwicklung mit HTML, CSS und JavaScript, Implementierung des Mehrsprachensystems, Formularvalidierung und Online-Veröffentlichung über GitHub Pages.",
    auto_r1:   "Vollständige digitale Präsenz von Grund auf",
    auto_r2:   "Mehrkanal-System zur Kundengewinnung",
    auto_r3:   "International zugängliche responsive Mobile-First-Site",
    auto_r4:   "Effektives Storytelling der Familiengeschichte des Unternehmens",
 
    rif_h1:   "Rifugio Altissimo",
    rif_h2:   "Neugestaltung der Website Rifugio Altissimo",
    rif_ov_h: "Überblick",
    rif_ov_p: 'Das Rifugio Altissimo „Damiano Chiesa" befindet sich auf dem höchsten Gipfel des Monte Baldo in Brentonico (TN) mit einzigartigem Blick auf den Gardasee. Die bestehende Wix-Website spiegelte nicht die Qualität des realen Erlebnisses wider: unübersichtliche Navigation, fragmentierte Informationsarchitektur, keine Mobile-Optimierung und ein versteckter, unübersichtlicher Buchungsfluss. Ziel des Redesigns war es, die Website von einer reinen Informationsplattform zu einem klaren, kohärenten, nutzerorientierten Werkzeug zu transformieren.',
    rif_s1_h: "1. Branding & Grafik",
    rif_s1_p: 'Vollständige Neugestaltung der visuellen Identität: neues Logo mit dem „A" von Altissimo in der Bergform, Payoff „Zwischen Himmel und See", Farbpalette inspiriert von den Materialien und der Landschaft des Refugiums, modulare Typografieskala auf zwei Familien (Bricolage Grotesque + Source Serif 4), linearer Ikonensatz.',
    rif_s2_h: "2. Discovery",
    rif_s2_p: "Heuristische Analyse der bestehenden Website nach Nielsens 10 Heuristiken, vergleichende Analyse von 5 Konkurrenz-Refugien in Trentino-Südtirol, Zieldefinition mit Branchendaten 2024, Umfrage mit 15 echten Nutzern, 3 User Personas, Ist- und Soll-User-Journeys für jede Persona.",
    rif_s3_h: "3. Wireframing",
    rif_s3_p: "Mobile-First-Design mit 12-Spalten-Desktop-Raster (1280px) und 4-Spalten-Mobil-Raster (393px). High-Fidelity-Wireframes für alle Seiten: Homepage, Küche, Übernachten im Refugium, Outdoor, Shop. Navigation neu konzipiert mit Seitenleiste auf Desktop und Sticky-Header auf Mobilgeräten.",
    rif_s4_h: "4. User Interface",
    rif_s4_p: "Vollständiges Design-System mit Komponenten, Zuständen (hover/focus/disabled), saisonalem Sommer/Winter-Toggle, Dual-Mode-Slider-Animationen. UI für Desktop und Mobilgeräte auf allen Seiten, mit interaktivem Figma-Prototyp.",
    rif_s5_h: "5. User Test",
    rif_s5_p: "Ferngesteuerter, unmoderierter Usability-Test auf Maze mit 8 Teilnehmern der echten Zielgruppe. 4 getestete Aufgaben: Abendessen buchen, Zimmer buchen, Wanderweg suchen, Shop-Kauf. SUS-Score 74/100 (Gut-Bereich), 83% durchschnittliche Task-Erfolgsrate, 100% Abschlussrate beim Zimmerbuchungsfluss.",
    rif_r1:   "Informationssuchzeit um 58% gegenüber der aktuellen Website reduziert",
    rif_r2:   "100% Erfolgsrate beim Zimmerbuchungsfluss",
    rif_r3:   "SUS-Score 74/100, über dem Mindestschwellenwert von 70",
    rif_r4:   "Durchschnittliche Post-Task-Zufriedenheit: 4,1/5",
    rif_r5:   "Informationsarchitektur von 3 Navigationsebenen auf flache Struktur vereinfacht",
 
    about_h1:       "Hallo, ich stelle mich vor!",
    about_info:     "Hier finden Sie weitere Informationen über mich!",
    about_cv:       "Meinen Lebenslauf",
    about_linkedin: "Mein LinkedIn besuchen",
    about_bio_h:    "Empathie, die Form annimmt",
    about_bio_p:    "Ich hatte schon immer eine große Neugier für Menschen und die Welt.<br>Genau diese Neugier hat mich in die Welt des UX/UI Designs geführt, nach einem Weg aus sehr unterschiedlichen und tiefgreifenden Erfahrungen.<br><br>Mit 17 Jahren lebte ich sechs Monate in Schweden und besuchte eine internationale englische Schule.<br>Mit 19 Jahren flog ich für ein Jahr nach Australien. Diese Erfahrung trainierte mich im praktischen Problemlösen: Ich arbeitete, reiste und passte mich völlig neuen Situationen an – allein auf der anderen Seite der Welt.<br>Nach dem Studium arbeitete ich für ein Luxus-Catering-Unternehmen in der Emilia-Romagna, wo ich verstanden habe, wie wichtig es ist, Bedürfnisse vorauszusehen, auf Details zu achten und unvergessliche Erlebnisse zu schaffen. Genau das versuche ich heute in der digitalen Welt zu tun.<br>Später arbeitete ich mit dem Hyundai-Team bei der Rallye-Weltmeisterschaft 2024 zusammen. Ich lernte, Druck zu bewältigen und komplexe Zusammenarbeiten zum Laufen zu bringen.<br><br>Nach diesen Erfahrungen entschied ich mich, mich neu zu erfinden und einer anderen Leidenschaft zu folgen.<br>UX/UI Design entpuppte sich als genau die Mischung, die ich suchte: Kreativität und Empathie mit Methode und strategischer Vision verbunden.<br><br>Also krempelte ich die Ärmel hoch und begann wieder zu lernen. Ein intensives Jahr, voller Herausforderungen aber auch großer Zufriedenheit.<br><br>Heute ist Design für mich nicht nur Ästhetik und Funktionalität – es ist die Art, wie ich alles in die Praxis umsetze, was ich über Menschen gelernt habe. Design ist nichts anderes als Empathie, die Form annimmt.",
 
    contact_h1:   "Kontakt",
    contact_sub:  "Um kreative und funktionale Lösungen für Ihre Bedürfnisse zu finden",
    contact_nome: "Vorname",
    contact_cogn: "Nachname",
    contact_email:"E-Mail",
    contact_msg:  "Nachricht",
    contact_send: "Senden",
  }
};

/* =====================================================
   MOTORE DI TRADUZIONE
===================================================== */

(function () {
  const STORAGE_KEY = "greta_lang";
  const DEFAULT = "it";

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT;
  }

  function applyLang(lang) {
    if (!TRANSLATIONS[lang]) return;

    localStorage.setItem(STORAGE_KEY, lang);
    const t = TRANSLATIONS[lang];

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.getAttribute("data-i18n-html");
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("lang-btn--active", btn.dataset.lang === lang);
    });

    document.documentElement.lang = lang;
  }

  function bindButtons() {
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => applyLang(btn.dataset.lang));
    });
  }

  function initTranslations() {
    bindButtons();
    applyLang(getLang());
  }

  if (window.__headerLoaded) {
    initTranslations();
  } else {
    document.addEventListener("headerLoaded", initTranslations);
  }
})();
