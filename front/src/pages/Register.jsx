import {useState} from 'react'
import './forms.css'
import {auth} from './firebase'
import {useNavigate, Link, Navigate} from 'react-router-dom'
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {useAuthValue} from './AuthContext'

function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const history = useNavigate()
  const {setTimeActive} = useAuthValue()
  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }
  const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
      // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
          .then(() => {
            setTimeActive(true)
            history('/verify-email')
          }).catch((err) => alert(err.message))
        })
        .catch(err => setError(err.message))
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

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
      
      <div className='auth'>
      <h1 className="text-2xl font-semibold text-gray-800">Register</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={register} name='registration_form'>
          <input 
            type='email' 
            value={email}
            placeholder="Enter your email"
            required
            onChange={e => setEmail(e.target.value)}/>

          <input 
            type='password'
            value={password} 
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>

            <input 
            type='password'
            value={confirmPassword} 
            required
            placeholder='Confirm password'
            onChange={e => setConfirmPassword(e.target.value)}/>

          <button type='submit'>Register</button>
        </form>
        <p className="mt-4 text-gray-600">
          Already have an account? 
          <Link to="/login" className="text-blue-500 font-semibold hover:underline ml-1">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register