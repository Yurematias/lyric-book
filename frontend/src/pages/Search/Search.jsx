import React, { useState } from 'react';
import Title from '../../components/Title';
import './styles/general.css';
import './styles/mobile.css';
import { useHistory } from 'react-router-dom';
import getMusic from './../../services/lyricAPI';

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

    return (
        <section id="search-container" className="max-viewport">
            <div className="title">
                <Title style={{ fontSize: '72px', fontWeight: 600 }} />
            </div>
            <div className="search-div">
                <form action="">
                    <h2>Busca de música</h2>
                    <input 
                        placeholder="Artista" 
                        onChange={evt => setArtist(evt.target.value)}    
                    />
                    <input 
                        placeholder="Música" 
                        onChange={evt => setMusic(evt.target.value)}    
                    />
                    <button onClick={handleSearchButton}>
                        Buscar
                    </button>
                </form>
                <div className="result">
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