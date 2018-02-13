import React, { Component } from 'react';
import { connect } from 'react-redux';

class TomatorosCounter extends Component {
    render() {
        return (
            <div className="tomatoros-counter">
                My Tomatoros: { this.props.tomatoros }
            </div>
        )
    }
}

export default connect(
    (state) => ({
        tomatoros: state.tomatoro.tomatoros
    })
)(TomatorosCounter);
