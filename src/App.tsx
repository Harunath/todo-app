// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Todos from "./components/Todos";
import Profile from "./components/Profile";
import { RecoilRoot } from "recoil";

const App: React.FC = () => {
	return (
		<RecoilRoot>
			{" "}
			{/* Add RecoilRoot */}
			<Router>
				<Navbar />
				<Routes>
					{" "}
					{/* Wrap Routes */}
					<Route path="/" element={<Todos />} />{" "}
					{/* Use element prop to specify component */}
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</Router>
		</RecoilRoot>
	);
};

export default App;
