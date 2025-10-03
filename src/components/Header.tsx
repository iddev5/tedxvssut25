import './header.css';

const Header = () => {
	return (
	<header className="navbar-container">
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#home">
                    <span className="logo-ted">TED</span><span className="logo-x">x</span><span className="logo-vssut">VSSUT</span>
                </a>
            </div>

            <ul className="nav-links">
                <li><a href="#home" className="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#speakers">Speakers</a></li>
                <li><a href="#sponsors">Sponsors</a></li>
                <li><a href="#crew">Crew</a></li>
                <li><a href="#pastevents">Past Events</a></li>
            </ul>

            <a href="#contact" className="contact-btn-link">
                <button className="contact-btn">Contact Us</button>
            </a>
        </nav>
    </header>
	);
}

export default Header;
