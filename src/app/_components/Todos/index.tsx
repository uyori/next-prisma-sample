"use client";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import type { Todo } from "@/lib/types";
import { useEffect, useState } from "react";

export function Todos() {
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		const fetchTodos = async () => {
			const response = await fetch("/api/todos");
			const data = await response.json();
			setTodos(data);
		};
		fetchTodos();
	}, []);

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[50px]">ID</TableHead>
					<TableHead>Title</TableHead>
				</TableRow>
			</TableHeader>

			<TableBody>
				{todos.map((todo) => (
					<TableRow key={todo.id}>
						<TableCell>{todo.id}</TableCell>
						<TableCell className={todo.completed ? "line-through" : ""}>
							{todo.title}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
