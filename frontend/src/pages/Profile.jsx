import React from 'react';
import { FiPower } from 'react-icons/fi';
import logo from '../assets/lyricbook-icon.png'
import Title from '../components/Title.jsx';
import './css/profile.css';

function Profile() {
    return (
        <section id="profile-container">
            <header>
                <div className="intro-div">
                    <img src={logo} />
                    <div className="title-div">
                        <Title style={{fontSize: '60px'}}/>
                        <p>Bem vindo. LordYM</p>
                    </div>
                </div>
                <div className="control-div">
                    <button className="add-lyric">Adicionar letra</button>
                    <button className="logout">
                        <FiPower />
                    </button>
                </div>
            </header>
        </section>
    )
}

export default Profile;