import Component from '../Component.js';

class CharacterCard extends Component {
    renderHTML() {
        const character = this.props.character;

        return /*html*/`
        <li class="character-container">
        <div class="name-container">
            <h2 class="name">${character.name}</h2>
            <p class="number-games">Total Games: ${character.number_games}</p>
            <p class="playable-character">Playable Character: ${character.player_character}</p>
        </div>
        <div class="image-container">
            <img src="${character.img}" alt="${character.name}">
        </div>
        <div class="games-container">
            <h3>Game Appearances</h3>
            <p class="game-list">${character.game}</p>
        </div>
        </li>
        `;
    }
}

export default CharacterCard;