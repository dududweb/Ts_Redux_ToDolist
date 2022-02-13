import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@modules/index';
import { addTodo, deleteTodo } from '@modules/todo';
import TodoInsert from '@components/TodoInsert';
import TodoList from '@components/TodoList';

function TodoContainer() {
	const todosSelctor = useSelector((state: RootState) => state.todo);
	const dispatch = useDispatch();
	console.log(todosSelctor);

	const createItem = (text: string) => {
		dispatch(addTodo(text));
	};

	const deleteItem = (targetId: number) => {
		dispatch(deleteTodo(targetId));
	};

	return (
		<>
			<TodoInsert createItem={createItem} />
			<TodoList todosSelctor={todosSelctor} deleteItem={deleteItem} />
		</>
	);
}

export default TodoContainer;
