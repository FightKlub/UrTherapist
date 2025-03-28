// import React from 'react';
// import Navbar from '@/components/Navbar';
// import { motion } from 'framer-motion';
// import VideoFeed from '@/components/VideoFeed';
// import StatsCard from '@/components/StatsCard';
// import SessionHistory from '@/components/SessionHistory';
// import ChatInterface from '@/components/ChatInterface';

// const VideoConsultation = () => {
//   return (
//     <div className="min-h-screen relative overflow-hidden bg-background flex flex-col">
//       <Navbar />
//       <main className="container mx-auto px-4 pt-24 pb-12 flex-1 flex gap-6">
        
//         {/* Left Section */}
//         <motion.div 
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="w-1/2 p-8 flex flex-col justify-center gap-6"
//         >
//           {/* Video Feed & Stats */}
//           <div className="flex gap-4">
//             <VideoFeed className="flex-1" />
//             <StatsCard className="flex-1" />
//           </div>
//           {/* Session History */}
//           <SessionHistory className="w-full" />
//         </motion.div>

//         {/* Right Section - Chat Interface */}
//         <motion.div 
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="w-1/2 p-8 flex flex-col justify-center"
//         >
//           <ChatInterface className="w-full" />
//         </motion.div>

//       </main>
//     </div>
//   );
// };

// export default VideoConsultation;

// import React from 'react';
// import Navbar from '@/components/Navbar';
// import { motion } from 'framer-motion';
// import VideoFeed from '@/components/VideoFeed';
// import StatsCard from '@/components/StatsCard';
// import SessionHistory from '@/components/SessionHistory';
// import ChatInterface from '@/components/ChatInterface';

// const VideoConsultation = () => {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-gray-200">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-gradient-to-b from-mental-50/70 to-transparent -z-10"></div>
//       <div className="absolute inset-0 overflow-hidden -z-10">
//         <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-mental-400 bg-opacity-50 animate-float"></div>
//         <div className="absolute top-40 -left-10 w-32 h-32 rounded-full bg-mental-400 bg-opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
//         <div className="absolute bottom-10 right-1/3 w-40 h-40 rounded-full bg-mental-400 bg-opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute bottom-5 left-1/4 w-32 h-32 rounded-full bg-mental-400 bg-opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
//       </div>
//       {/* Navbar */}
//       <Navbar className="py-4" />

//       {/* Main Content */}
//       <main className="container mx-auto px-6 pt-28 pb-12 flex-1 flex gap-8 h-screen">
        
//         {/* Left Section */}
//         <motion.div 
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="w-1/2 p-6 flex flex-col justify-center gap-8"
//         >
//           {/* Video Feed & Stats */}
//           <div className="flex gap-8">
//             <VideoFeed className="flex-1" />
//             <StatsCard className="flex-1" />
//           </div>
//           {/* Session History */}
//           <SessionHistory className="h-full" />
//         </motion.div>

//         {/* Right Section - Chat Interface */}
//         <motion.div 
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="w-1/2 p-6 flex flex-col justify-center"
//         >
//           <ChatInterface className="w-full" />
//         </motion.div>

//       </main>
//     </div>
//   );
// };

// export default VideoConsultation;

import React from 'react';
import Navbar1 from '@/components/Navbar1';
import { motion } from 'framer-motion';
import VideoFeed from '@/components/VideoFeed';
import StatsCard from '@/components/StatsCard';
import SessionHistory from '@/components/SessionHistory';
import ChatInterface from '@/components/ChatInterface';

const VideoConsultation = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-gray-200">
      {/* Background Layer (Completely Separate) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-mental-50/70 to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-mental-400 bg-opacity-50 animate-float"></div>
        <div
          className="absolute top-40 -left-10 w-32 h-32 rounded-full bg-mental-400 bg-opacity-30 animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-10 right-1/3 w-40 h-40 rounded-full bg-mental-400 bg-opacity-40 animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-5 left-1/4 w-32 h-32 rounded-full bg-mental-400 bg-opacity-40 animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Navbar (Independent) */}
      <Navbar1 className="py-4 w-full fixed top-0 left-0 bg-transparent z-50" />
    
      {/* Main Content (Completely Separate from Background) */}<br/><br/>
      <main className="relative w-full max-w-7xl mx-auto px-6 pt-28 pb-12 flex flex-1 h-screen justify-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-1/2 p-6 flex flex-col gap-8 bg-transparent rounded-lg"
        >
          {/* Video Feed & Stats */}
          <div className="flex h-half gap-4">
            <VideoFeed className="flex-1" />
            <StatsCard className="flex-1" />
          </div>
          {/* Session History */}
          <SessionHistory className="h-half" />
        </motion.div>

        {/* Right Section - Chat Interface */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-1/2 p-6 flex flex-col justify-center bg-transparent rounded-lg"
        >
          <ChatInterface className="w-full" />
        </motion.div>
      </main>
    </div>
  );
};

export default VideoConsultation;


// import React from 'react';
// import Navbar from '@/components/Navbar';
// import { motion } from 'framer-motion';
// import VideoFeed from '@/components/VideoFeed';
// import StatsCard from '@/components/StatsCard';
// import SessionHistory from '@/components/SessionHistory';
// import ChatInterface from '@/components/ChatInterface';

// const VideoConsultation = () => {
//   return (
//     <div className="min-h-screen relative overflow-hidden bg-background flex flex-col">
//       {/* Navbar */}
//       <Navbar className="py-4 mb-40" /> {/* Increased margin-bottom to create more space */}
      
//       {/* Main Content */}<br /><br />
//       <main className="container mx-auto px-6 pb-12 flex-1 flex gap-8 h-screen">
        
//         {/* Left Section */}
//         <motion.div 
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="w-1/2 flex flex-col justify-center space-y-6" // Removed padding, added space-y-6 for consistent spacing
//         >
//           {/* Video Feed & Stats */}
//           <div className="flex space-x-6 h-[calc(50%-1.5rem)]"> {/* Fixed height with space between */}
//             <VideoFeed className="flex-1" />
//             <StatsCard className="flex-1" />
//           </div>
          
//           {/* Session History */}
//           <SessionHistory className="w-full h-[calc(50%-1.5rem)]" /> {/* Reduced height */}
//         </motion.div>
        
//         {/* Right Section - Chat Interface */}
//         <motion.div 
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="w-1/2 flex flex-col justify-center" // Removed padding
//         >
//           <ChatInterface className="w-full" />
//         </motion.div>
//       </main>
//     </div>
//   );
// };

// export default VideoConsultation;