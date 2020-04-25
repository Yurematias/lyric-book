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
    const userId = localStorage.getItem('user_id');
    const userName = localStorage.getItem('user_name');

    const [musics, setMusics] = useState([]);

    useEffect(() => {
        api.get('profile_musics', {
            headers: { 
                Authorization: userId 
            }
        }).then(response => {
            setMusics(response.data);
        });
    }, [userId]);

    function handleAddLyric() {
        history.push('/search');
    }

    function handleLogout() {
        history.push('/');
    }

    function handleResult(music) {
        localStorage.setItem('music_name', music.music_name);
        localStorage.setItem('music_artist', music.artist);
        localStorage.setItem('music_lyrics', music.lyrics);
        // determina a qual página voltar na página de música
        localStorage.setItem('page_to_return', '/profile');
        history.push('/music');
    }

    return (
        <section id="profile-container" className="max-viewport">
            <header>
                <div className="intro-div">
                    <img src={logo} className="logo"/>
                    <div className="title-div">
                        <div className="title">
                            <Title style={{fontSize: '45px'}}/>
                        </div>
                        <p>Bem vindo {userName}</p>
                    </div>
                </div>
                <div className="control-div">
                    <button className="add-lyric" onClick={handleAddLyric}>
                        Adicionar letra
                    </button>
                    <button className="logout" onClick={handleLogout}>
                        <FiPower />
                    </button>
                </div>
            </header>
            <h1>Letras salvas</h1>
            <div className="musics-div">
                {musics.map(music => (
                    <div className="music" key={music.id} onClick={() =>  handleResult(music)}>
                        <div className="header">
                            <div className="artist">
                                {music.artist}
                            </div>
                            <div className="music">
                                {music.music_name}
                            </div>
                        </div>
                        <div className="lyric">
                            {
                                music.lyrics.split('\n').map(el => {
                                    if (el.length === 0) {
                                        return <br/>
                                    }
                                    return el;
                                }).map((item, i) => <p key={i}>{item}</p>)
                            }
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Profile;