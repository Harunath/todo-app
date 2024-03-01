// components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
	return (
		<nav className="bg-gray-800 text-white p-4">
			<ul className="flex space-x-4">
				<li>
					<Link to="/" className="hover:text-gray-400">
						Home
					</Link>
				</li>
				<li>
					<Link to="/login" className="hover:text-gray-400">
						Login
					</Link>
				</li>
				<li>
					<Link to="/register" className="hover:text-gray-400">
						Register
					</Link>
				</li>
				<li>
					<Link to="/profile" className="hover:text-gray-400">
						Profile
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
