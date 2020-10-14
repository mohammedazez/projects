import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserInfoAction } from '../redux/Actions/student.actions';

function Home() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.student);

    useEffect(() => {
        dispatch(getUserInfoAction());

        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            {user && (
                <>
                    <h2>Halo {user.data.name}</h2>
                </>
            )}
        </div>
    );
}

export default Home;
