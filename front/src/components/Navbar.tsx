
// import React, { useState, useEffect } from 'react';
// import { cn } from "@/lib/utils";
// import ProfileButton from './ProfileButton';
// import LogoutButton from './LogoutButton';
// import { motion } from 'framer-motion';

// interface NavbarProps {
//   className?: string;
// }

// const Navbar: React.FC<NavbarProps> = ({ className }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
//         isScrolled 
//           ? "py-3 glass-effect border-b border-gray-200/20 shadow-sm" 
//           : "py-5 bg-transparent",
//         className
//       )}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between">
//           {/* Logo and Brand Name */}
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             className="flex items-center space-x-2"
//           >
//             <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-mental-600 to-mental-400 flex items-center justify-center">
//               <span className="text-white font-bold text-sm">MH</span>
//             </div>
//             <span className="text-lg font-semibold tracking-tight">Mental Haven</span>
//           </motion.div>
          
//           {/* Navigation Links - Center */}
//           <motion.nav 
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             className="hidden md:flex items-center space-x-8"
//           >
//             <a href="#" className="text-sm font-medium hover:text-mental-700 transition-colors duration-200">Home</a>
//             <a href="#services" className="text-sm font-medium hover:text-mental-700 transition-colors duration-200">Services</a>
//             <a href="#appointments" className="text-sm font-medium hover:text-mental-700 transition-colors duration-200">Appointments</a>
//             <a href="#about" className="text-sm font-medium hover:text-mental-700 transition-colors duration-200">About Us</a>
//           </motion.nav>
          
//           {/* User Actions - Right */}
//           <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//             className="flex items-center space-x-4"
//           >
//             <ProfileButton />
//             <LogoutButton />
//           </motion.div>
//         </div>
//       </div>
//     </motion.header>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import ProfileButton from './ProfileButton';
import { motion } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "py-3 glass-effect border-b border-gray-200/20 shadow-sm" 
          : "py-5 bg-transparent",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-mental-600 to-mental-400 flex items-center justify-center">
              <span className="text-white font-bold text-sm">😇</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Ur Therapist</span>
          </motion.div>
          
          {/* Navigation Links - Center */}
          <motion.nav 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#" className="text-sm font-medium hover:text-mental-700 transition-colors duration-200">Home</a>
            <a href="#services" className="text-sm font-medium hover:text-mental-700 transition-colors duration-200">Services</a>
            <a href="#appointments" className="text-sm font-medium hover:text-mental-700 transition-colors duration-200">Appointments</a>
            <a href="#about" className="text-sm font-medium hover:text-mental-700 transition-colors duration-200">About Us</a>
          </motion.nav>
          
          {/* User Actions - Right */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <ProfileButton />
            <button 
              className="px-4 py-2 text-sm font-medium text-white bg-mental-600 rounded-lg hover:bg-mental-700 transition"
              onClick={() => navigate('/login')}
            >
              Sign In
            </button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;

