// components/AddTodoPopup.tsx
import React, { useState } from "react";
import { addTodo } from "../services/api";

interface AddTodoPopupProps {
	onClose: () => void; // Function to close the popup
}

const AddTodoPopup: React.FC<AddTodoPopupProps> = ({ onClose }) => {
	const [title, setTitle] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await addTodo(title);
			setTitle("");
			setError("");
		} catch (error) {
			setError(error.message);
		}
	};

	const handleClose = () => {
		onClose(); // Call the onClose function passed from the Todos component to close the popup
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white p-6 rounded-lg shadow-md relative">
				<button
					onClick={handleClose}
					className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700 focus:outline-none">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				<h2 className="text-2xl mb-4">Add Todo</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<input
						type="text"
						placeholder="Todo Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="block w-full border border-gray-300 rounded-md px-4 py-2"
					/>
					<button
						type="submit"
						className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
						Add Todo
					</button>
					{error && <p className="text-red-500">{error}</p>}
				</form>
			</div>
		</div>
	);
};

export default AddTodoPopup;
