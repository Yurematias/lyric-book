import React, { useState } from 'react';
import logo from '../../assets/lyricbook-icon.png';
import Title from '../../components/Title';
import { useHistory } from 'react-router-dom'
import './styles/general.css';
import './styles/mobile.css';
import api from './../../services/api';

function Register() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    function handleBackButton() {
        history.push('/');
    }

    async function handleRegister(evt) {
        evt.preventDefault();
        if (password != passwordConfirm) {
            return alert('As senhas não batem');
        }

        try {
            await api.post('users', {
                name,
                email,
                password
            });
            alert('usuário cadastrado com sucesso');
            history.push('');
        } catch (error) {
            alert('Não foi possível cadastrar o usuário');
        }
    }

    return (
        <div className="flex vertical center all-space max-viewport" id="main-container">
            <section id="register-container">
                <form onSubmit={handleRegister}>
                    <h2>Cadastro</h2>
                    <input
                        placeholder="nome"
                        onChange={evt => setName(evt.target.value)}
                    />
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
                    <input
                        type="password"
                        placeholder="confirme sua senha"
                        onChange={evt => setPasswordConfirm(evt.target.value)}
                    />
                    <button>Confirmar</button>
                </form>
                <div className="logo-div">
                    <img src={logo} alt="logo" />
                    <Title style={{ fontSize: '72px', fontWeight: 600 }} />
                    <p>
                        Faça seu cadastro e comece a usufruir de um catálogo
                        milhares de músicas para você salvar e disfrutar
                    </p>
                </div>
            </section>
            <button className="back" onClick={handleBackButton}>
                voltar
            </button>
        </div>
    );
}

export default Register;