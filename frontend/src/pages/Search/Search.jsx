import React from 'react';
import Title from '../../components/Title';
import './styles/general.css';
import './styles/mobile.css';

function Search() {
    return (
        <section id="search-container">
            <div className="title">
                <Title style={{ fontSize: '72px', fontWeight: 600 }}/>
            </div>
            <div className="search-div">
                <form action="">
                    <h2>Busca de música</h2>    
                    <input placeholder="Artista"/>
                    <input placeholder="Música"/>
                    <button>Buscar</button>
                </form>
                <div className="result">
                    <h2>Letra encontrada</h2>
                    <p className="lyric">
                        Did you stand there all alone?
                        Oh I cannot explain what's going down
                        I can see you standing next to me
                        In and out somewhere else right now

                        You sigh, look away
                        I can see it clear as day
                        Close your eyes, so afraid...
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem...
                    </p>
                </div>
            </div>
            <button>
                voltar
            </button>
        </section>
    );
}

export default Search;