import React from 'react';
import BaseUrl from '../utils/constant';
import validate from '../utils/validate';

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            errors: {
                username: '',
                email: '',
                password: '',
            },
        };
    }

    signup = () => {
        let { username, email, password } = this.state;
        fetch(BaseUrl + 'users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username,
                    email,
                    password,

                },
            }),
        })
            .then((res) => res.json())
            .then((data) => this.props.navigate('/login'));
    };

    handleChange = (event) => {
        let { name, value } = event.target;
        let errors = { ...this.state.errors };

        validate(errors, name, value);

        this.setState({
            [name]: value,
            errors,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        const { email, password, errors, username } = this.state;
        return (

            <div className="signup-page">
                    <h1 className="sign-up">Sign up</h1>
                    <div className="account">
                        Have an account?
                        <a
                            href="../login/">
                            Log in
                        </a>
                    </div>
                    <input
                        type="text"
                        className="input"
                        name="username"
                        placeholder="Your Name"
                        onChange={this.handleChange}
                        value={username}
                    />
                    <span>{errors.username}</span>
                    <input
                        type="email"
                        className="input"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                        value={email}
                    />
                    <span>{errors.email}</span>
                    <input
                        type="password"
                        className="input"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={password}
                    />
                    <span>{errors.password}</span>

                    <button
                        type="submit"
                        className="btn"
                        onClick={this.signup}
                    >
                        Signup
                    </button>
            </div>

        );
    }
}

export default Signup;