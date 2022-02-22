import React, {Fragment, useEffect} from 'react';
import BackButton from "../common/BackButton";
import "./micro_modal.css"
import MicroModal from "micromodal";


export default function MicroModalSample() {
    // DOM構築後に動作させる
    useEffect(() => {
        MicroModal.init({
            openClass: 'is-open',
            disableScroll: true
        })
    })
    return (
        <Fragment>
            <div className="micro-modal">
                <section className="wrapper">
                    <button className="modal__btn" data-micromodal-trigger="modal-1" role="button">Trigger</button>
                </section>
                <div id="modal-1" aria-hidden="true">
                    <div className="modal__overlay" tabIndex={-1} data-micromodal-close>
                        <div className="modal__container" role="dialog" aria-modal="true"
                             aria-labelledby="modal-1-title">
                            <p>Modal Open.</p>
                            <button className="modal__close" aria-label="Close modal" data-micromodal-close>Close
                            </button>
                        </div>
                    </div>
                </div>
                <BackButton/>
            </div>
        </Fragment>
    )
}