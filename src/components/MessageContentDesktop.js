import React from 'react';
import '../css/MessageContentDesktop.css';
import { directive } from '@babel/types';

class MessageContentDesktop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value : ""};
        this.message = "";

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value });
    }

    handleSubmit(event) {
        let messageArea = document.getElementById("conversation-desktop");
        let messageInput = document.getElementById("message-input-desktop")
        let message = this.state.value + "<br>";
        this.message += message
        messageArea.innerHTML = this.message;
        messageInput.value = "";

        event.preventDefault();
    }

    render() {
        return (
            <div className="message-content-container col-sm-9">
                <div className="header-desktop">
                    <h1 className="user-name-desktop">Via Nguyen</h1>
                </div>
                <div className="message-container-desktop">
                    <div className="conversation-desktop" id="conversation-desktop"></div>
                    <form 
                        className="send-input-desktop" 
                        onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Type a message...."
                            className="message-input-desktop"
                            onChange={this.handleChange}
                            id="message-input-desktop"
                        ></input>
                        <div className="button-group-desktop">
                            <button className="input-area-desktop"><i class="fas fa-palette"></i></button>
                            <input 
                                className="send-button-desktop"
                                type="submit"
                                value="Send"
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default MessageContentDesktop;