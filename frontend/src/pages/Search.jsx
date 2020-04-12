import React from 'react';
import Title from '../components/Title';
import './css/search.css';

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
                    
                </div>
            </div>
        </section>
    );
}

export default Search;