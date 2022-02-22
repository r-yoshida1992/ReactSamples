import React, {useState, Fragment} from 'react';
import BackButton from "../common/BackButton";
import './twitter_clone.css'

export default function TwitterClone(){
    return (
        <Fragment>
            <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList"></script>
            <script src="https://cdn.jsdelivr.net/npm/focus-visible@5.2.0/dist/focus-visible.min.js"
                    integrity="sha384-xRa5B8rCDfdg0npZcxAh+RXswrbFk3g6dlHVeABeluN8EIwdyljz/LqJgc2R3KNA"
                    crossOrigin="anonymous" defer></script>
            <div className='twitter-clone-container'>
                <div className='twitter-clone-left'></div>
                <div className='twitter-clone-center'>
                    <div className='twitter-clone-head'>
                        <div className='title mt-2'>
                            ホーム
                        </div>
                        <div className='head-content mt-2'>
                            <div className='head-logo me-3'>
                            </div>
                            <div contentEditable={true} className='head-text'>
                            </div>
                        </div>
                    </div>
                    <div className='twitter-clone-content'>

                    </div>
                </div>
                <div className='twitter-clone-right'></div>
                <BackButton />
            </div>
        </Fragment>
    )

}