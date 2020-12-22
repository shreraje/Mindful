import React from 'react';
import './Welcome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Welcome = () => {
    return (

        <div>
            <div className="container">
                <div className="display-4">
                    <h1 className="jumbotron bg-success text-white" style={{ textAlign: "center" }}>Welcome to Mindful Meditation App</h1>
                    <span class="d-inline-flex p-2 bg-info text-white" style={{ fontWeight: "bold" }}>Please Login First!!!</span>
                    
                        <div className="form-group">
                                <label for="exampleDropdownFormEmail2" style={{ fontWeight: "normal" }}>Email address</label>
                                <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"></input>
                        </div>
                        <div className="form-group">
                                <label for="exampleDropdownFormPassword2" style={{ fontWeight: "normal" }}>Password</label>
                                <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password"></input>
                        </div>
                        <button type="submit" className="btn btn-success btn-lg" style={{ fontWeight: "bold" }}>Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;