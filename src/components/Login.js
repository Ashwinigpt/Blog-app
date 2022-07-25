import React from 'react';
import BaseUrl from '../utils/constant';
import validate from '../utils/validate';
import withRouter from '../utils/withrouter';
import UserContext from './UserContext';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        errors: {
            email: '',
            password: '',
        },
    };

    static contextType = UserContext;

    login = () => {
        let { email, password } = this.state;
        fetch(BaseUrl + 'users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    email,
                    password,
                },
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                this.context.persistUser(data.user);
                this.props.navigate('/');
            });
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
        const { email, password, errors } = this.state;
        return (

            <div className="signup-page">
                    <h1 className="sign-up">Login</h1>
                    <div className="account">
                        Need an account?
                        <a
                            href="../signup/">
                            Log in
                        </a>
                    </div>
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

export default withRouter(Login);