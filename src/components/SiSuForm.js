import React from 'react';
import '../css/SiSuForm.css';
import GoogleImage from '../static/google.svg';


class SiSuForm extends React.Component {
    render() {
        return (
            <div className="form-container">
                <form>
                    <span className="form-name">{this.props.formName}</span>

                    <span className="line"></span>

                    <label className="form-label">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder={this.props.usernamePlaceholder}
                        className="input-username"
                    ></input>
                    <span className="line-input"></span>

                    <label className="form-label label-password">Password</label>
                    <input 
                        type="text" 
                        name="password" 
                        placeholder={this.props.passwordPlaceholder}
                        className="input-password"
                    ></input>
                    <span className="line-input"></span>

                    <input
                        type="submit"
                        name="submit"
                        className="button-input"
                        value={this.props.submitButton}
                    ></input>

                    <div className="account">
                        <p>{this.props.newAccount}</p>
                        <div className="google-account">
                            <p>{this.props.googleEntry} with Google Account</p>
                            <img src={GoogleImage} className="google-image" alt="Google Icon"></img>
                        </div>
                    </div>

                
                </form>
            </div>
        )
    }
}

export default SiSuForm;