import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
	return (
		<header>
			<div>
					<ul>
						<li><Link className="active" href="">surepsyches</Link></li>
						<li><Link to="">About us</Link></li>
						<li><Link to="">FAQ</Link></li>
					</ul>
					<div className="auth">
						<p><Link className="sign-in" to="">Sign in</Link></p>
						<button>Get Started</button>
					</div>
        </div>
    </header>
	);
}

export default Header;
