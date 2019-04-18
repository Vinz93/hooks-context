const BASE_URL = 'https://api.tvmaze.com/singlesearch';

export const fetchEpisodes = async () => {
    const data = await fetch(`${BASE_URL}/shows?q=rick-&-morty&embed=episodes`);
    return data.json();
};


