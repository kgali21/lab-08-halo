import Component from '../Component.js';
import Header from './Header.js';
import CharacterList from '../characters/CharacterList.js';
import character from '../data/character.js';


class App extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
        
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