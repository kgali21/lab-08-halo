import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
            <img class="logo" src="./assets/Halo Transparent Logo.png" alt="halo logo">
            <nav class="navigation">
                    <a href="./">Home</a>
                    <a href="./characters.html">Characters</a>
                    <a href="./add-characters.html">Add Characters</a>
            </nav>
            </header>
        `;
    }
}

export default Header;