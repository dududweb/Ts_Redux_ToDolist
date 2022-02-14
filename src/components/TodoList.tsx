import { Todo } from '@modules/todo';
import TodoItem from './TodoItem';

type TodoListProps = {
	todosSelctor: Todo[];
	deleteItem: (targetId: number) => void;
	updateItem: (targetId: number, text: string) => void;
};

function TodoList({ todosSelctor, deleteItem, updateItem }: TodoListProps) {
	return (
		<ul>
			{todosSelctor.map((todo) => (
				<TodoItem todo={todo} deleteItem={deleteItem} updateItem={updateItem} />
			))}
		</ul>
	);
}

export default TodoList;
