
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle, Video, Clock } from 'lucide-react';
import { toast } from 'sonner';

interface PsychologistCardProps {
  name: string;
  specialty: string;
  imageUrl: string;
  availability: string;
  delay: number;
}

const PsychologistCard: React.FC<PsychologistCardProps> = ({ 
  name, 
  specialty, 
  imageUrl, 
  availability,
  delay 
}) => {
  const handleBooking = () => {
    toast.success(`Appointment request sent to ${name}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
    >
      <Card className="glass-card overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent h-24"></div>
          <div className="absolute bottom-3 left-3 bg-white/90 rounded-full px-3 py-1 text-xs font-medium text-mental-800 flex items-center">
            <Clock size={12} className="mr-1" />
            {availability}
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{specialty}</p>
          
          <div className="flex gap-2 mb-5">
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full flex-1 h-9 text-xs"
              onClick={handleBooking}
            >
              <Calendar size={14} className="mr-1" />
              Book
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full flex-1 h-9 text-xs"
              onClick={() => toast.success(`Starting chat with ${name}`)}
            >
              <MessageCircle size={14} className="mr-1" />
              Chat
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full flex-1 h-9 text-xs"
              onClick={() => toast.success(`Video call with ${name}`)}
            >
              <Video size={14} className="mr-1" />
              Video
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const AppointmentSection = () => {
  const psychologists = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cognitive Behavioral Therapy",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", 
      availability: "Available today"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Anxiety & Depression",
      imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      availability: "Next available: Tomorrow"
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Trauma & PTSD",
      imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      availability: "Available today"
    }
  ];

  return (
    <section id="appointments" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-mental-50/50 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-mental-700 uppercase bg-mental-100 rounded-full">Professionals</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-mental-900 mb-6">Connect with our Expert Psychologists</h2>
          <p className="text-lg text-mental-600">Book appointments, chat, or video call with licensed professionals who can provide personalized mental health support.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {psychologists.map((psych, index) => (
            <PsychologistCard 
              key={psych.name}
              name={psych.name}
              specialty={psych.specialty}
              imageUrl={psych.imageUrl}
              availability={psych.availability}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
