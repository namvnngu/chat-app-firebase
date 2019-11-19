import React from 'react';
import '../css/UserBoardMobile.css'
import { withFirebase }from './Firebase';

import { withRouter } from 'react-router-dom';

class UserBoardMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {boardWidth: 325};
   
        this.redirectSignOut = this.redirectSignOut.bind(this);
    }
    
    redirectSignOut() {
        this.props.firebase.doSignOut()
            .then(() => {
                this.props.history.push('/sign-in')
            })
    }

    toggleBoard() {
        if(this.state.boardWidth === 325) {
            this.setState({boardWidth: 0})
        } else {
            this.setState({boardWidth: 325})
        }
    }
    
    render() {
        return (
            <div 
                className="user-mobile-board"
                style={{ width: this.state.boardWidth }}
            >
                <div className="header-mobile-sideboard">
                    <h1 className="user-name-mobile">Nam Nguyen</h1>
                <button className="toggle-board-button-close" onClick={() => {this.toggleBoard()}}><span>&#9746;</span></button>
                </div>
                <button className="toggle-board-button-open" onClick={() => {this.toggleBoard()}}><span></span></button>
                <p className="friend-name-mobile active-friend">Via Nguyen</p>
                <p className="friend-name-mobile">David Nguyen</p>
                <p className="friend-name-mobile">David Nguyen</p>
                <p className="friend-name-mobile">David Nguyen</p>
                <p className="friend-name-mobile">David Nguyen</p>
                <p className="friend-name-mobile">David Nguyen</p>
                <p className="friend-name-mobile">David Nguyen</p>
                <p className="friend-name-mobile">David Nguyen</p>
                <p className="friend-name-mobile">David Nguyen</p>
                <p className="friend-name-mobile">David Nguyen</p>
                <p className="friend-name-mobile">David Nguyen</p>
                <p className="friend-name-mobile">David Nguyen</p>
                <p className="friend-name-mobile">David Nguyen</p>
                <p className="friend-name-mobile">David Nguyen</p>
                <p className="friend-name-mobile">David Nguyen</p>
                <p className="friend-name-mobile">David Nguyen</p>
                <p className="friend-name-mobile">David Nguyen</p>
                <p className="friend-name-mobile">David Nguyen</p>
                <p className="friend-name-mobile">David Nguyen</p>
                
                <p className="log-out-mobile" onClick={this.redirectSignOut}>Log Out</p>
            </div>
        )
    }
}

export default withRouter(withFirebase(UserBoardMobile));
