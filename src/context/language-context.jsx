import { createContext, useContext, useState, useEffect } from 'react'

const translations = {
  en: {
    // Nav
    home: 'Home',
    device: 'Device',
    features: 'Features',
    howItWorks: 'How It Works',
    app: 'App',
    drHauspet: 'Dr. HausPet',
    earlyAccess: 'Early Access',
    tryAI: 'Try AI',
    getStarted: 'Get Started',
    
    // Hero
    heroMainTitle: 'Real-Time Pet Health Monitoring',
    heroSubtitle: 'One wearable device. Complete health visibility. Your vet gets real data between visits. Catch health problems before they become emergencies.',
    getFreeEarlyAccess: 'Get Free Early Access',
    bookFreeTesting: 'Book Free Testing',
    trustIndicators: '✓ Test with certified veterinarians • ✓ No commitment • ✓ Completely free',
    joinWaitlist: 'Join Waitlist',
    learnMore: 'Learn More',
    
    // Device Showcase
    smartCollar: 'HausPet Smart Collar',
    deviceDesc: 'Advanced health monitoring meets elegant design. Track vitals, activity, and wellness in real-time.',
    
    // CTA Section
    getEarlyAccess: 'Get Early Access',
    beAmongFirst: 'Be among the first to experience HausPet',
    joinThousands: 'Join thousands of pet owners keeping their dogs healthy with real-time monitoring',
    getEarlyAccessNow: 'Get Early Access Now →',
    stayUpdated: 'Stay Updated',
    subscribe: 'Subscribe',
    subscribing: 'Subscribing...',
    welcomeEmail: '✓ Welcome! Check your email for updates.',
    earlyUserText: 'Be the early user to test it with expert vets',
    keepUpdated: 'We\'ll keep you updated about launch and beta testing',
    
    // Bento Grid
    completeHealthEcosystem: 'The Complete Health Ecosystem',
    bentoSubtitle: 'One wearable creates a complete health monitoring system. Pet owner, real data, veterinarian, and early intervention work together for better health outcomes.',
    whyMonitoringMatters: 'Why Real-Time Monitoring Matters',
    monitoringDesc: 'Pet health issues don\'t announce themselves. They develop silently between vet visits. By the time you notice something is wrong, the problem has progressed significantly.',
    heartDiseaseStat: 'One in three dogs have undiagnosed heart disease. Without continuous monitoring, your vet only sees snapshots.',
    vetBlindStat: 'Your vet is brilliant. But they\'re working blind. They see your pet for 15 minutes once a year.',
    monitoring247: '24/7 Monitoring',
    monitoring247Desc: 'Your pet wears the collar like any normal collar. No discomfort. Just continuous, silent health monitoring while your pet lives their life.',
    aiPowered: 'AI-Powered Intelligence',
    aiPoweredDesc: '42,000 measurements create patterns. Patterns show problems before they become emergencies. This is how early detection works.',
    instantVetAccess: 'Instant Vet Access',
    instantVetAccessDesc: 'Your vet sees 365 days of health data instead of 15 minutes of observation. Evidence-based diagnosis.',
    smartAlerts: 'Smart Alerts',
    smartAlertsDesc: 'Never miss health changes',
    
    // How It Works
    howItWorksTitle: 'How It Works',
    monitor: 'Monitor',
    monitorDesc: 'Smart collar tracks vital signs 24/7',
    analyze: 'Analyze',
    analyzeDesc: 'AI detects health issues early',
    share: 'Share',
    shareDesc: 'Vet gets real-time access',
    
    // Early Access Section
    limitedAvailability: 'Limited Availability',
    getFreeEarlyAccessTitle: 'Get Free Early Access',
    earlyAccessSubtitle: 'Join our exclusive beta program and be among the first to experience the future of pet health monitoring. No cost, no commitment.',
    whyJoinEarly: 'Why Join Early?',
    exclusiveBenefits: 'Get exclusive benefits as an early adopter',
    feature1: '24/7 continuous monitoring of your dog\'s vital signs',
    feature2: 'Instant health alerts for abnormalities',
    feature3: 'AI-powered health summaries in natural language',
    feature4: 'One-tap emergency vet booking',
    feature5: 'Complete medical records and health history',
    feature6: 'Peace of mind knowing your dog\'s health is always being monitored',
    requestFreeAccess: 'Request Free Access',
    limitedUsers: 'Limited to 500 users globally • Completely free for early adopters',
    whatYouGet: 'WHAT YOU GET',
    smartCollarSensors: 'Smart collar with clinical-grade sensors',
    smartCollarSensorsDesc: 'Heart rate, temperature, and motion tracking',
    iosAndroidApp: 'iOS & Android app with lifetime updates',
    iosAndroidAppDesc: 'Real-time dashboards, AI assistant, medical records',
    drHauspetAI: 'Dr. HausPet AI Assistant',
    drHauspetAIDesc: '24/7 health insights powered by advanced AI',
    priorityVetAccess: 'Priority access to vet network',
    priorityVetAccessDesc: 'Direct integration with validated veterinary clinics',
    secureCloud: 'Secure cloud storage for medical records',
    secureCloudDesc: 'HIPAA-compliant, military-grade encryption',
    earlyAdopterBenefits: 'Early adopter benefits',
    earlyAdopterBenefitsDesc: 'Exclusive features and lifetime discounts',
    
    // Footer
    footerDesc: 'Real-time pet health monitoring. Peace of mind for pet owners.',
    product: 'Product',
    pricing: 'Pricing',
    faq: 'FAQ',
    company: 'Company',
    about: 'About',
    blog: 'Blog',
    careers: 'Careers',
    press: 'Press',
    legal: 'Legal',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    hipaaCompliance: 'HIPAA Compliance',
    contact: 'Contact',
    footerTagline: 'Keeping pets healthy, one heartbeat at a time.',
    allRightsReserved: '© 2024 HausPet. All rights reserved.',
    emailUs: 'Email us',
    
    // Chat Section
    aiVetAssistant: '24/7 AI Veterinary Assistant',
    aiVetAssistantDesc: 'Get instant answers to your pet health questions, powered by advanced AI',
    aiHealthMonitoring: 'AI Health Monitoring',
    realTimeInsights: 'Real-time health insights from your pet\'s data.',
    drHauspetAnalyzes: 'Dr. HausPet analyzes vital signs continuously and alerts you to any concerns before they become emergencies.',
    connectedTo: 'Connected to',
    naturalConversations: 'Natural Conversations',
    aiUnderstandsContext: 'AI that understands your pet\'s health context.',
    petOwner: 'Pet Owner',
    tryItYourself: 'Try it yourself',
    askDrHauspet: 'Ask Dr. HausPet anything about pet health',
    online: 'Online',
    askAboutHealth: 'Ask about your pet\'s health...',
    chatGreeting: 'Hello! I\'m Dr. HausPet. How can I help with your pet\'s health today? 🐾',
    
    // App Screenshots
    appFeatures: 'App Features',
    seeInAction: 'See HausPet in Action',
    intuitiveApps: 'Intuitive apps for pet owners and clinical-grade tools for veterinarians',
    moreFeatures: 'More Features',
    additionalCapabilities: 'Additional capabilities',
    
    // Stats Section
    realHealthImpact: 'Clinical Validation',
    statsSubtitle: 'Built and tested with real veterinary professionals.',
    clinicPartner: 'Clinic Partner',
    clinicPartnerDesc: 'Active clinical partnership with Kleintierpraxis Jan Schneider.',
    petsAccess: 'Pets in Testing',
    petsAccessDesc: 'Access to real patients for validation and testing.',
    vetTested: 'Vet Tested',
    vetTestedDesc: 'Developed and validated with veterinary professionals.',
    continuousMonitoring: 'Continuous Monitoring',
    continuousMonitoringDesc: 'Never miss important health changes again.',
    
    // Trusted by Vets Section
    clinicallyValidated: 'Clinically Validated',
    trustedByVets: 'Trusted & Proven by Veterinary Experts',
    trustedByVetsDesc: 'Real clinical validation from the professionals who treat pets every day.',
    officialPartner: 'Official Clinical Partner',
    clinicalPartnership: 'Clinical Partnership',
    partnershipDesc: 'HausPet has been officially endorsed through a clinical partnership with Kleintierpraxis Jan Schneider, one of Europe\'s most respected veterinary practices. Dr. Jan Schneider is actively testing and validating HausPet\'s accuracy in monitoring vital parameters.',
    vetExperience: '20+ years clinical experience',
    realWorldTesting: 'Real-World Testing',
    realWorldTestingDesc: 'Testing with actual patients ensures every feature delivers genuine diagnostic value.',
    validatedAccuracy: 'Validated Accuracy',
    validatedAccuracyDesc: 'Heart rate, temperature, and activity monitoring validated by clinical experts.',
    expandingNetwork: 'Expanding Network',
    expandingNetworkDesc: '500+ European veterinarians joining the partnership program.',
    yearsExperience: 'Years Clinical Experience',
    vetsJoining: 'Vets Joining Network',
    clinicalGrade: 'Clinical Grade',
    
    // Early Access Form
    yourName: 'Your name (optional)',
    yourEmail: 'Your email address',
    submitting: 'Submitting...',
    successMessage: 'Welcome! You\'re on the early access list.',
    alreadySubscribed: 'This email is already registered.',
    errorMessage: 'Something went wrong. Please try again.',
    
    // Waitlist Modal
    joinWaitlistTitle: 'Join the Waitlist',
    joinWaitlistDesc: 'Be among the first to experience HausPet. Get early access and exclusive benefits.',
    joinWaitlist: 'Join Waitlist',
    welcomeAboard: 'Welcome aboard!',
    checkEmail: 'Check your email for confirmation.',
    noSpam: 'No spam, ever. Unsubscribe anytime.',
  },
  de: {
    // Nav
    home: 'Startseite',
    device: 'Gerät',
    features: 'Funktionen',
    howItWorks: 'So funktioniert\'s',
    app: 'App',
    drHauspet: 'Dr. HausPet',
    earlyAccess: 'Früher Zugang',
    tryAI: 'KI testen',
    getStarted: 'Loslegen',
    
    // Hero
    heroMainTitle: 'Echtzeit-Gesundheitsüberwachung für Haustiere',
    heroSubtitle: 'Ein tragbares Gerät. Vollständige Gesundheitsübersicht. Ihr Tierarzt erhält echte Daten zwischen den Besuchen. Erkennen Sie Gesundheitsprobleme, bevor sie zu Notfällen werden.',
    getFreeEarlyAccess: 'Kostenlosen Frühen Zugang',
    bookFreeTesting: 'Kostenloses Testen buchen',
    trustIndicators: '✓ Test mit zertifizierten Tierärzten • ✓ Keine Verpflichtung • ✓ Völlig kostenlos',
    joinWaitlist: 'Warteliste beitreten',
    learnMore: 'Mehr erfahren',
    
    // Device Showcase
    smartCollar: 'HausPet Smart-Halsband',
    deviceDesc: 'Fortschrittliche Gesundheitsüberwachung trifft elegantes Design. Verfolgen Sie Vitalwerte, Aktivität und Wohlbefinden in Echtzeit.',
    
    // CTA Section
    getEarlyAccess: 'Frühen Zugang erhalten',
    beAmongFirst: 'Gehören Sie zu den Ersten, die HausPet erleben',
    joinThousands: 'Schließen Sie sich Tausenden von Tierbesitzern an, die ihre Hunde mit Echtzeit-Überwachung gesund halten',
    getEarlyAccessNow: 'Jetzt frühen Zugang erhalten →',
    stayUpdated: 'Auf dem Laufenden bleiben',
    subscribe: 'Abonnieren',
    subscribing: 'Wird abonniert...',
    welcomeEmail: '✓ Willkommen! Überprüfen Sie Ihre E-Mail für Updates.',
    earlyUserText: 'Seien Sie einer der ersten Tester mit Experten-Tierärzten',
    keepUpdated: 'Wir halten Sie über den Start und Beta-Tests auf dem Laufenden',
    
    // Bento Grid
    completeHealthEcosystem: 'Das komplette Gesundheits-Ökosystem',
    bentoSubtitle: 'Ein Wearable schafft ein komplettes Gesundheitsüberwachungssystem. Tierbesitzer, echte Daten, Tierarzt und Früherkennung arbeiten zusammen für bessere Gesundheitsergebnisse.',
    whyMonitoringMatters: 'Warum Echtzeit-Überwachung wichtig ist',
    monitoringDesc: 'Gesundheitsprobleme bei Haustieren kündigen sich nicht an. Sie entwickeln sich still zwischen Tierarztbesuchen. Wenn Sie etwas bemerken, ist das Problem bereits fortgeschritten.',
    heartDiseaseStat: 'Jeder dritte Hund hat eine unerkannte Herzerkrankung. Ohne kontinuierliche Überwachung sieht Ihr Tierarzt nur Momentaufnahmen.',
    vetBlindStat: 'Ihr Tierarzt ist brillant. Aber er arbeitet blind. Er sieht Ihr Haustier 15 Minuten einmal im Jahr.',
    monitoring247: '24/7 Überwachung',
    monitoring247Desc: 'Ihr Haustier trägt das Halsband wie jedes normale Halsband. Kein Unbehagen. Nur kontinuierliche, stille Gesundheitsüberwachung.',
    aiPowered: 'KI-gestützte Intelligenz',
    aiPoweredDesc: '42.000 Messungen erzeugen Muster. Muster zeigen Probleme, bevor sie zu Notfällen werden. So funktioniert Früherkennung.',
    instantVetAccess: 'Sofortiger Tierarzt-Zugang',
    instantVetAccessDesc: 'Ihr Tierarzt sieht 365 Tage Gesundheitsdaten statt 15 Minuten Beobachtung. Evidenzbasierte Diagnose.',
    smartAlerts: 'Intelligente Warnungen',
    smartAlertsDesc: 'Verpassen Sie keine Gesundheitsänderungen',
    
    // How It Works
    howItWorksTitle: 'So funktioniert es',
    monitor: 'Überwachen',
    monitorDesc: 'Smart-Halsband erfasst Vitalzeichen 24/7',
    analyze: 'Analysieren',
    analyzeDesc: 'KI erkennt Gesundheitsprobleme früh',
    share: 'Teilen',
    shareDesc: 'Tierarzt erhält Echtzeit-Zugang',
    
    // Early Access Section
    limitedAvailability: 'Begrenzte Verfügbarkeit',
    getFreeEarlyAccessTitle: 'Kostenlosen frühen Zugang erhalten',
    earlyAccessSubtitle: 'Treten Sie unserem exklusiven Beta-Programm bei und gehören Sie zu den Ersten, die die Zukunft der Tiergesundheitsüberwachung erleben. Kostenlos, ohne Verpflichtung.',
    whyJoinEarly: 'Warum früh beitreten?',
    exclusiveBenefits: 'Erhalten Sie exklusive Vorteile als Early Adopter',
    feature1: '24/7 kontinuierliche Überwachung der Vitalzeichen Ihres Hundes',
    feature2: 'Sofortige Gesundheitswarnungen bei Auffälligkeiten',
    feature3: 'KI-gestützte Gesundheitszusammenfassungen in natürlicher Sprache',
    feature4: 'Notfall-Tierarztbuchung mit einem Klick',
    feature5: 'Vollständige Krankenakten und Gesundheitshistorie',
    feature6: 'Seelenfrieden, dass die Gesundheit Ihres Hundes immer überwacht wird',
    requestFreeAccess: 'Kostenlosen Zugang anfordern',
    limitedUsers: 'Begrenzt auf 500 Nutzer weltweit • Völlig kostenlos für Early Adopter',
    whatYouGet: 'WAS SIE BEKOMMEN',
    smartCollarSensors: 'Smart-Halsband mit klinischen Sensoren',
    smartCollarSensorsDesc: 'Herzfrequenz, Temperatur und Bewegungsverfolgung',
    iosAndroidApp: 'iOS & Android App mit lebenslangen Updates',
    iosAndroidAppDesc: 'Echtzeit-Dashboards, KI-Assistent, Krankenakten',
    drHauspetAI: 'Dr. HausPet KI-Assistent',
    drHauspetAIDesc: '24/7 Gesundheitseinblicke durch fortschrittliche KI',
    priorityVetAccess: 'Prioritärer Zugang zum Tierarzt-Netzwerk',
    priorityVetAccessDesc: 'Direkte Integration mit validierten Tierkliniken',
    secureCloud: 'Sichere Cloud-Speicherung für Krankenakten',
    secureCloudDesc: 'HIPAA-konform, militärische Verschlüsselung',
    earlyAdopterBenefits: 'Early-Adopter-Vorteile',
    earlyAdopterBenefitsDesc: 'Exklusive Funktionen und lebenslange Rabatte',
    
    // Footer
    footerDesc: 'Echtzeit-Gesundheitsüberwachung für Haustiere. Seelenfrieden für Tierbesitzer.',
    product: 'Produkt',
    pricing: 'Preise',
    faq: 'FAQ',
    company: 'Unternehmen',
    about: 'Über uns',
    blog: 'Blog',
    careers: 'Karriere',
    press: 'Presse',
    legal: 'Rechtliches',
    privacyPolicy: 'Datenschutz',
    termsOfService: 'Nutzungsbedingungen',
    hipaaCompliance: 'HIPAA-Konformität',
    contact: 'Kontakt',
    footerTagline: 'Haustiere gesund halten, ein Herzschlag nach dem anderen.',
    allRightsReserved: '© 2024 HausPet. Alle Rechte vorbehalten.',
    emailUs: 'E-Mail senden',
    
    // Chat Section
    aiVetAssistant: '24/7 KI-Tierarzt-Assistent',
    aiVetAssistantDesc: 'Erhalten Sie sofortige Antworten auf Ihre Fragen zur Tiergesundheit, unterstützt durch fortschrittliche KI',
    aiHealthMonitoring: 'KI-Gesundheitsüberwachung',
    realTimeInsights: 'Echtzeit-Gesundheitseinblicke aus den Daten Ihres Haustieres.',
    drHauspetAnalyzes: 'Dr. HausPet analysiert kontinuierlich Vitalzeichen und warnt Sie vor Bedenken, bevor sie zu Notfällen werden.',
    connectedTo: 'Verbunden mit',
    naturalConversations: 'Natürliche Gespräche',
    aiUnderstandsContext: 'KI, die den Gesundheitskontext Ihres Haustieres versteht.',
    petOwner: 'Tierbesitzer',
    tryItYourself: 'Probieren Sie es selbst',
    askDrHauspet: 'Fragen Sie Dr. HausPet alles über Tiergesundheit',
    online: 'Online',
    askAboutHealth: 'Fragen Sie zur Gesundheit Ihres Haustieres...',
    chatGreeting: 'Hallo! Ich bin Dr. HausPet. Wie kann ich Ihnen heute bei der Gesundheit Ihres Haustieres helfen? 🐾',
    
    // App Screenshots
    appFeatures: 'App-Funktionen',
    seeInAction: 'HausPet in Aktion sehen',
    intuitiveApps: 'Intuitive Apps für Tierbesitzer und klinische Tools für Tierärzte',
    moreFeatures: 'Weitere Funktionen',
    additionalCapabilities: 'Zusätzliche Möglichkeiten',
    
    // Stats Section
    realHealthImpact: 'Klinische Validierung',
    statsSubtitle: 'Entwickelt und getestet mit echten Tierarzt-Profis.',
    clinicPartner: 'Klinikpartner',
    clinicPartnerDesc: 'Aktive klinische Partnerschaft mit Kleintierpraxis Jan Schneider.',
    petsAccess: 'Haustiere im Test',
    petsAccessDesc: 'Zugang zu echten Patienten für Validierung und Tests.',
    vetTested: 'Tierarzt-Getestet',
    vetTestedDesc: 'Entwickelt und validiert mit Tierarzt-Profis.',
    continuousMonitoring: 'Kontinuierliche Überwachung',
    continuousMonitoringDesc: 'Verpassen Sie nie wieder wichtige Gesundheitsänderungen.',
    
    // Trusted by Vets Section
    clinicallyValidated: 'Klinisch Validiert',
    trustedByVets: 'Vertraut & Bewährt von Tierarzt-Experten',
    trustedByVetsDesc: 'Echte klinische Validierung von den Fachleuten, die täglich Haustiere behandeln.',
    officialPartner: 'Offizieller Klinischer Partner',
    clinicalPartnership: 'Klinische Partnerschaft',
    partnershipDesc: 'HausPet wurde durch eine klinische Partnerschaft mit der Kleintierpraxis Jan Schneider, einer der angesehensten Tierarztpraxen Europas, offiziell bestätigt. Dr. Jan Schneider testet und validiert aktiv die Genauigkeit von HausPet bei der Überwachung von Vitalparametern.',
    vetExperience: '20+ Jahre klinische Erfahrung',
    realWorldTesting: 'Praxistests',
    realWorldTestingDesc: 'Tests mit echten Patienten stellen sicher, dass jede Funktion echten diagnostischen Wert liefert.',
    validatedAccuracy: 'Validierte Genauigkeit',
    validatedAccuracyDesc: 'Herzfrequenz, Temperatur und Aktivitätsüberwachung von klinischen Experten validiert.',
    expandingNetwork: 'Wachsendes Netzwerk',
    expandingNetworkDesc: '500+ europäische Tierärzte treten dem Partnerprogramm bei.',
    yearsExperience: 'Jahre Klinische Erfahrung',
    vetsJoining: 'Tierärzte im Netzwerk',
    clinicalGrade: 'Klinische Qualität',
    
    // Early Access Form
    yourName: 'Ihr Name (optional)',
    yourEmail: 'Ihre E-Mail-Adresse',
    submitting: 'Wird gesendet...',
    successMessage: 'Willkommen! Sie sind auf der Early-Access-Liste.',
    alreadySubscribed: 'Diese E-Mail ist bereits registriert.',
    errorMessage: 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.',
    
    // Waitlist Modal
    joinWaitlistTitle: 'Warteliste beitreten',
    joinWaitlistDesc: 'Gehören Sie zu den Ersten, die HausPet erleben. Erhalten Sie frühen Zugang und exklusive Vorteile.',
    joinWaitlist: 'Warteliste beitreten',
    welcomeAboard: 'Willkommen an Bord!',
    checkEmail: 'Überprüfen Sie Ihre E-Mail zur Bestätigung.',
    noSpam: 'Kein Spam, niemals. Jederzeit abmelden.',
  }
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('hauspet-lang') || 'en'
    }
    return 'en'
  })

  useEffect(() => {
    localStorage.setItem('hauspet-lang', language)
  }, [language])

  const t = (key) => translations[language][key] || key

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'de' : 'en')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
