import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class TomatorosCounter extends Component {
    render() {
        return (
            <h2 className="tomatoros-counter">
                My Tomatoros: <span className="highlight">{ this.props.tomatoros }</span>
            </h2>
        )
    }
}

export default connect(
    (state) => ({
        tomatoros: state.tomatoro.tomatoros
    })
)(TomatorosCounter);
