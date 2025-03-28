
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AppointmentSection from '@/components/AppointmentSection';
import ChatbotButton from '@/components/ChatbotButton';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <AppointmentSection />
        </motion.div>
      </main>
      <ChatbotButton />
    </div>
  );
};

export default Index;
