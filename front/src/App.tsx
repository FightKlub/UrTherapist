// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Main from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import VerifyEmail from "./pages/VerifyEmail";
// import { AnimatePresence } from "framer-motion";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <AnimatePresence>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Main />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/verify-email" element={<VerifyEmail />} />
//             {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </BrowserRouter>
//       </AnimatePresence>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from "react";
import Actual from "./pages/Actual";
import Main from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import { AnimatePresence } from "framer-motion";
import {auth} from './pages/firebase'
import {onAuthStateChanged} from 'firebase/auth'
import PrivateRoute from './pages/PrivateRoute'
import {AuthProvider} from './pages/AuthContext'

const queryClient = new QueryClient();

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
     })
  }, [])

  return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AnimatePresence>
            <Router>
              <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
                <Routes>
                  <Route element={<PrivateRoute />}>
                    <Route path="/actual" element={<Actual />} />
                  </Route>
                  <Route path="/" element={<Main />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/verify-email" element={<VerifyEmail />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AuthProvider>
            </Router>
          </AnimatePresence>
        </TooltipProvider>
      </QueryClientProvider>
  );
};

export default App;
