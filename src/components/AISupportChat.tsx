import { useState, useRef, useEffect } from "react";
import { Search, Brain, Send, User, Bot, Sparkles, TrendingUp, CreditCard, HelpCircle } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface AISupportChatProps {
  isExpanded?: boolean;
  onToggle?: () => void;
}

export function AISupportChat({ isExpanded = false, onToggle }: AISupportChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi Jim! I'm your AI assistant. I can help you with your account, winnings, game recommendations, transactions, and any betting questions you have. What would you like to know?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const mockResponses = {
    balance: "Your current account balance is $342.50. You have $25.00 in pending bets and $50.00 in bonus funds available.",
    winnings: "Great question! In the last 30 days, you've won $156.30 across 12 successful bets. Your biggest win was $45.20 on the Lakers game last Tuesday!",
    games: "Based on your betting history, I recommend checking out today's Premier League matches - Manchester United vs Arsenal has great odds! You also seem to enjoy NBA games, and there's Lakers vs Warriors tonight.",
    transactions: "I can help with any transaction issues. Your last deposit of $100 was processed successfully yesterday. Is there a specific transaction you need help with?",
    account: "Your account is in good standing, Jim! You've been a member since March 2023, completed verification, and have no restrictions. Anything specific about your account you'd like to know?",
    default: "I understand you're asking about that. Let me help you with more specific information. Could you tell me more about what exactly you'd like to know?"
  };

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('balance') || lowerMessage.includes('money') || lowerMessage.includes('funds')) {
      return mockResponses.balance;
    } else if (lowerMessage.includes('winning') || lowerMessage.includes('won') || lowerMessage.includes('profit')) {
      return mockResponses.winnings;
    } else if (lowerMessage.includes('play') || lowerMessage.includes('game') || lowerMessage.includes('bet') || lowerMessage.includes('match')) {
      return mockResponses.games;
    } else if (lowerMessage.includes('transaction') || lowerMessage.includes('deposit') || lowerMessage.includes('withdraw') || lowerMessage.includes('payment')) {
      return mockResponses.transactions;
    } else if (lowerMessage.includes('account') || lowerMessage.includes('profile') || lowerMessage.includes('verification')) {
      return mockResponses.account;
    } else {
      return mockResponses.default;
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputValue),
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (action: string) => {
    setInputValue(action);
    setTimeout(() => handleSend(), 100);
  };

  const quickActions = [
    { text: "Check my balance", icon: <CreditCard className="h-3 w-3" /> },
    { text: "Recent winnings", icon: <TrendingUp className="h-3 w-3" /> },
    { text: "What can I play?", icon: <Sparkles className="h-3 w-3" /> },
    { text: "Transaction help", icon: <HelpCircle className="h-3 w-3" /> }
  ];

  if (!isExpanded) {
    return (
      <div className="relative">
        <div 
          className="flex items-center bg-gray-100 rounded-2xl px-4 py-3 border border-gray-200 hover:border-gray-300 transition-colors cursor-text"
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
            onToggle?.();
          }}
        >
          <Search className="h-5 w-5 text-gray-500 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask me about your account, winnings, games, or any issues..."
            className="flex-1 bg-transparent text-gray-700 placeholder-gray-500 outline-none text-sm"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            onFocus={() => onToggle?.()}
          />
          <div className="flex items-center gap-2 ml-3">
            <div className="flex items-center gap-1 bg-white rounded-full px-2 py-1 border border-gray-200">
              <Brain className="h-3 w-3 text-[#9ce800]" />
              <span className="text-xs text-gray-600 font-medium">AI</span>
            </div>
          </div>
        </div>
        
        {/* Quick Suggestions */}
        <div className="mt-3 flex flex-wrap gap-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleQuickAction(action.text)}
              className="bg-gray-50 hover:bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs border border-gray-200 transition-colors flex items-center gap-1"
            >
              {action.icon}
              {action.text}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-[#9ce800] rounded-lg">
            <Brain className="h-5 w-5 text-black" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">AI Support</h3>
            <p className="text-xs text-gray-500">Always here to help</p>
          </div>
        </div>
        <button 
          onClick={onToggle}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          ×
        </button>
      </div>

      {/* Messages */}
      <div className="h-64 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              message.sender === 'user' 
                ? 'bg-[#9ce800]' 
                : 'bg-gray-100'
            }`}>
              {message.sender === 'user' ? (
                <User className="h-4 w-4 text-black" />
              ) : (
                <Bot className="h-4 w-4 text-gray-600" />
              )}
            </div>
            <div className={`max-w-[80%] p-3 rounded-2xl ${
              message.sender === 'user'
                ? 'bg-[#9ce800] text-black'
                : 'bg-gray-100 text-gray-900'
            }`}>
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <Bot className="h-4 w-4 text-gray-600" />
            </div>
            <div className="bg-gray-100 p-3 rounded-2xl">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
          <input
            type="text"
            placeholder="Type your question..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="p-1.5 bg-[#9ce800] rounded-lg text-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#8bd400] transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}