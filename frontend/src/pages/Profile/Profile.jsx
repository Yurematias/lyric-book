import React, { useState, useEffect } from 'react';
import { FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/lyricbook-icon.png'
import Title from '../../components/Title.jsx';
import './styles/general.css';
import './styles/desktop.css';
import './styles/mobile.css';
import api from './../../services/api';

function Profile() {

    const history = useHistory();
    const userId = localStorage.getItem('userId');
    const [musics, setMusics] = useState([]);

    function handleAddLyric() {
        history.push('/search');
    }

    api.get('profile_musics', {
        headers: { 
            Authorization: userId 
        }
    }).then(response => {
        setMusics(response.data);
    });

    return (
        <section id="profile-container" className="max-viewport">
            <header>
                <div className="intro-div">
                    <img src={logo} className="logo"/>
                    <div className="title-div">
                        <div className="title">
                            <Title style={{fontSize: '45px'}}/>
                        </div>
                        <p>Bem vindo. {localStorage.getItem('userName')}</p>
                    </div>
                </div>
                <div className="control-div">
                    <button className="add-lyric" onClick={handleAddLyric}>
                        Adicionar letra
                    </button>
                    <button className="logout">
                        <FiPower />
                    </button>
                </div>
            </header>
            <h1>Letras salvas</h1>
            <div className="musics-div">

                {musics.map(music => (
                    <div className="music" key={music.id}>
                        <div className="header">
                            <div className="artist">
                                {music.artist}
                            </div>
                            <div className="music">
                                {music.music_name}
                            </div>
                        </div>
                        <div className="lyric">
                            {music.lyrics}
                        </div>
                    </div>
                ))}

               
                {/* <div className="music">
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
                </div> */}
            </div>
        </section>
    );
}

export default Profile;