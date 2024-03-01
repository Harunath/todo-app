// state/index.ts
import { atom } from "recoil";

export interface User {
	id: number;
	username: string;
}

export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export const userState = atom<User | null>({
	key: "userState",
	default: {
		id: 1,
		username: "Username",
	},
});

export const todoState = atom<Todo[]>({
	key: "todoState",
	default: [
		{
			id: 1,
			title: "testing the todos",
			completed: false,
		},
	],
});
