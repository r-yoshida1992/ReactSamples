import React from 'react';
import './index.css';
import {Link} from "react-router-dom";

export default function Index() {
    const appStyle = {
        display : 'flex' as string,
        flexWrap: 'wrap' as const,
        height: 'auto' as string,
    }
    return (
        <div className="App" style={appStyle}>
            {createCard('/hello','hello world')}
            {createCard('/post_sample','post sample')}
        </div>
    );
}

function createCard(path: string, title: string) {
    return (
        <div className='mdc-card index-card'>
            <Link to={path}>
                {title}
            </Link>
        </div>
    );
}