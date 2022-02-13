import React from 'react';
import {Link} from "react-router-dom";

function HelloWorld() {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    }
    const pStyle = {
        width: '100%',
        textAlign: 'center' as const,
        fontSize: '9vw'
    }
    return (
        <div className="App">
            <div className="container" style={containerStyle}>
                <p style={pStyle}>Hello World</p>
            </div>
            <Link to="/">
                <button className="mdc-button mdc-button--raised">
                    <span className="mdc-button__label">戻る</span>
                </button>
            </Link>
        </div>
    );
}

export default HelloWorld;
