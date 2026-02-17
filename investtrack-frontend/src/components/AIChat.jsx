import { useState, useRef, useEffect } from 'react';
import './AIChat.css';  

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your InvestTrack AI assistant. Ask me about any stock or market term.", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
          "X-Title": "InvestTrack",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo", 
          messages: [
            {
              role: "system",
              content: "You are a helpful financial assistant for InvestTrack, a stock market app. Answer concisely about stocks, investing, and app features."
            },
            { role: "user", content: input }
          ],
        }),
      });

      const data = await response.json();
      const botMessage = data.choices?.[0]?.message?.content || "Sorry, I couldn't process that.";
      setMessages(prev => [...prev, { text: botMessage, sender: 'ai' }]);
    } catch (error) {
      console.error("AI chat error:", error);
      setMessages(prev => [...prev, { text: "Oops! Something went wrong. Please try again later.", sender: 'ai' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-chat-container">
      {!isOpen && (
        <button className="ai-chat-button" onClick={() => setIsOpen(true)}>
          💬
        </button>
      )}

      {isOpen && (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <span>InvestTrack AI</span>
            <button className="ai-chat-close" onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="ai-chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender === 'user' ? 'user-message' : 'ai-message'}`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="message ai-message">...</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="ai-chat-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about stocks..."
              disabled={loading}
            />
            <button onClick={handleSend} disabled={loading}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}