import Component from '../Component.js';
import Header from './Header.js';

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
                </main>
                <footer></footer>
            </div>
        `;
    }
}

export default App;