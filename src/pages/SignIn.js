import React from 'react';
import Header from '../components/Header';
import SiSuForm from '../components/SiSuForm';

class SignIn extends React.Component {
    render() {
        return(
            <div className="page-container">
                <Header/>
                <SiSuForm 
                    formName="Sign In"
                    usernamePlaceholder="Enter your username..."
                    passwordPlaceholder="Enter your password..."
                    submitButton="SIGN IN"
                    newAccount="Create a new account"
                    googleEntry="Login"
                />
            </div>
        )
    }
}

export default SignIn;