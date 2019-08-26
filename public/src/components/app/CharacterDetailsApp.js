import Component from '../Component.js';
import Header from '../app/Header.js';
import QUERY from '../services/QUERY.js';
import { getCharacter } from '../services/halo-api.js';

class CharacterDetailsApp extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        // const main = dom.querySelector('main');

        const params = QUERY.parse(window.location.search);
        const id = params.id;

        if(!id) {
            window.location = 'characters.html';
            return;
        }

        getCharacter(id)
            .then(character => {
                console.log(character);
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

export default CharacterDetailsApp;