import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <h1 className="title header__title">Aleksei Rybkin</h1>
                    <p className="header__description">HTML coder</p>
                </div>
            </div>
        </header>);
}

export default Header;