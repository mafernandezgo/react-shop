import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.scss';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<Link to = "/Orders" className="title">My orders</Link>
				</li>
				<li>
					<Link to ="/MyAccount">My account</Link>
				</li>
				<li>
					<a href="/">Sign out</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu