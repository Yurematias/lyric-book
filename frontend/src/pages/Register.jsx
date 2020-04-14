import React from 'react';
import logo from '../assets/lyricbook-icon.png';
import Title from '../components/Title';
import './css/register.css';

function Register() {
    return( 
        <section id="register-container">
            <form action="">
                <h2>Cadastro</h2>
                <input type="text" placeholder="nome"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="senha"/>
                <input type="password" placeholder="confirme sua senha"/>
            </form>
            <div className="logo-div">
                <img src={logo} alt="logo"/>
                <Title style={{ fontSize: '72px', fontWeight: 600 }} />
                <p>
                    Faça seu cadastro e comece a usufrair de um catálogo
                    milhares de músicas para você salvar e disfrutar
                </p>
            </div>
        </section>
    );
}

export default Register;