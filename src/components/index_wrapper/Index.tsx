import React from 'react';
import './index.css';
import {Link} from "react-router-dom";

function Index() {
    const appStyle = {
        display: 'flex',
        flexWrap: 'wrap' as const,
        height: 'auto'
    }
    return (
        <div className="App" style={appStyle}>
            {createCard('/hello','hello world')}
        </div>
    );
}

function createCard(path: string, title: string) {
    const cardStyle = {
        width: '200px',
        height: '100px',
        textAlign: 'center' as const,
        overflowWrap: 'break-word' as const,
        margin: '4px'
    }
    return (
        <div className="mdc-card" style={cardStyle}>
            <Link to={path} style={cardStyle}>
                {title}
            </Link>
        </div>
    );
}

export default Index;
