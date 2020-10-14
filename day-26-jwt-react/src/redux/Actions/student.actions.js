import axios from 'axios';
// import jwt from 'jwt-decode';s

// constant
export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_ERROR = 'GET_ERROR';

// functionnya dari constant
export const setRegister = (data) => {
    return {
        type: REGISTER,
        payload: data,
    };
};

export const setLogin = (data) => {
    return {
        type: LOGIN,
        payload: data,
    };
};

export const getUserInfo = (data) => {
    return {
        type: GET_USER_INFO,
        payload: data,
    };
};

export const getError = (data) => {
    return {
        type: GET_ERROR,
        payload: data,
    };
};

// function isi dari setnya
export const registerActions = (values, event, history) => (dispatch) => {
    event.preventDefault();
    console.log('tes param', values);

    return axios
        .post(`${process.env.REACT_APP_BACKEND_ENDPOINT}/`, values)
        .then((response) => {
            console.log('res', response);
            dispatch(setRegister(response.data.student));
            history.push('/login');
        })
        .catch((error) => {
            console.log(error);
        });
};

export const loginActions = (values, event, history) => {
    return (dispatch) => {
        event.preventDefault();
        console.log('tes berhasil', values);

        return axios
            .post(
                `${process.env.REACT_APP_BACKEND_ENDPOINT}/student/login`,
                values
            )
            .then((response) => {
                console.log(response);

                if (response.data.token !== undefined) {
                    console.log('bener tokennya ada');
                    localStorage.setItem('token', response.data.token);

                    dispatch(setLogin(response.data.token));
                    history.push('/');
                }
            })
            .catch((error) => {
                console.log(error.response.data);
                dispatch(getError(error.response.data));
            });
    };
};

export const getUserInfoAction = () => async (dispatch) => {
    const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/student/me`;
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };

    const userInfo = await axios.get(url, config);

    dispatch(getUserInfo(userInfo.data.user));
};
