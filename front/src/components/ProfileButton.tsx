
// import React from 'react';
// import { UserRound } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// const ProfileButton = () => {
//   return (
//     <TooltipProvider>
//       <Tooltip>
//         <TooltipTrigger asChild>
//           <Button 
//             variant="ghost" 
//             size="icon" 
//             className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200"
//             onClick={() => console.log('Profile button clicked')}
//           >
//             <UserRound size={18} className="text-mental-700" />
//             <span className="sr-only">Profile</span>
//           </Button>
//         </TooltipTrigger>
//         <TooltipContent>
//           <p>Your Profile</p>
//         </TooltipContent>
//       </Tooltip>
//     </TooltipProvider>
//   );
// };

// export default ProfileButton;

import React, { useState } from 'react';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useAuthValue } from "../pages/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileButton = () => {
  const { currentUser } = useAuthValue(); // ✅ Get user info from AuthContext
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <User size={18} className="text-mental-700" />
              <span className="sr-only">Profile</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Profile</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
          <div className="px-4 py-2 text-sm text-gray-700">
            <p className="font-semibold">{currentUser?.displayName || "User"}</p>
            <p className="text-xs text-gray-500">{currentUser?.email || "user@example.com"}</p>
          </div>
          <hr />
          <button
            onClick={() => navigate("/profile")}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            View Profile
          </button>
          <button
            onClick={() => navigate("/settings")}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Settings
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
