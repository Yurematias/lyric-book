import React from 'react';
import styles from './css/footer.css.js';
import { GoMarkGithub } from 'react-icons/go';

const { footer, info, link, year } = styles;

function Footer() {
    return (
        <footer style={footer}> 
            <article style={info}>
                <div>
                    Desenvolvido por:&nbsp; 
                    <a href="http://github.com/yurematias" style={link}>
                        yurematias
                    </a>
                </div>
                <div>
                    Visite o projeto no GitHub:&nbsp;
                    <a href="https://github.com/Yurematias/lyric-book" style={link}>
                        <GoMarkGithub size="1rem"/>
                        lyric-book
                    </a>
                </div>
            </article>
            <article style={year}>
                2020
            </article>
        </footer>
    );
}

export default Footer;