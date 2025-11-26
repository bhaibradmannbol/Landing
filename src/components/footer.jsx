export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🐾</span>
              <span className="text-xl font-bold text-white">HausPet</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Real-time pet health monitoring. Peace of mind for pet owners.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3">Product</h4>
            <div className="flex flex-col gap-2">
              <a href="#features" className="text-white/60 hover:text-white text-sm transition-colors">Features</a>
              <a href="#how-it-works" className="text-white/60 hover:text-white text-sm transition-colors">How It Works</a>
              <a href="#pricing" className="text-white/60 hover:text-white text-sm transition-colors">Pricing</a>
              <a href="#faq" className="text-white/60 hover:text-white text-sm transition-colors">FAQ</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3">Company</h4>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-white/60 hover:text-white text-sm transition-colors">About</a>
              <a href="#blog" className="text-white/60 hover:text-white text-sm transition-colors">Blog</a>
              <a href="#careers" className="text-white/60 hover:text-white text-sm transition-colors">Careers</a>
              <a href="#press" className="text-white/60 hover:text-white text-sm transition-colors">Press</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3">Legal</h4>
            <div className="flex flex-col gap-2">
              <a href="#privacy" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#hipaa" className="text-white/60 hover:text-white text-sm transition-colors">HIPAA Compliance</a>
              <a href="mailto:hello@hauspet.app" className="text-white/60 hover:text-white text-sm transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-white/60 text-sm">
              © 2024 HausPet. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://twitter.com/hauspet" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">Twitter</a>
              <a href="https://linkedin.com/company/hauspet" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">LinkedIn</a>
              <a href="https://instagram.com/hauspet" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">Instagram</a>
              <a href="mailto:hello@hauspet.app" className="text-white/60 hover:text-white transition-colors text-sm">Email us</a>
            </div>
          </div>
          <p className="text-center text-sm text-white/60">
            Keeping pets healthy, one heartbeat at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
