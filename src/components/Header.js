import React from 'react';
// import { Link } from 'react-router-dom';
import '../css/Header.css';

class Header extends React.Component {
    render() {
        return (
            <nav>
                <h1 className="brand-name">
                    Talkie Chit-Chat
                </h1>
            </nav>
        )
    }
}

export default Header;