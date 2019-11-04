import React from 'react';
import '../css/UserBoardMobile.css'

class UserBoardMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {boardWidth: 300};
    }
    
    closeBoard() {
        this.setState({boardWidth: 0})
    }
    
    render() {
        return (
            <div 
                className="user-mobile-board"
                style={{ width: this.state.boardWidth }}
            >
                <div className="header-mobile-sideboard">
                    <h1 className="user-name-mobile">Nam Nguyen</h1>
                    <button className="close-board-button" onClick={() => {this.closeBoard()}}><span>&#9776;</span></button>
                </div>
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
                <p className="log-out-mobile">Log Out</p>
            </div>
        )
    }
}

export default UserBoardMobile;