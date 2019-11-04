import React from 'react';
import '../css/MessageContentDesktop.css';
import { directive } from '@babel/types';

class MessageContentDesktop extends React.Component {
    render() {
        return (
            <div className="message-content-container col-sm-9">
                <h1>Via Nguyen</h1>
            </div>
        )
    }
}

export default MessageContentDesktop;