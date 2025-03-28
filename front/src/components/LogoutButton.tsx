
// import React from 'react';
// import { LogOut } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
// import { toast } from 'sonner';

// const LogoutButton = () => {
//   const handleLogout = () => {
//     toast.success('Logged out successfully');
//     console.log('Logout button clicked');
//   };

//   return (
//     <TooltipProvider>
//       <Tooltip>
//         <TooltipTrigger asChild>
//           <Button 
//             variant="ghost" 
//             size="icon" 
//             className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200"
//             onClick={handleLogout}
//           >
//             <LogOut size={18} className="text-mental-700" />
//             <span className="sr-only">Logout</span>
//           </Button>
//         </TooltipTrigger>
//         <TooltipContent>
//           <p>Logout</p>
//         </TooltipContent>
//       </Tooltip>
//     </TooltipProvider>
//   );
// };

// export default LogoutButton;

import React from 'react';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from 'sonner';
import { signOut } from "firebase/auth";
import { auth } from "../pages/firebase"; // ✅ Ensure correct path
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../pages/AuthContext";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthValue(); // ✅ Get setIsAuthenticated from context

  const handleLogout = async () => {
    try {
      await signOut(auth); // ✅ Firebase logout
      setIsAuthenticated(false); // ✅ Update authentication state
      localStorage.removeItem("authToken"); // ✅ Clear token
      toast.success('Logged out successfully'); // ✅ Show toast message
      navigate("/login"); // ✅ Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error('Logout failed. Please try again.');
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200"
            onClick={handleLogout} // ✅ Add logout function
          >
            <LogOut size={18} className="text-mental-700" />
            <span className="sr-only">Logout</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Logout</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LogoutButton;
