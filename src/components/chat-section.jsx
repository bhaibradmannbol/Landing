import { useState, useRef, useEffect } from 'react'
import { Send, MessageCircle, Sparkles, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GEMINI_API_KEY, GEMINI_API_URL, SYSTEM_PROMPTS } from '@/config/gemini'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/language-context'

export default function ChatSection() {
  const { t } = useLanguage()
  const [messages, setMessages] = useState([
    { type: 'bot', text: t('chatGreeting') }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [apiStatus, setApiStatus] = useState('ready');
  const conversationHistoryRef = useRef([]);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (messages.length > 1) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (!inputValue.trim()) return;

    const userMessage = { type: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    try {
      const conversationContext = conversationHistoryRef.current.length > 0
        ? `\n\nPrevious conversation:\n${conversationHistoryRef.current.map(msg => `${msg.role}: ${msg.text}`).join('\n')}\n\n`
        : '';
      
      const fullPrompt = `${SYSTEM_PROMPTS['pet-owner']}

${conversationContext}Current question: ${currentInput}

Provide a clear, professional veterinary response:`;
      
      const response = await fetch(
        `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: fullPrompt }] }],
            generationConfig: {
              temperature: 0.9,
              topP: 0.95,
              topK: 64,
              maxOutputTokens: 300,
            },
            safetySettings: [
              { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
              { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
              { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
              { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
            ]
          }),
        }
      );

      const data = await response.json();
      
      if (data.error) {
        setApiStatus('error');
        throw new Error(data.error.message || 'API Error');
      }
      
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        const botResponse = data.candidates[0].content.parts[0].text;
        setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
        setApiStatus('success');
        
        conversationHistoryRef.current = [
          ...conversationHistoryRef.current,
          { role: 'Pet Owner', text: currentInput },
          { role: 'Dr. HausPet', text: botResponse }
        ].slice(-8);
        
        setTimeout(() => setApiStatus('ready'), 2000);
      } else {
        throw new Error('Invalid response from API');
      }
    } catch (error) {
      console.error('Gemini API Error:', error);
      setApiStatus('error');
      
      let fallbackResponse = "I'm having trouble connecting right now. For immediate concerns, please consult your veterinarian. 🩺";
      
      const lowerInput = currentInput.toLowerCase();
      if (lowerInput.includes('heart') || lowerInput.includes('cardiac')) {
        fallbackResponse = "HausPet monitors heart rate continuously (normal range: 60-200 bpm for dogs). Our AI alerts you to concerning patterns. 🫀";
      } else if (lowerInput.includes('temperature') || lowerInput.includes('fever')) {
        fallbackResponse = "Normal dog temperature is 38-39°C (100.5-102.5°F). Fever above 39.5°C requires immediate vet care. 🌡️";
      } else if (lowerInput.includes('activity') || lowerInput.includes('exercise')) {
        fallbackResponse = "HausPet tracks activity patterns 24/7. Sudden decreases can indicate pain or illness. 🏃";
      }

      setMessages(prev => [...prev, { type: 'bot', text: fallbackResponse }]);
      setTimeout(() => setApiStatus('ready'), 3000);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      handleSendMessage();
      return false;
    }
  };

  // Demo conversation for preview
  const demoConversation = [
    { type: 'user', text: "My dog hasn't been eating well for 2 days" },
    { type: 'bot', text: "I can see from your HausPet data that Max's activity has dropped 40% and temperature is slightly elevated at 39.2°C. I recommend scheduling a vet visit today.", highlight: true },
    { type: 'user', text: "Can you book an appointment?" },
    { type: 'bot', text: "Done! Appointment confirmed with Dr. Smith at PetCare Clinic for today at 3 PM. I've shared Max's health data with the clinic.", highlight: true },
  ];

  return (
    <section id="chat-section" className="py-24 px-6 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/images/2source.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {t('aiVetAssistant')}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {t('aiVetAssistantDesc')}
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Card - AI Integration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-black/40 border border-white/10"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <div className="flex items-center gap-2 text-gray-300 mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">{t('aiHealthMonitoring')}</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t('realTimeInsights')}
            </h3>
            
            <p className="text-white/60 mb-8">
              {t('drHauspetAnalyzes')}
            </p>

            {/* Connection Status */}
            <div className="relative">
              <div className="absolute inset-0 opacity-5">
                {/* Background pattern */}
                <div className="w-full h-full" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>
              
              <div className="relative flex items-center justify-center py-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-white">{t('connectedTo')} <span className="font-bold">HausPet</span></span>
                </div>
              </div>

              {/* Integration logos */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-lg">🩺</div>
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-lg">❤️</div>
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-lg">🌡️</div>
                <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center">
                  <span className="text-black text-xl">🐾</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card - Natural Conversations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-black/40 border border-white/10"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <div className="flex items-center gap-2 text-gray-300 mb-6">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">{t('naturalConversations')}</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {t('aiUnderstandsContext')}
            </h3>

            {/* Demo Chat */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/50 text-xs mb-2">
                <div className="w-4 h-4 rounded-full bg-white/20" />
                <span>{t('petOwner')}</span>
              </div>
              
              {demoConversation.map((msg, i) => (
                <div key={i}>
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm ${
                      msg.type === 'user'
                        ? 'bg-white/10 border border-white/10 text-white'
                        : msg.highlight
                          ? 'bg-gray-300 text-black'
                          : 'bg-white/5 text-white/80'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Live Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{t('tryItYourself')}</h3>
              <p className="text-white/60">{t('askDrHauspet')}</p>
            </div>

            <div 
              className="rounded-3xl overflow-hidden border border-white/10 bg-black/40"
              style={{
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              {/* Chat Header */}
              <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-lg">
                    🩺
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Dr. HausPet</h4>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 bg-gray-400 rounded-full" />
                      <span className="text-xs text-white/50">{t('online')}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/40">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs">24/7</span>
                </div>
              </div>

              {/* Messages */}
              <div 
                ref={chatContainerRef} 
                className="h-[300px] overflow-y-auto p-6 space-y-4"
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
              >
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                        message.type === 'user'
                          ? 'bg-gray-300 text-black'
                          : 'bg-white/10 text-white border border-white/10'
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl px-4 py-3">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/10">
                <div className="flex gap-3 items-center bg-white/5 rounded-2xl px-4 py-2 border border-white/10">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder={t('askAboutHealth')}
                    className="flex-1 bg-transparent text-white text-sm placeholder:text-white/30 focus:outline-none py-2"
                  />
                  <Button
                    onClick={(e) => handleSendMessage(e)}
                    disabled={!inputValue.trim()}
                    size="sm"
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-200 text-black rounded-xl disabled:opacity-30"
                    type="button"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
