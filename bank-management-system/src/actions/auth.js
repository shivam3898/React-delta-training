import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    EDIT_SUCCESS,
    EDIT_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./types";

import AuthService from "../services/authService";

export const register = (data) => (dispatch) => {
    return AuthService.register(data).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: "User registered successfully",
            });

            return Promise.resolve();
        }, error => {
            const message =
                (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    )
};

export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const update = (data) => (dispatch) => {
    return AuthService.update(data).then(
        data => {
            dispatch({
                type: EDIT_SUCCESS,
                payload: { user: data }
            });

            dispatch({
                type: SET_MESSAGE,
                payload: "User Details Updated",
            });

            return Promise.resolve();
        },
        error => {
            const message =
                (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

            dispatch({
                type: EDIT_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};