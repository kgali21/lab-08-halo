import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
            <img class="logo" src="./assets/Halo Transparent Logo.png" alt="halo logo">
            <nav class="navigation">
                    <a href="./">Home</a>
                    <a href="./">Characters</a>
                    <a href="./">Add Characters</a>
            </nav>
            </header>
        `;
    }
}

export default Header;