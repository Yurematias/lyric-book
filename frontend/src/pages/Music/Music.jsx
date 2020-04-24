import React from 'react';
import Title from '../../components/Title';
import './styles/general.css';
import { useHistory } from 'react-router-dom';

function Music() {

    const history = useHistory();
    
    const music = {
        artist: localStorage.getItem('music_artist'),
        name: localStorage.getItem('music_name'),
        lyrics: localStorage.getItem('music_lyrics')
    } 
    console.log(music.lyrics.split('\n'));

    function handleBackButton() {
        history.push('/search');
    }

    return (
        <section id="music-container" className="max-viewport">
            <Title style={{fontSize: '55px'}} />
            <header>
                <h2>{music.artist} - {music.name}</h2>
                <div>
                    <button className="back" onClick={handleBackButton}>Voltar</button>
                    <button className="save">Salvar</button>
                </div>
            </header>
            <article className="lyric-area">
                {music.lyrics.split('\n').map(el => {
                    if (el.length === 0) {
                        return <br/>
                    }
                    return el;
                }).map((item, i) => <p key={i}>{item}</p>)}
            </article>
        </section>
    );
}

export default Music;