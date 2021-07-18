import React from 'react';
import { useHistory } from 'react-router-dom';
import './home.scss';

const Home: React.FC = () => {
    const history = useHistory();
    const onLogin = () => {
        history.push('/suggestions/eventTypes');
    };

    return (
        <div>
            <button onClick={onLogin}>Login</button>
        </div>
    );
};

export default Home;
