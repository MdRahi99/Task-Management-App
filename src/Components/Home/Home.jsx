import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const Home = () => {

    const {name} = useContext(AuthContext);

    return (
        <div>
            {name}
        </div>
    );
};

export default Home;