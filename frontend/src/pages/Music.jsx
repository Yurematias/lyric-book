import React from 'react';
import Title from '../components/Title';
import './css/music.css';

function Music() {
    return (
        <section id="music-container">
            <Title style={{fontSize: '30px'}} />
            <header>
                <h2>Título da música</h2>
                <div>
                    <button>Voltar</button>
                    <button>Salvar</button>
                </div>
            </header>
            <article className="lyric-area">
            
            </article>
        </section>
    );
}

export default Music;