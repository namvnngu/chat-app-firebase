import React from 'react';
import '../css/MessageContentDesktop.css';
// import { directive } from '@babel/types';
import { withFirebase } from './Firebase';

class MessageContentDesktop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value : "",
            name: null,
        };
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

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                
                // Current User
                let currentUserID = this.props.firebase.currentUser();
                this.props.firebase.user(currentUserID).once('value', (snapshot) => {
                    let name = snapshot.val().username;
                    this.setState({"name": name})
                })
            }
        })
    }

    componentWillUnmount() {
         this.listener();
    }

    render() {
        return (
            <div className="message-content-container col-sm-9">
                <div className="header-desktop">
                    <h1 className="user-name-desktop">{this.state.name}</h1>
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
                            <button className="input-area-desktop"><i className="fas fa-palette"></i></button>
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

export default withFirebase(MessageContentDesktop);
