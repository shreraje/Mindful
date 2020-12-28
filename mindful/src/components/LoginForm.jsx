import { PromiseProvider } from 'mongoose';
import React from 'react';

function LoginForm(props) {
    return(
        <form>
            <input
                placeholder="Email"
                type="text"
                name="email"
                value={props.email}
                onChange={props.change}
            />

            <input
                placeholder="Password"
                type="text"
                name="password"
                value={props.password}
                onChange={props.change}
            />
        </form> 
    );
};

export default LoginForm;