import React from 'react';
import './css/footer.css';

function Footer() {
    return (
        <footer className="footer"> 
            <article className="info">
                <div>
                    Desenvolvido por:&nbsp; 
                    <a href="github.com/yurematias">
                        yurematias
                    </a>
                </div>
                <div>
                    Visite o projeto no GitHub:&nbsp;
                    <a href="github.com/yurematias">
                        lyric-book
                    </a>
                </div>
            </article>
            <article className="year">
                2020
            </article>
        </footer>
    );
}

export default Footer;