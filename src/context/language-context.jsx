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
