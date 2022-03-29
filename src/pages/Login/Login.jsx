import { Link } from 'react-router-dom';
import { useState } from 'react';

import logo from '../../assets/logo.svg'
import { LayoutComponents } from '../../components/LayoutComponents';

export const  Login = () => {
    const [email, setEmail] = useState(" ")
    const [passoword, setPassoword] = useState(" ")
  return(
        <LayoutComponents>
           <form className="login-form">
                      
             <span className="login-form-title">
               <img src={logo} alt="" />
             </span>

             <span className="login-form-title">EasyWay</span>

             <div className="wrap-imput">
                 <input  className={email !== " " ? 'has-val input' : 'input'}  
                    type="email" 
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                   />
                 <span className="focus-input" data-placeholder="Email"></span>
             </div>

             <div className="wrap-imput">
                 <input 
                 className={passoword !== " " ? 'has-val input' : 'input'} 
                 type="passoword"
                 value={passoword}
                   onChange={e => setPassoword(e.target.value)}
                 />
                 <span className="focus-input" data-placeholder="Passoword"></span>
             </div>
             <Link className="txt2 " to="/inicio">Logar</Link>
             {/* <div className='container-login-form-btn'>
               <button className='login-form-btn'>Login</button>
             </div> */}

             <div className='text-center'>
                 <span className='txt1'>Não possui conta?</span>

                 <Link className='txt2' to="/register">Criar conta</Link>
             </div>


           </form>
           </LayoutComponents>
  )
    
}