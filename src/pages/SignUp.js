import React from 'react';
import Header from '../components/Header';
import SiSuForm from '../components/SiSuForm';

class SignUn extends React.Component {
    render() {
        return(
            <div className="page-container">
                <Header/>
                <SiSuForm 
                    formName="Sign Up"
                    usernamePlaceholder="Choose a new username..."
                    passwordPlaceholder="Choose a new password..."
                    submitButton="SIGN UP"
                    newAccount=""
                    googleEntry="Sign up"
                />
            </div>
        )
    }
}

export default SignUn;