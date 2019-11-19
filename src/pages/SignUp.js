import React from 'react';

import '../css/SiSuForm.css';
import Header from '../components/Header';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../components/Firebase';
// import GoogleImage from '../static/google.svg';
// import SignWithGoogle from '../components/SignWithGoogle'

// import GoogleLogin from 'react-google-login';

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    error: null,
}
class SignUpFormBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
//	this.signin = this.signin.bind(this);
    }

    onSubmit = (event) => {
        const { username, email, password } = this.state;
	    event.preventDefault();

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({...INITIAL_STATE})
                this.props.history.push('/message-chat')
            })
            .catch(error => {
                this.setState({error})
            });

        }
    
	// signup = () => {
		// this.props.firebase
			// .doSignInWithGoogle()
			// .then((result) => {
				// const username = result.displayName;
				// this.setState({username});
			// })
	// }
    
    onChange = (event) => {
        this.setState({ [event.target.name] : event.target.value });
    }
    render() {
        const {
            username,
            email,
            password,
            error,
        } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <span className="form-name">Sign Up</span>

                <span className="line"></span>

                <label className="form-label">Email</label>
                <input 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    placeholder="Enter your email..."
                    className="input-username"
                    required
                ></input>
                <span className="line-input"></span>

                <label className="form-label">Your name</label>
                <input 
                    type="text" 
                    name="username"
                    value={username}
                    onChange={this.onChange} 
                    placeholder="Enter your name..."
                    className="input-username"
                    required
                ></input>
                <span className="line-input"></span>

                <label className="form-label label-password">Password</label>
                <input 
                    type="password" 
                    name="password"
                    value={password}
                    onChange={this.onChange} 
                    placeholder="Choose a new password..."
                    className="input-password"
                    required
                ></input>
                <span className="line-input"></span>

                {error && <p>{error.message}</p>}

                <button
                    type="submit"
                    name="submit"
                    className="button-input"
                >SIGN UP</button>
		{/*<div className="google-sign-up-box">
			<img src={GoogleImage}></img>
			<button onClick={this.signup}>GOOGLE SIGN-UP</button>	
		</div>*/}               
            </form>
        )
    }
}

const SigUpForm = withRouter(withFirebase(SignUpFormBase));

// const responseGoogle = (response) => {
    // console.log(response);
// }

const SignUp = () => (
    <div className="page-container">
        <Header/>
        <div className="form-container">
            <SigUpForm/>
	{/* <SignWithGoogle/> */}
	{/* <GoogleLogin
                clientId="-i21gtblk0irdpvq2ltqtju471eals2eh.apps.googleusercontent.com"
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                className="google-login-button"
            /> */}
        </div>
    </div>
)
export default SignUp;
