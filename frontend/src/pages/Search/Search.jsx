import React, { useState } from 'react';
import Title from '../../components/Title';
import './styles/general.css';
import './styles/mobile.css';
import { useHistory } from 'react-router-dom';
import getMusic from '../../services/getMusicFromWebAPI';

function Search() {

    const [artist, setArtist] = useState('');
    const [music, setMusic] = useState('');
    const [lyric, setLyric] = useState('');

    const history = useHistory();

    function handleBackButton() {
        history.push('/profile');
    }

    async function handleSearchButton(evt) {
        evt.preventDefault();
        setLyric(await getMusic(artist, music));
    }

    function handleResult() {
        localStorage.setItem('music_name', music);
        localStorage.setItem('music_artist', artist);
        localStorage.setItem('music_lyrics', lyric);
        localStorage.setItem('music_id', music.id);
        // determina a qual página voltar na página de música
        localStorage.setItem('page_to_return', '/search');
        history.push('/music');
    }

    return (
        <section id="search-container" className="max-viewport">
            <div className="title">
                <Title style={{ fontSize: '72px', fontWeight: 600 }} />
            </div>
            <div className="search-div">
                <form onSubmit={handleSearchButton}>
                    <h2>Busca de música</h2>
                    <input 
                        placeholder="Artista" 
                        onChange={evt => setArtist(evt.target.value)}    
                    />
                    <input 
                        placeholder="Música" 
                        onChange={evt => setMusic(evt.target.value)}    
                    />
                    <button type="submit">
                        Buscar
                    </button>
                </form>
                <div className="result" onClick={handleResult}>
                    <h2>Resultado</h2>
                    <p className="lyric">
                        {lyric || 'insira o artista e o título da música para ver o resultado'}
                    </p>
                </div>
            </div>
            <button onClick={handleBackButton}>
                voltar
            </button>
        </section>
    );
}

export default Search;