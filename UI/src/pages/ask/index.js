import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
//import { actionCreators } from './store';
//import {  } from './style';

class Ask extends PureComponent {
    render() {
        const { loginStatus } = this.props
        if ( loginStatus ) {
            return (
                <div>Ask your question</div>
            )
        } else {
            return <Redirect to='/login'/>
        }    
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
});

export default connect(mapState, null)(Ask);