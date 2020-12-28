import React from 'react';
import LoginForm from '../components/LoginForm';
import SubmitBtn from '../components/SubmitBtn';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return(
            <div>
                <LoginForm
                    email={this.state.email}
                    password={this.state.password}
                    change={this.handleInputChange}
                />
                <SubmitBtn/>
            </div>
            
        )
       
    }
}

export default Login;