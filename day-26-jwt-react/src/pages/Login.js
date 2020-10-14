import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import { loginActions } from '../redux/Actions/student.actions';

function Login() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.student);
    const history = useHistory();
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);

    //handle change form
    const handleChange = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        dispatch(loginActions(login, event, history));

        if (user.error !== null) {
            setError(user.error);
        }
    };

    const errorMessage = user.error && user.error;

    return (
        <>
            {errorMessage && alert(errorMessage)}

            <div>
                <h1>Login Page</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type='email'
                        name='email'
                        value={login.email}
                        placeholder='masukan email anda'
                        onChange={(event) => handleChange(event)}
                    />
                    <input
                        type='password'
                        name='password'
                        value={login.password}
                        placeholder='masukan password anda'
                        onChange={(event) => handleChange(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Login;
