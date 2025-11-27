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
