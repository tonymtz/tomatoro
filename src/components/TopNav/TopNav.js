import './TopNav.css';

export default function (React) {
    class Menu extends React.Component {
        empty = () => {
            console.log('empty!');
        };

        render() {
            return (
                <nav className="top-nav">
                    <div className="container">
                        <div className="logo">
                            <a href="#">
                                <img src="svg/logo-tomatoro.svg" alt="tomatoro logo"/>
                            </a>
                        </div>

                        <ul>
                            <li>
                                <a href="#" onClick={this.empty}>How It Works</a>
                            </li>

                            <li>
                                <a href="#" onClick={this.empty}>Contact</a>
                            </li>

                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="http://softwaredevtools.com/">
                                    SoftwareDevTools
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            );
        }
    }

    return Menu;
}
