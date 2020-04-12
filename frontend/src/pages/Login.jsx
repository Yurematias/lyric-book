import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/lyricbook-icon.png'
import Title from '../components/Title.jsx';
import './css/login.css'

function Login() {
    return (
        <div className="container"> 
            <div className="left-div">
                <div>
                    <Title style={{ fontSize: '92px', fontWeight: 600 }} />
                    <p>
                        A Melhor forma de salvar as 
                        letras das suas músicas favoritas
                    </p>
                </div>
                <form action="">
                    <input type="email" name="" id="" placeholder="email"/>
                    <input type="password" name="" id="" placeholder="senha"/>
                    <button type="submit">confirmar</button>
                </form>
            </div>

            <div>
                <img src={logo} alt="logo" width="130px"/>
                <p>
                    Faça seu logon e comece 
                    a usufruir de um catálogo com milhares 
                    de letras de músicas
                </p>
                <Link>
                    <div>
                        Não tenho cadastro
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Login;