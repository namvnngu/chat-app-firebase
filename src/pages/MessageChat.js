import React from 'react';
import { directive } from '@babel/types';
import MediaQuery from 'react-responsive';

import UserBoardDesktop from '../components/UserBoardDesktop';
import UserBoardMobile from '../components/UserBoardMobile';
import MessageContentDesktop from '../components/MessageContentDesktop';
import '../css/MessageChat.css'

class MessageChat extends React.Component {
    render() {
        return (
            <div className="message-chat-container row">
                <MediaQuery minWidth={1100} >
                    <UserBoardDesktop/>
                    <MessageContentDesktop/>
                </MediaQuery>
                <MediaQuery maxWidth={1100}>
                    <UserBoardMobile/>
                </MediaQuery>
            </div>
        )
    }
}

export default MessageChat