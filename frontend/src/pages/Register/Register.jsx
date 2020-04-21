import React from 'react';
import logo from '../../assets/lyricbook-icon.png';
import Title from '../../components/Title';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles/general.css';
import './styles/mobile.css';
import Footer from './../../components/Footer';

function Register() {
    return (
        <div className="flex vertical center all-space max-viewport" id="main-container">
            <section id="register-container">
                <form action="">
                    <h2>Cadastro</h2>
                    <input type="text" placeholder="nome" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="senha" />
                    <input type="password" placeholder="confirme sua senha" />
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
            <button className="back">
                voltar
            </button>
        </div>
    );
}

export default Register;