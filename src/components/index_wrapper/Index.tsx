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
            {createCard('/post_sample_fetch','post sample fetch')}
            {createCard('/post_sample_axios','post sample axios')}
            {createCard('/calc_sample','calc sample')}
            {createCard('/search_address','住所検索')}
            {createCard('/twitter_clone','Twitter Clone')}
            {createCard('/micro_modal','Micromodal.js')}
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