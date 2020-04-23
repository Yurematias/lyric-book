import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/lyricbook-icon.png'
import Title from '../../components/Title.jsx';
import api from '../../services/api';
import { FiArrowRight } from 'react-icons/fi';
import './styles/general.css'
import './styles/mobile.css'

function Login() {
    localStorage.clear();    
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleRegisterLink() {
        history.push('/register');
    }

    async function handleLoginButton(evt) {
        evt.preventDefault();
        try {
            const response = await api.post('sessions', { email, password });
            const userData = response.data;
            localStorage.setItem('userName', userData.name);
            localStorage.setItem('userId', userData.id);
            history.push('/profile');
        } catch (error) {
            alert('Não foi possível realizar o login');
        }
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
                <form onSubmit={handleLoginButton}>
                    <input 
                        type="email" 
                        placeholder="email" 
                        onChange={evt => setEmail(evt.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="senha" 
                        onChange={evt => setPassword(evt.target.value)}    
                    />
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