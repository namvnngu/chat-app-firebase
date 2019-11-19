import React from 'react';
// import { Link } from 'react-router-dom';
// import { directive } from '@babel/types';
import '../css/UserBoardDesktop.css';
import { withFirebase }from './Firebase';

import { withRouter } from 'react-router-dom';

class UserBoardDesktop extends React.Component {
    constructor(props) {
        super(props)

        this.redirectSignOut = this.redirectSignOut.bind(this);
    }
    redirectSignOut() {
        this.props.firebase.doSignOut()
            .then(() => {
                this.props.history.push('/sign-in')
            })
    }
    render() {
        return (
            <div className="user-board col-sm-3">
                <h1 className="user-name">Nam Nguyen</h1>
                <p className="friend-name active-friend">Via Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <p className="friend-name">David Nguyen</p>
                <button className="log-out col-sm-3" onClick={this.redirectSignOut}>Log Out</button>
            </div>
        )
    }
}

export default withRouter(withFirebase(UserBoardDesktop));
