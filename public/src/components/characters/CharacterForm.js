import Component from '../Component.js';
import { addCharacter } from '../services/halo-api.js';

class CharacterFrom extends Component {
    onRender(form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            const character = {
                name: formData.get('name'),
                number_games: formData.get('number-of-games'),
                player_character: formData.get('player-character') === 'on',
                games: formData.get('first-appearance'),
                img: formData.get('url')
            };

            addCharacter(character)
                .then(() => {
                    window.location = 'add-characters.html';
                })
                .catch(err => {
                    console.log('Character Not Saved', err);
                });
        });
    }

    renderHTML() {
        const games = this.props.games;
        const optionsList = games.map(game => {
            return /*html*/ `
            <option value="${game.id}">${game.name}</option>
            `;
        });
        return /*html*/ `
            <form class="character-form">
                    <p>
                        <label for="name">Name</label>
                        <input id="name" name="name" type="text" required placeholder="Name of Character">
                    </p>
                    <p>
                        <label for="number-of-games">Number of Games</label>
                        <input id="number-of-games" min="1" max="6" name="number-of-games" type="number" required placeholder="Number of Games">
                    </p>
                    <p>
                        <label for="player-character">Playable Character</label>
                        <input id="player-character" name="player-character" type="radio" required >True
                        <input id="player-character" name="player-character" type="radio" required >False
                    </p>
                    <p>
                        <label for="first-appearance">First Appearance</label>
                        <select name="first-appearance" id="first-appearance" required>
                            <option disabled selected>First Appearace in Series</option>
                            ${optionsList.join('')}
                        </select>
                    </p>
                    <p>
                        <label for="url">Image URL</label>
                        <input id="url" name="url" type="text" required placeholder="http://character-image.img">
                    </p>
                    <p>
                        <button class="add-character">Add Character</button>
                    </p>
            </form>
        `;

    }
}

export default CharacterFrom;