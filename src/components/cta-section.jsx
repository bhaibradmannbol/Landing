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
              text="Ready?"
              className="text-4xl md:text-5xl font-bold text-white"
              delay={100}
              duration={0.6}
              splitType="words"
            />
            <SplitText
              text="Join thousands of pet owners keeping their dogs healthy."
              className="text-xl text-white/90 max-w-2xl mx-auto"
              delay={80}
              duration={0.6}
              splitType="words"
            />
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="text-lg font-semibold bg-white text-black hover:bg-white/90"
                onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Early Access Now →
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg font-semibold border-white/30 text-white hover:bg-white/10"
                onClick={() => document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="mr-2">💬</span> Talk to Dr. HausPet
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
