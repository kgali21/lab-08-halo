import Component from '../Component.js';
import Header from './Header.js';
import CharacterForm from '../characters/CharacterForm.js';
import { getGames } from '../services/halo-api.js';

class AddCharacterApp extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
     
        const main = dom.querySelector('main');
      
        getGames()
            .then(games => {
                const characterForm = new CharacterForm({ games });
                main.appendChild(characterForm.renderDOM());
            });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <main>
                </main>
                <footer></footer>
            </div>
        `;
    }
}

export default AddCharacterApp;