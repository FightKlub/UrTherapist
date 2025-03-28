
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-mental-50/70 to-transparent -z-10"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-mental-400 bg-opacity-50 animate-float"></div>
        <div className="absolute top-40 -left-10 w-32 h-32 rounded-full bg-mental-400 bg-opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-1/3 w-40 h-40 rounded-full bg-mental-400 bg-opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-5 left-1/4 w-32 h-32 rounded-full bg-mental-400 bg-opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-mental-700 uppercase bg-mental-100 rounded-full">Your Mental Wellbeing Partner</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-mental-950 mb-6 text-balance"
          >
            Professional Support for Your Mental Health Journey
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-mental-700 mb-10 max-w-2xl mx-auto text-balance"
          >
            Connect with licensed psychologists and therapists who can help you navigate life's challenges and build resilience.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-mental-700 hover:bg-mental-800 text-white transition-all duration-300 rounded-full shadow-md hover:shadow-lg"
            >
              Book an Appointment
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-mental-300 hover:bg-mental-100 transition-all duration-300 rounded-full"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
