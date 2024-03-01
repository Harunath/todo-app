// components/Todos.tsx
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../state";
import AddTodoPopup from "./AddTodoPopup";

const Todos: React.FC = () => {
	const [todos, setTodos] = useRecoilState(todoState);
	const [isAddPopupOpen, setIsAddPopupOpen] = useState(false); // State to control the visibility of the AddTodoPopup

	const handleAddTodo = () => {
		setIsAddPopupOpen(true); // Open the AddTodoPopup
	};

	const handleCloseAddPopup = () => {
		setIsAddPopupOpen(false); // Close the AddTodoPopup
	};

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
			<h2 className="text-2xl mb-4">Todos</h2>
			<button
				onClick={handleAddTodo}
				className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
				Add Todo
			</button>
			<ul className="space-y-2">
				{todos.map((todo) => (
					<li key={todo.id} className="flex items-center">
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => {}}
							className="mr-2"
						/>
						<span
							className={todo.completed ? "line-through text-gray-500" : ""}>
							{todo.title}
						</span>
						<button className="ml-auto bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 transition duration-300">
							Delete
						</button>
					</li>
				))}
			</ul>
			{isAddPopupOpen && <AddTodoPopup onClose={handleCloseAddPopup} />}{" "}
			{/* Render AddTodoPopup with close function */}
		</div>
	);
};

export default Todos;
