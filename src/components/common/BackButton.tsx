import React from 'react';
import {Link} from "react-router-dom";

function BackButton() {
    return (
        <Link to="/">
            <button className="mdc-button mdc-button--raised">
                <span className="mdc-button__label">戻る</span>
            </button>
        </Link>
    );
}

export default BackButton;
