import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/lyricbook-icon.png'
import Title from '../../components/Title.jsx';
import { FiArrowRight } from 'react-icons/fi';
import './styles/general.css'
import './styles/mobile.css'

function Login() {
    
    const history = useHistory();

    function handleRegisterLink() {
        history.push('/register');
    }

    return (
        <section id="login-container" className="max-viewport">
            <div className="left-div">
                <div>
                    <div className="title">
                        <Title style={{ fontSize: '92px', fontWeight: 600 }} />
                    </div>
                    <p className="subtitle">
                        A Melhor forma de salvar as
                        letras das suas músicas favoritas
                    </p>
                </div>
                <form action="">
                    <input type="email" name="" id="" placeholder="email" />
                    <input type="password" name="" id="" placeholder="senha" />
                    <button type="submit">Fazer login</button>
                </form>
            </div>

            <div className="right-div">
                <img src={logo} alt="logo" />
                <p>
                    Faça seu logon e comece
                    a usufruir de um catálogo com milhares
                    de letras de músicas
                    </p>
                <Link>
                    <div onClick={handleRegisterLink}>
                        Não tenho cadastro
                        <FiArrowRight size="0.7rem" />
                    </div>
                </Link>
            </div>
        </section>
    );
}

export default Login;