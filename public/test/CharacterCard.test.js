import CharacterCard from '../src/components/characters/CharacterCards.js';

const test = QUnit.test;

QUnit.module('Render Character Card');

test('render html from data', assert => {
    const people = {
        name: 'Master Chief',
        number_games: 6,
        player_character: true,
        games: ['Halo: Combat Evolved', ' Halo 2', ' Halo 3', ' Halo 4', ' Halo 5: Guardians', ' Halo: Reach'],
        img: '../assets/imgs/master chief.png'
    };

    const expected = /*html*/`
    <li class="character-container">
        <div class="name-container">
            <h2 class="name">Master Chief</h2>
            <p class="number-games">Total Games: 6</p>
            <p class="playable-character">Playable Character: true</p>
        </div>
        <div class="image-container">
            <img src="../assets/imgs/master chief.png" alt="Master Chief">
        </div>
        <div class="games-container">
            <h3>Game Appearances</h3>
            <p class="game-list">Halo: Combat Evolved, Halo 2, Halo 3, Halo 4, Halo 5: Guardians, Halo: Reach</p>
        </div>
    </li>
    `;

    const props = { character: people };
    const characterCard = new CharacterCard(props);
    const html = characterCard.renderHTML();

    assert.htmlEqual(html, expected);
});