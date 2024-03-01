// components/Login.tsx
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { login } from "../services/api";
import { userState } from "../state";

const Login: React.FC = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const setUser = useSetRecoilState(userState);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const loggedInUser = await login(username, password);
			setUser(loggedInUser);
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
			<h2 className="text-2xl mb-4">Login</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className="block w-full border border-gray-300 rounded-md px-4 py-2"
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="block w-full border border-gray-300 rounded-md px-4 py-2"
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
					Login
				</button>
				{error && <p className="text-red-500">{error}</p>}
			</form>
		</div>
	);
};

export default Login;
