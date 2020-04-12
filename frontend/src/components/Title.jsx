import React from 'react';
import './css/title.css'

function Title(props) {
    return (
        <h1 className="title" style={props.style}>
            <div className="black">
                Lyric
            </div>
            <div className="blue">
                Book
            </div>
        </h1>
    )
}

export default Title;