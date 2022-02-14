import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Todo } from '@modules/todo';

type TodoItemProps = {
	todo: Todo;
	deleteItem: (targetId: number) => void;
	updateItem: (targetId: number, text: string) => void;
};

function TodoItem({ todo, deleteItem, updateItem }: TodoItemProps) {
	const [updateValue, setUpdateValue] = useState('');
	const [isUpdate, setIsUpdate] = useState(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUpdateValue(e.target.value);
	};

	const onUpdate = () => {
		setIsUpdate(true);
	};

	const handleRemove = () => {
		deleteItem(todo.id);
	};

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		updateItem(todo.id, updateValue);
		setIsUpdate(false);
		setUpdateValue('');
	};

	return (
		<>
			{isUpdate ? (
				<form onSubmit={onSubmit}>
					<input type="text" onChange={handleChange} />
					<button type="submit">수정완료</button>
				</form>
			) : (
				<li key={todo.id}>
					<span>{todo.text}</span>
					<span onClick={handleRemove}>(X)</span>
					<span onClick={onUpdate}>🛠</span>
				</li>
			)}
		</>
	);
}

export default TodoItem;
