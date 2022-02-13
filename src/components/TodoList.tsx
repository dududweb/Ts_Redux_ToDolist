import React from 'react';
import { Todo } from '@modules/todo';

type TodoListProps = {
	todosSelctor: Todo[];
	deleteItem: (targetId: number) => void;
};

function TodoList({ todosSelctor, deleteItem }: TodoListProps) {
	return (
		<ul>
			{todosSelctor.map((todo) => (
				<li key={todo.id}>
					<span>{todo.text}</span>
					<span
						onClick={() => {
							deleteItem(todo.id);
						}}
					>
						(X)
					</span>
				</li>
			))}
		</ul>
	);
}

export default TodoList;
