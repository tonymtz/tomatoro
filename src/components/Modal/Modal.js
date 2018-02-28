import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
    updateBody = () => {
        // TODO bad
        let bodyElement = document.getElementsByTagName('body')[ 0 ];

        if (this.props.isModalOpen) {
            bodyElement.className = 'blurry';
        } else {
            bodyElement.className = '';
        }
    };

    render() {
        this.updateBody();

        return (
            <div id="modal" className={ this.props.isModalOpen ? '' : 'hidden' }>
                <header>
                    <h1>Edit timelapses</h1>

                    <button
                        className="close"
                        onClick={ () => this.props.onClick() }
                        aria-label="close">
                        X
                    </button>
                </header>

                { this.props.children }

                <div className="col-100 control">
                    <button onClick={ () => this.props.onClick() }>Close</button>
                </div>
            </div>
        );
    }
}

export default Modal;
