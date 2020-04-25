import React from 'react';
import Title from '../../components/Title';
import './styles/general.css';
import { useHistory } from 'react-router-dom';
import api from './../../services/api';

function Music() {

    const history = useHistory();
    
    const artist = localStorage.getItem('music_artist');
    const name = localStorage.getItem('music_name');
    const lyrics = localStorage.getItem('music_lyrics');
    const musicId = localStorage.getItem('music_id');

    function handleBackButton() {
        history.push(localStorage.getItem('page_to_return'));
    }

    async function handleSaveButton() {
        
        await api.post('musics', { artist, name, lyrics });
        
        const musicToInsert = await api.get(`music?name=${name}&artist=${artist}`);

        try {
            api.post('user_musics', { musicId: musicToInsert.data.id }, {
                headers: {
                    Authorization: localStorage.getItem('user_id')
                }
            })
            alert('musica salva com sucesso');            
        } catch (error) {
            alert('não foi possível salvar a música');
        }
    }

    return (
        <section id="music-container" className="max-viewport">
            <Title style={{fontSize: '55px'}} />
            <header>
                <h2>{artist} - {name}</h2>
                <div>
                    <button className="back" onClick={handleBackButton}>Voltar</button>
                    <button className="save" onClick={handleSaveButton}>Salvar</button>
                </div>
            </header>
            <article className="lyric-area">
                {lyrics.split('\n').map(el => {
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