import React from 'react';
import '../css/MessageContentMobile.css';
import { withFirebase } from './Firebase';
class MessageContentMobile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null
        }
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
        return(
            <div className="content-mobile-container">
                <div className="header-mobile">
                    <h1 className="user-name-mobile">{this.state.name}</h1>
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
                            <button className="input-area-mobile"><i className="fas fa-palette"></i></button>
                            <button className="send-button-mobile">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withFirebase(MessageContentMobile);
