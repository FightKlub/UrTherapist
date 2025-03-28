
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      toast.success('Message sent to AI assistant');
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-4"
          >
            <Card className="w-80 shadow-lg glass-card border-mental-200">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-medium">Mental Health Assistant</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 rounded-full hover:bg-mental-100"
                    onClick={toggleChat}
                  >
                    <X size={16} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="h-64 overflow-y-auto bg-white/50 rounded-md p-3 border border-mental-100 mb-2">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-mental-600 rounded-full h-8 w-8 flex items-center justify-center text-white">
                      <MessageSquare size={14} />
                    </div>
                    <div className="ml-3 bg-mental-100 py-2 px-3 rounded-lg rounded-tl-none">
                      <p className="text-sm">Hello! I'm your mental health assistant. How are you feeling today?</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <form onSubmit={handleSendMessage} className="w-full flex gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 h-9 rounded-full bg-white border-mental-200 focus-visible:ring-mental-500"
                  />
                  <Button 
                    type="submit" 
                    size="sm" 
                    className="h-9 w-9 p-0 rounded-full bg-mental-600 hover:bg-mental-700"
                  >
                    <MessageSquare size={14} className="text-white" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={toggleChat}
          className={`h-14 w-14 rounded-full shadow-lg ${isOpen ? 'bg-mental-700' : 'bg-mental-600'} hover:bg-mental-700 transition-all duration-300`}
        >
          <MessageSquare size={22} className="text-white" />
          <span className="sr-only">Chat with AI Assistant</span>
        </Button>
      </motion.div>
    </div>
  );
};

export default ChatbotButton;
