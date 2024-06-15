import { Link } from 'react-router-dom'
import logo from '../../assets/icon/logo.svg'
import loginImg from '../../assets/images/pablo-sign-in.svg'
import { useState, useRef} from "react"
import './login.scss'

const Login = () => {

    const [show, setShow] = useState(false)
    const [inputValue, setInputValue] = useState({
        username:'',
        password:''
    })

    const ButtonRef = useRef<HTMLButtonElement>(null)

    const showPassword = ()=>{
        setShow(prev=>!prev)
      }

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target

        setInputValue(prev=>({
            ...prev,
            [name] : value
        }))

    }

    // if(ButtonRef.current && (inputValue.username==="" && inputValue.password ==="")){
    //     ButtonRef.current.disabled= true
    // }
    // if(ButtonRef.current && (inputValue.username!=="" && inputValue.password !=="")){
    //     ButtonRef.current.disabled= false
    // }
   
   
    return (
        <>
        <div className="login">
            <section className="login-left">
                <div className="login-left-img">
                    <Link to='/' ><img src={logo} alt='logo' /></Link>
                </div>
                <div className="login-left-display">
                    <img src={loginImg} alt='login display' />
                </div>
            </section>

            <section className="login-right">
                <h1>Welcome!</h1>
                <p className='login-subtitle'>Enter details to login.</p>
                <form>
                    <div>
                        <input type='text' 
                            placeholder='Email' 
                            required
                            value={inputValue.username}
                            onChange={handleChange}
                            name='username'/>
                    </div>
                    <div className='password-input'>
                        <input 
                            type={show? 'text': 'password'}
                             placeholder='Password' 
                             name='password'
                             value={inputValue.password}
                             onChange={handleChange}
                             required
                         />
                        <span className='show'
                            onClick={showPassword}
                            >{show? 'HIDE' :"SHOW"}
                        </span>
                    </div>
                    <p className='forgot-password'>Forgot PASSWORD?</p>
                    <Link to='/dashboard'><button ref={ButtonRef} type='submit' className='login-btn'>Log in</button></Link>
                </form>
            </section>
        </div>
        </>
    )
}

export default Login