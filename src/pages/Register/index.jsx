import { useState } from "react"
import { LayoutComponents } from "../../components/LayoutComponents"
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

export const Register = () => {
    const [email, setEmail] = useState(" ")
    const [passoword, setPassoword] = useState(" ")
    const [name, setName] = useState(" ")
    return (
        <LayoutComponents>
            <form className="login-form">

                <span className="login-form-title">
                    <img src={logo} alt="" />
                </span>

                <span className="login-form-title">Nova conta</span>

                <div className="wrap-imput">
                    <input className={email !== " " ? 'has-val input' : 'input'}
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-imput">
                    <input className={name !== " " ? 'has-val input' : 'input'}
                        type="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Nome"></span>
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

                <div className='container-login-form-btn'>
                    <button className='login-form-btn'>Login</button>
                </div>

                <div className='text-center'>
                    <span className='txt1'>Já possui conta?</span>

                    <Link className='txt2' to="/login">
                       Acessar
                    </Link>
                </div>
            </form>
        </LayoutComponents>
    )
}