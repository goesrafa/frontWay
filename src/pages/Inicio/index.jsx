import { LayoutComponents } from "../../components/LayoutComponents"
import { Link } from 'react-router-dom';


import mel from '../../assets/mel.svg'
import banana from '../../assets/banana.svg'


export const Inicio = () =>{
    return(
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title">
                        <img src={mel} alt="" />
                    </span>

                        <span className="login-form-title">Melancia</span>
                
                <div className='text-center'>
                    <span className='txt2'>
                        Peso: 5kg,
                        Descrição: nacional,
                        Preço: R$4,00
                    </span>
                </div>
                <br></br>
                <span className="login-form-title">
                        <img src={banana} alt="" />
                    </span>

                        <span className="login-form-title">Banana</span>
                
                <div className='text-center'>
                    <span className='txt2'>
                        Peso: 1kg,
                        Descrição: nanica,
                        Preço: R$5,50
                    </span>
                </div>
                <Link className='txt2' to="/login">
                        Sair
                    </Link>
            </form>
        </LayoutComponents>
    )
}