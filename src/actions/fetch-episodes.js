import { fetchEpisodes } from '../requets/tvmaze';

export const fetchDataAction = async (dispatch) => {
    const { _embedded: { episodes } } = await fetchEpisodes();
    return dispatch({
        type: 'FETCH_DATA',
        payload: episodes
    });
};
