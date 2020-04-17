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
                    <img src={logo} className="logo"/>
                    <div className="title-div">
                        <div className="title">
                            <Title style={{fontSize: '60px'}}/>
                        </div>
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
            <h1>Letras salvas</h1>
            <div className="musics-div">
                <div className="music">
                    <div className="header">
                        <div className="artist">
                            Cage the Elephant
                        </div>
                        <div className="music">
                            Come a Little Closer
                        </div>
                    </div>
                    <div className="lyric">
                        Did you stand there all alone?
                        Oh I cannot explain what's going down
                        I can see you standing next to me
                        In and out somewhere else right now

                        You sigh, look away
                        I can see it clear as day
                        Close your eyes, so afraid...
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem...
                        Did you stand there all alone?
                        Oh I cannot explain what's going down
                        I can see you standing next to me
                        In and out somewhere else right now

                        You sigh, look away
                        I can see it clear as day
                        Close your eyes, so afraid...
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem...
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;