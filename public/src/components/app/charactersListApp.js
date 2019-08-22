import Component from '../Component.js';
import Header from './Header.js';
import CharacterList from '../characters/CharacterList.js';
import { getCharacters } from '../services/halo-api.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            character: []  
        };

        const characterSection = dom.querySelector('.character-section');
        const characterList = new CharacterList(props);
        const characterListDOM = characterList.renderDOM();
        characterSection.appendChild(characterListDOM);

        getCharacters().then(characters => {
            characterList.update({ characters });
        });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <main>
                    <section class="character-section"></section>
                </main>
                <footer></footer>
            </div>
        `;
    }
}

export default App;