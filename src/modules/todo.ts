const ADD_TODO = 'todosReducer/ADD_TODO' as const;
const DElETE_TODO = 'todosReducer/DElETE_TODO' as const;

let nextId = 1;
export const addTodo = (text: string) => ({
	type: ADD_TODO,
	payload: {
		id: nextId++,
		text,
	},
});

export const deleteTodo = (targetId: number) => ({
	type: DElETE_TODO,
	payload: targetId,
});

type TodosAction = ReturnType<typeof addTodo> | ReturnType<typeof deleteTodo>;

export type Todo = {
	id: number;
	text: string;
};

export type TodosState = Todo[];

const initialState: TodosState = [];

export default function todosReducer(state: TodosState = initialState, action: TodosAction): TodosState {
	switch (action.type) {
		case ADD_TODO: // case 라고 입력하고 Ctrl + Space 를 누르면 어떤 종류의 action.type들이 있는지 확인 할 수 있습니다.
			return [...state, { id: action.payload.id, text: action.payload.text }];
		case DElETE_TODO:
			return state.filter((list) => list.id !== action.payload);
		default:
			return state;
	}
}
