// import {useState} from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import './forms.css'
// import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
// import {auth} from './firebase'
// import {useAuthValue} from './AuthContext'

// function Login(){

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('') 
//   const [error, setError] = useState('')
//   const {setTimeActive} = useAuthValue()
//   const history = useNavigate()
//   const login = e => {
//     e.preventDefault()
//     signInWithEmailAndPassword(auth, email, password)
//     .then(() => {
//       if(!auth.currentUser.emailVerified) {
//         sendEmailVerification(auth.currentUser)
//         .then(() => {
//           setTimeActive(true)
//           history.push('/verify-email')
//         })
//       .catch(err => alert(err.message))
//     }else{
//       history.push('/')
//     }
//     })
//     .catch(err => setError(err.message))
//   }

//   return(
//     <div className='center'>
//       <div className='auth'>
//         <h1>Log in</h1>
//         {error && <div className='auth__error'>{error}</div>}
//         <form onSubmit={login} name='login_form'>
//           <input 
//             type='email' 
//             value={email}
//             required
//             placeholder="Enter your email"
//             onChange={e => setEmail(e.target.value)}/>

//           <input 
//             type='password'
//             value={password}
//             required
//             placeholder='Enter your password'
//             onChange={e => setPassword(e.target.value)}/>

//           <button type='submit'>Login</button>
//         </form>
//         <p>
//           Don't have and account? 
//           <Link to='/register'>Create one here</Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Login

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
// import { auth } from "./firebase";
// import { useAuthValue } from "./AuthContext";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { setTimeActive, setIsAuthenticated } = useAuthValue();
//   const navigate = useNavigate();

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const login = async (e) => {
//     e.preventDefault();
    
//     if (!email || !email.includes('@')) {
//       setError("Invalid email");
//       return;
//     }

//     if (password.length < 6) {
//       setError("Password too short");
//       return;
//     }

//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
      
//       if (!user.emailVerified) {
//         await sendEmailVerification(user);
//         setTimeActive(true);
//         navigate("/verify-email");
//       } else {
//         localStorage.setItem("authToken", user.accessToken);
//         setIsAuthenticated(true);
//         navigate("/");
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
    
//     <div className="min-h-screen flex items-center justify-center bg-gray-200">
//       <div className="auth shadow-xl p-8 rounded-lg">
//         <h1 className="text-3xl font-semibold text-gray-800">Welcome Back</h1>
//         {error && (
//           <div className="auth__error bg-red-100 text-red-700 p-3 rounded-lg mb-4 border border-red-400">
//             {error}
//           </div>
//         )}
//         <form onSubmit={login} className="space-y-4">
//           <input
//             type="email"
//             value={email}
//             onChange={handleEmailChange}
//             placeholder="Enter your email"
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//             placeholder="Enter your password"
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <button 
//             type="submit" 
//             className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-gray-600">
//           Don't have an account? 
//           <Link to="/register" className="text-blue-500 font-semibold hover:underline ml-1">
//             Create one here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "./firebase";
import { useAuthValue } from "./AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setTimeActive, setIsAuthenticated } = useAuthValue();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const login = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError("Invalid email");
      return;
    }

    if (password.length < 6) {
      setError("Password too short");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      if (!user.emailVerified) {
        await sendEmailVerification(user);
        setTimeActive(true);
        navigate("/verify-email");
      } else {
        localStorage.setItem("authToken", user.accessToken);
        setIsAuthenticated(true);
        navigate("/actual");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-200">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-mental-50/70 to-transparent -z-10"></div>
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-mental-400 bg-opacity-50 animate-float"></div>
        <div className="absolute top-40 -left-10 w-32 h-32 rounded-full bg-mental-400 bg-opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-1/3 w-40 h-40 rounded-full bg-mental-400 bg-opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-5 left-1/4 w-32 h-32 rounded-full bg-mental-400 bg-opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="auth shadow-xl p-8 rounded-lg bg-white relative z-10">
        <h1 className="text-3xl font-semibold text-gray-800">Welcome Back</h1>
        {error && (
          <div className="auth__error bg-red-100 text-red-700 p-3 rounded-lg mb-4 border border-red-400">
            {error}
          </div>
        )}
        <form onSubmit={login} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Don't have an account? 
          <Link to="/register" className="text-blue-500 font-semibold hover:underline ml-1">
            Create one here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;


// import { useState } from "react";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import "./forms.css";
// import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
// import { auth } from "./firebase";
// import { useAuthValue } from "./AuthContext";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { setTimeActive, setIsAuthenticated } = useAuthValue();
//   const navigate = useNavigate();

//   const login = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
        
//         if (!user.emailVerified) {
//           sendEmailVerification(user)
//             .then(() => {
//               setTimeActive(true);
//               navigate("/verify-email");
//             })
//             .catch((err) => alert(err.message));
//         } else {
//           // Store token & update auth state
//           localStorage.setItem("authToken", user.accessToken);
//           setIsAuthenticated(true);
//           navigate("/");
//         }
//       })
//       .catch((err) => setError(err.message));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="auth">
//         <h1>Log in</h1>
//         {error && <div className="auth__error">{error}</div>}
//         <form onSubmit={login} name="login_form">
//           <input
//             type="email"
//             value={email}
//             required
//             placeholder="Enter your email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             value={password}
//             required
//             placeholder="Enter your password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit">Login</button>
//         </form>
//         <p>
//           Don't have an account? <Link to="/register">Create one here</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import { useState } from "react";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
// import { auth } from "./firebase";
// import { useAuthValue } from "./AuthContext";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { setTimeActive, setIsAuthenticated } = useAuthValue();
//   const navigate = useNavigate();

//   const login = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
        
//         if (!user.emailVerified) {
//           sendEmailVerification(user)
//             .then(() => {
//               setTimeActive(true);
//               navigate("/verify-email");
//             })
//             .catch((err) => alert(err.message));
//         } else {
//           // Store token & update auth state
//           localStorage.setItem("authToken", user.accessToken);
//           setIsAuthenticated(true);
//           navigate("/");
//         }
//       })
//       .catch((err) => setError(err.message));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
//       <div className="w-full max-w-md bg-white shadow-2xl rounded-xl overflow-hidden">
//         <div className="px-8 py-10">
//           <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Log in</h1>
//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-center">
//               {error}
//             </div>
//           )}
//           <form onSubmit={login} name="login_form" className="space-y-4">
//             <input
//               type="email"
//               value={email}
//               required
//               placeholder="Enter your email"
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//             />
//             <input
//               type="password"
//               value={password}
//               required
//               placeholder="Enter your password"
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//             />
//             <button 
//               type="submit" 
//               className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold shadow-md"
//             >
//               Login
//             </button>
//           </form>
//           <p className="text-center text-gray-600 mt-6">
//             Don't have an account? {" "}
//             <Link to="/register" className="text-blue-600 hover:underline font-semibold">
//               Create one here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
// import { auth } from "./firebase";
// import { useAuthValue } from "./AuthContext";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { setTimeActive, setIsAuthenticated } = useAuthValue();
//   const navigate = useNavigate();

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const login = async (e) => {
//     e.preventDefault();
    
//     if (!email || !email.includes('@')) {
//       setError("Invalid email");
//       return;
//     }

//     if (password.length < 6) {
//       setError("Password too short");
//       return;
//     }

//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
      
//       if (!user.emailVerified) {
//         await sendEmailVerification(user);
//         setTimeActive(true);
//         navigate("/verify-email");
//       } else {
//         localStorage.setItem("authToken", user.accessToken);
//         setIsAuthenticated(true);
//         navigate("/");
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
//       <div className="flex w-full max-w-3xl bg-white border rounded-lg overflow-hidden shadow-lg">
//         {/* Left Side */}
//         <div className="w-1/2 p-8 flex flex-col justify-center">
//           <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Welcome Back</h2>
          
//           {error && (
//             <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-center border border-red-400">
//               {error}
//             </div>
//           )}
          
//           <form onSubmit={login} className="space-y-4">
//             <div>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 placeholder="Email"
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 placeholder="Password"
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <button 
//               type="submit" 
//               className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
//             >
//               Sign In
//             </button>
//           </form>
          
//           <div className="text-center mt-4 text-gray-600">
//             Don't have an account? 
//             <Link to="/register" className="text-blue-500 font-semibold hover:underline ml-1">
//               Register
//             </Link>
//           </div>
//         </div>
        
//         {/* Right Side */}
//         <div className="w-1/2 flex items-center justify-center bg-gradient-to-b from-blue-500 to-purple-500 text-white p-6">
//           <div className="text-center">
//             <h3 className="text-2xl font-bold mb-2">Welcome Back!</h3>
//             <p className="text-sm">Sign in to access your account and continue your journey.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
