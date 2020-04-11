import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/lyricbook-icon.png'
import Title from '../components/Title.jsx';
import './css/login.css'

function Login() {
    return (
        <div className="flex horizontal center" id="container"> 
            <div className="flex vertical center" id="left-div">
                <div>
                    <Title />
                    <p>
                        A Melhor forma de salvar as 
                        letras das suas músicas favoritas
                    </p>
                </div>
                <form action="">
                    <input type="email" name="" id=""/>
                    <input type="password" name="" id=""/>
                    <button type="submit">confirmar</button>
                </form>
            </div>

            <div id="right-div" className="flex vertical center">
                <img src={logo} alt="logo" className="logo centralize-self"/>
                <p className="centralize-self">
                    Faça seu logon e comece 
                    a usufruir de um catálogo com milhares 
                    de letras de músicas
                </p>
                <Link>
                    <div className="flex center">
                        Não tenho cadastro
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Login;