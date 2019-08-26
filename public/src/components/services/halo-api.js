const URL = '/api';

export function getCharacters() {
    const url = `${URL}/characters`;

    return fetch(url)
        .then(response => response.json());
}

export function addCharacters(character) {
    const url = `${URL}/characters`;

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(character)
    })
        .then(response => response.json());
}

export function getCharacter(id) {
    const url = `${URL}/characters/${id}`;
    return fetch(url)
        .then(response => response.json());
}

export function getGames() {
    const url = `${URL}/games`;
    return fetch(url)
        .then(response => response.json());
}