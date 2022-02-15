import React from 'react';
import {Link} from "react-router-dom";
import BackButton from "../common/BackButton";

function HelloWorld() {
    // スタイルの宣言
    const containerStyle = {
        display: 'flex' as string,
        alignItems: 'center' as string,
        width: '100%' as string,
    }
    const pStyle = {
        width: '100%' as string,
        textAlign: 'center' as const,
        fontSize: '9vw' as string,
    }
    return (
        <div className="App">
            <div style={containerStyle}>
                <p style={pStyle}>Hello World</p>
            </div>
            <BackButton />
        </div>
    );
}

export default HelloWorld;
