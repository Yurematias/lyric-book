import React from 'react';
import Title from '../../components/Title';
import './styles/general.css';

function Music() {
    return (
        <section id="music-container" className="max-viewport">
            <Title style={{fontSize: '55px'}} />
            <header>
                <h2>Título da música</h2>
                   <div>
                    <button className="back">Voltar</button>
                    <button className="save">Salvar</button>
                </div>
            </header>
            <article className="lyric-area">
                It's not in the way that you hold me
                it's not in the way you say you care
                It's not in the way you've been treating my friends
                It's not in the way that you stayed till the end
                It's not in the way you look or the things that you say that you'll do

                Hold the line, love isn't always on time, oh oh oh
                Hold the line, love isn't always on time, oh oh oh

                It's not in the words that you told me, girl
                It's not in the way you say you're mine
                It's not in the way that you came back to me
                It's not in the way that your love set me free
                It's not in the way you look or the things that you say that you'll do

                Hold the line, love isn't always on time, oh oh oh
                Hold the line, love isn't always on time, oh oh oh

                It's not in the words that you told me
                It's not in the way you say you're mine
                It's not in the way that you came back to me
                It's not in the way that your love set me free
                It's not in the way you look or the things that you say that you'll do

                Hold the line, love isn't always on time oh oh oh
                Hold the line, love isn't always on the time
                Love isn't always on time

                Hold the line, love isn't always on time
                Love isn't always, love isn't always on time
                Hold the line, love isn't always on time
                Love isn't always on time
                Love isn't always on time
                Love isn't always on time oh oh oh

                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae hic doloremque corrupti, laudantium aliquid eveniet nobis provident debitis velit voluptas fugit a tempora! Aliquam illum fuga rerum nam ducimus! Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati impedit nemo maiores, magni laudantium, fugiat explicabo minima ipsa totam, autem exercitationem id hic quis fuga voluptas excepturi laboriosam quaerat voluptatum.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aliquam modi eum velit minima tempora dolorem, ducimus accusantium, consectetur distinctio dolores? Dolorum unde, inventore sint ratione praesentium temporibus architecto voluptas!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam quaerat quo voluptate adipisci beatae impedit ut odit illo excepturi, fugit esse deleniti assumenda eaque, ipsam eligendi sit. Repudiandae, harum.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum totam harum doloribus quo, culpa impedit dolores numquam, rem eveniet, quasi dolorum ut praesentium sed neque dolore expedita suscipit quaerat possimus!
            </article>
        </section>
    );
}

export default Music;