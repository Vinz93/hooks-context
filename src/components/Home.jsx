import React from 'react';
import { Store } from '../Store';
import { fetchDataAction } from "../actions/fetch-episodes";

const Home = () => {
    const { state, dispatch } = React.useContext(Store);

    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch);
    });

    return (
        <div>
            {
                state.episodes.map(episode => {
                    return (
                        <div key={episode.id}>
                            <img src={episode.image.medium}
                                 alt={`Rick and Morty ${episode.name}`}
                            />
                            <div>{episode.name}</div>
                            <section>
                                <div>
                                    Season: {episode.season} Number: {episode.number}
                                </div>
                            </section>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Home;

