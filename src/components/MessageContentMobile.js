import React from 'react';
import '../css/MessageContentMobile.css';

class MessageContentMobile extends React.Component {

    

    render() {
        return(
            <div className="content-mobile-container">
                <div className="header-mobile">
                    <h1 className="user-name-mobile">Nam Nguyen</h1>
                    <button className="toggle-board-button" onClick={() => {this.toggleBoard()}}><span>&#9776;</span></button>
                </div>
            </div>
        )
    }
}

export default MessageContentMobile;