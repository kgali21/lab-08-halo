import Component from '../Component.js';
import CharacterCard from './CharacterCards.js';

class CharacterList extends Component {

    onRender(dom) {
        const characters = this.props.characters;
        console.log(characters);
        characters.forEach(character => {
            
            const props = { character: character };
            const characterCard = new CharacterCard(props);
            const characterCardDOM = characterCard.renderDOM();
            dom.appendChild(characterCardDOM);
        });
    }

    renderHTML() {
        return /*html*/ `
            <ul class="character-display"></ul>
        `;
    }
}

export default CharacterList;