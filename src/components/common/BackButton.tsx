import React from 'react';
import {Link} from "react-router-dom";
import "./back-button.css"

export default function BackButton() {
    return (
        <Link to="/" className="back-button btn btn-primary">
            戻る
        </Link>
    );
}