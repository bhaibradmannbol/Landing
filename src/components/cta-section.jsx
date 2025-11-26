import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { useState } from 'react'
import SplitText from '@/components/ui/split-text'

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/early-access`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name: '',
          userType: 'pet-owner',
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="newsletter-section" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-zinc-700 to-zinc-900 overflow-hidden border border-white/10"
          style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          
          <div className="relative text-center space-y-6">
            <SplitText
              text="Get Early Access"
              className="text-4xl md:text-5xl font-bold text-white"
              delay={100}
              duration={0.6}
              splitType="words"
            />
            <p className="text-2xl md:text-3xl font-bold text-white max-w-2xl mx-auto">
              Be among the first to experience HausPet
            </p>
            <p className="text-lg text-white/70 max-w-xl mx-auto">
              Join thousands of pet owners keeping their dogs healthy with real-time monitoring
            </p>
            <div className="flex justify-center pt-4">
              <Button 
                size="lg" 
                className="text-lg font-semibold bg-white text-black hover:bg-white/90"
                onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Early Access Now →
              </Button>
            </div>
            
            {/* Newsletter */}
            <div className="pt-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full h-12 pl-10 pr-4 rounded-lg bg-black/40 text-white placeholder:text-white/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-white text-black hover:bg-white/90"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </div>
                {status === 'success' && (
                  <p className="text-sm text-green-400 font-medium">
                    ✓ Welcome! Check your email for updates.
                  </p>
                )}
                <p className="text-sm text-white/90 font-bold">
                  Be the early user to test it with expert vets
                </p>
                <p className="text-sm text-white/60">
                  We'll keep you updated about launch and beta testing
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
