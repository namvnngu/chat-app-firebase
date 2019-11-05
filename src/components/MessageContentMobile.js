import React from 'react';
import '../css/MessageContentMobile.css';

class MessageContentMobile extends React.Component {

    

    render() {
        return(
            <div className="content-mobile-container">
                <div className="header-mobile">
                    <h1 className="user-name-mobile">Via Nguyen</h1>
                    <span className="header-button">&#9776;</span>
                </div>
                <div className="message-container-mobile">
                    <div className="conversation-mobile"></div>
                    <div className="send-input-mobile">
                        <input 
                            type="text" 
                            placeholder="Type a message...."
                            className="message-input-mobile"
                        ></input>
                        <div className="button-group-mobile">
                            <button className="input-area-mobile"><i class="fas fa-palette"></i></button>
                            <button className="send-button-mobile">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MessageContentMobile;