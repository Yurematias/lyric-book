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
    const pageToReturn = localStorage.getItem('page_to_return');

    function handleBackButton() {
        history.push(pageToReturn);
        history.push();
    }

    async function handleSaveButton() {

        let musicToInsert;

        try {
            musicToInsert = await api.post('musics', { artist, name, lyrics });
            console.log(musicToInsert);
        } catch (error) {
            console.log('música já existe no banco, seguindo execução');
        }

        try {
            await api.post('user_musics', { musicId: musicToInsert.data.id }, {
                headers: {
                    Authorization: localStorage.getItem('user_id')
                }
            });
            alert('musica salva com sucesso');
            history.push('/profile');
        } catch (error) {
            alert('não foi possível salvar a música');
        }
    }

    const button = (
        <button className="save" onClick={handleSaveButton}>
            Salvar
        </button>
    );

    return (
        <section id="music-container" className="max-viewport">
            <Title style={{ fontSize: '55px' }} />
            <header>
                <h2>{artist} - {name}</h2>
                <div>
                    <button className="back" onClick={handleBackButton}>Voltar</button>
                    {
                        pageToReturn === '/search' ? button : undefined
                    }
                </div>
            </header>
            <article className="lyric-area">
                {lyrics.split('\n').map(el => {
                    if (el.length === 0) {
                        return <br />
                    }
                    return el;
                }).map((item, i) => <p key={i}>{item}</p>)}
            </article>
        </section>
    );
}

export default Music;