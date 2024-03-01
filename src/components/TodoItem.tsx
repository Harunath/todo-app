import React from "react";
import axios from "axios";

interface TodoProps {
	todo: {
		id: number;
		title: string;
		completed: boolean;
	};
}

const TodoItem: React.FC<TodoProps> = ({ todo }) => {
	const handleDelete = async () => {
		try {
			await axios.delete(`/api/todos/${todo.id}`);
			// Handle successful deletion
		} catch (error) {
			console.error("Failed to delete todo");
		}
	};

	const handleUpdate = async () => {
		try {
			await axios.put(`/api/todos/${todo.id}`, { completed: !todo.completed });
			// Handle successful update
		} catch (error) {
			console.error("Failed to update todo");
		}
	};

	return (
		<li>
			<input type="checkbox" checked={todo.completed} onChange={handleUpdate} />
			<span>{todo.title}</span>
			<button onClick={handleDelete}>Delete</button>
		</li>
	);
};

export default TodoItem;
