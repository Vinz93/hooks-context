import React from 'react';
import { Store } from '../Store';

const Home = () => {
    const store = React.useContext(Store);
    return (
        <div> Home {console.log(store)}</div>
    )
};

export default Home;

