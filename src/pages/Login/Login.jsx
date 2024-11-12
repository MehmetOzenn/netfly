import { useState } from 'react'
import logo from '../../assets/logo.png'
import './Style.css'
import { login, signUp } from '../../firebase'
import netfly_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

  const [signState, setSignState] = useState(false);
  const signTitle = signState?'Sign Up':'Sign In';

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if(signState === false){
      await login(email, password);
    }else{
      await signUp(name, email, password)
    }
    setLoading(false);
  }
  
  const toggleSıgnState = () => {
    setSignState(prev => !prev)
  }

  return (
    loading === true 
      ? 
        <div className="login-spinner">
          <img src={netfly_spinner} alt="" />
        </div>
      :
        <div className='login'>
          <img src={logo} alt="" className='login-logo' />
          <div className="login-form">
            <h1>{signTitle}</h1>
            <form>
              {signState === true
              ?<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Your name'/>
              :<></>
            }   
              <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Email'/>
              <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password'/>
              <button onClick={user_auth} type='submit'>{signTitle}</button>
              <div className="form-help">
                <div className="remember">
                  <input type="checkbox" id='rememberMe'/>
                  <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <p>Need Help</p>
              </div>
            </form>
            <div className="form-switch">
              {signState === false
                ? <p onClick={toggleSıgnState}>New to Netflix? <span>Sign Up Now</span></p>
                : <p onClick={toggleSıgnState}>Already have account <span>Sign In Now</span></p>
              }
            </div>
          </div>
        </div>
    
  )
}

export default Login