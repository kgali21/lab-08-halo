const URL = '/api';

export function getCharacters() {
    const url = `${URL}/characters`;

    return fetch(url)
        .then(response => response.json());
}