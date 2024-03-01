// services/api.ts
import axios from "axios";

export const login = async (username: string, password: string) => {
	try {
		const response = await axios.post("/api/login", { username, password });
		return response.data;
	} catch (error) {
		throw new Error("Invalid username or password");
	}
};

export const register = async (username: string, password: string) => {
	try {
		const response = await axios.post("/api/register", { username, password });
		return response.data;
	} catch (error) {
		throw new Error("Registration failed");
	}
};

export const fetchTodos = async () => {
	try {
		const response = await axios.get("/api/todos");
		return response.data;
	} catch (error) {
		throw new Error("Failed to fetch todos");
	}
};

export const addTodo = async (title: string) => {
	try {
		const response = await axios.post("/api/todos", { title });
		return response.data;
	} catch (error) {
		throw new Error("Failed to add todo");
	}
};

export const deleteTodo = async (id: number) => {
	try {
		await axios.delete(`/api/todos/${id}`);
	} catch (error) {
		throw new Error("Failed to delete todo");
	}
};

export const updateTodo = async (id: number, completed: boolean) => {
	try {
		await axios.put(`/api/todos/${id}`, { completed });
	} catch (error) {
		throw new Error("Failed to update todo");
	}
};
