import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MessageSquare, Mic, Camera, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useAuthValue } from '@/pages/AuthContext';

const ChatInterface = () => {
  const { currentUser } = useAuthValue();
  const userEmail = currentUser?.email || 'guest@demo.com';

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ sender: string, text: string }[]>([
    { sender: 'ai', text: "Hello! How are you feeling today? I'm here to help with your session." }
  ]);
  useEffect(() => {
    const handleAddChat = (e: any) => {
      setMessages((prev) => [...prev, e.detail]);
    };
  
    window.addEventListener('add-chat', handleAddChat);
    return () => window.removeEventListener('add-chat', handleAddChat);
  }, []);
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message;
    setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
    setMessage('');

    try {
      const res = await axios.post('http://localhost:8000/get_therapy_response/', {
        user_id: userEmail,
        emotion: userMessage
      });
      setMessages((prev) => [...prev, { sender: 'ai', text: res.data.reply }]);
    } catch (error) {
      toast.error('Failed to fetch therapist response');
    }
  };

  const handleMicClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks: Blob[] = [];

      mediaRecorder.ondataavailable = (e) => {
        audioChunks.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const formData = new FormData();
        formData.append('file', audioBlob, 'voice.wav');

        try {
          const res = await axios.post("http://localhost:8000/voice-emotion-chat/", formData);
          const { recognized_text, reply } = res.data;

          setMessages((prev) => [
            ...prev,
            { sender: 'user', text: recognized_text },
            { sender: 'ai', text: reply }
          ]);
        } catch {
          toast.error('Voice chat failed');
        }
      };

      mediaRecorder.start();
      toast.info("🎙️ Recording... Speak now");

      setTimeout(() => {
        mediaRecorder.stop();
        toast.success("✅ Voice captured");
      }, 4000);
    } catch (error) {
      console.error("🎤 Mic error:", error);
      toast.error("Mic access denied or failed");
    }
  };

  const handleCameraClick = async () => {
    toast.info('Camera input activated');
    try {
      const formData = new FormData();
      const imgBlob = new Blob(); // Replace this with actual captured frame in future
      formData.append('file', imgBlob, 'face.jpg');

      const res = await axios.post('http://localhost:8000/emotion-from-face/', formData);
      setMessages((prev) => [...prev, { sender: 'ai', text: res.data.reply }]);
    } catch {
      toast.error('Face emotion detection failed');
    }
  };

  return (
    <Card className="glass-card h-full flex flex-col">
      <CardHeader className="pb-2 border-b border-mental-100">
        <CardTitle className="text-lg font-medium text-mental-700">Chat with Therapist</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'items-start'}`}>
            {msg.sender === 'ai' && (
              <div className="flex-shrink-0 bg-mental-600 rounded-full h-8 w-8 flex items-center justify-center text-white">
                <MessageSquare size={14} />
              </div>
            )}
            <div className={`ml-3 mr-3 py-2 px-3 rounded-lg max-w-[80%] ${
              msg.sender === 'user'
                ? 'bg-mental-200 rounded-tr-none'
                : 'bg-mental-100 rounded-tl-none'
            }`}>
              <p className="text-sm whitespace-pre-line">{msg.text}</p>
            </div>
            {msg.sender === 'user' && (
              <div className="flex-shrink-0 bg-mental-400 rounded-full h-8 w-8 flex items-center justify-center text-white">
                <span className="text-xs font-medium">You</span>
              </div>
            )}
          </div>
        ))}
      </CardContent>

      <CardFooter className="border-t border-mental-100 p-4">
        <form onSubmit={handleSendMessage} className="w-full flex gap-2">
          <div className="flex gap-2">
            <Button type="button" variant="outline" size="icon" className="h-10 w-10 rounded-full hover:bg-mental-100" onClick={handleMicClick}>
              <Mic size={18} />
            </Button>
            <Button type="button" variant="outline" size="icon" className="h-10 w-10 rounded-full hover:bg-mental-100" onClick={handleCameraClick}>
              <Camera size={18} />
            </Button>
          </div>

          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 h-10 rounded-full bg-white border-mental-200 focus-visible:ring-mental-500"
          />

          <Button
            type="submit"
            size="icon"
            className="h-10 w-10 p-0 rounded-full bg-mental-600 hover:bg-mental-700"
            disabled={!message.trim()}
          >
            <Send size={18} className="text-white" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default ChatInterface;
