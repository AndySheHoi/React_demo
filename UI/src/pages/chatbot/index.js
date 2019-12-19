import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Chatbot extends PureComponent {
    render() {
        const { loginStatus } = this.props
        if ( loginStatus ) {
            return window.location.href = 'localhost:5000'
        } else {
            return <Redirect to='/login'/>
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
});

export default connect(mapState, null)(Chatbot);