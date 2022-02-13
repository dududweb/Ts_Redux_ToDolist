import React, { ChangeEvent, FormEvent, useState } from 'react';

type TodoInsertProps = {
	createItem: (text: string) => void;
};

function TodoInsert({ createItem }: TodoInsertProps) {
	const [value, setValue] = useState<string>('');

	const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		createItem(value);
		setValue('');
	};

	return (
		<form onSubmit={onSubmit}>
			<input placeholder="할 일을 입력하세요." value={value} onChange={onChangeValue} />
			<button type="submit">등록</button>
		</form>
	);
}

export default TodoInsert;
