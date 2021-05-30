import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { connect } from "react-redux";
import { login } from "../actions/auth";
import { Redirect } from 'react-router';

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            loading: false,
        };
    }

    onChangeUsername = (e) => {
        this.setState({ username: e.target.value, });
    }

    onChangePassword = (e) => {
        this.setState({ password: e.target.value, });
    }

    handleLogin = (e) => {
        e.preventDefault();

        this.setState({ loading: true });

        this.form.validateAll();

        const { dispatch, history } = this.props;

        if (this.checkBtn.context._errors.length === 0) {
            dispatch(login(this.state.username, this.state.password))
                .then(() => {
                    history.push("/profile");
                    window.location.reload();
                })
                .catch(() => {
                    this.setState({ loading: false });
                })
        } else {
            this.setState({ loading: false });
        }
    }

    render() {
        const { isLoggedIn, message } = this.props;

        if (isLoggedIn) {
            return <Redirect to="/profile" />;
        }

        return (

            <div className="container">
                <div className="main-body">
                    <div className="row">
                        <div className="col-lg-8 offset-sm-2">
                            <h2 className="text-center mt-5">Login</h2>
                            <div className="card">

                                <Form onSubmit={this.handleLogin} ref={(c) => { this.form = c; }}>
                                    <div className="card-body">

                                        <div className="row mb-3">
                                            {/* <div className="col-sm-3">
                                                <h6 className="mb-0">Username</h6>
                                            </div> */}
                                            <div className="col-sm-10 offset-md-1 mt-2 text-secondary">
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    name="username"
                                                    value={this.state.username}
                                                    onChange={this.onChangeUsername}
                                                    validations={[required]}
                                                    placeholder="Username"
                                                />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            {/* <div className="col-sm-3">
                                                <h6 className="mb-0">Password</h6>
                                            </div> */}
                                            <div className="col-sm-10 offset-md-1 mt-2 text-secondary">
                                                <Input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    value={this.state.password}
                                                    onChange={this.onChangePassword}
                                                    validations={[required]}
                                                    placeholder="Password"
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-10 offset-md-1 mt-2 text-secondary">
                                                <button className="btn btn-outline-dark px-4 font-weight-bold" disabled={this.state.loading}>
                                                    {this.state.loading && (
                                                        <span className="spinner-border spinner-border-sm"></span>
                                                    )}
                                                    <span>Login</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {message && (
                                        <div className="row">
                                            <div className="col-sm-10 offset-sm-1">
                                                <div className="form-group">
                                                    <div className="alert alert-danger" role="alert">
                                                        {message}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <CheckButton
                                        style={{ display: "none" }}
                                        ref={(c) => {
                                            this.checkBtn = c;
                                        }}
                                    />

                                </Form>

                            </div >
                        </div >
                    </div >
                </div >
            </div >
        )
    }
}

function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
        isLoggedIn,
        message
    };
}

export default connect(mapStateToProps)(Login);
