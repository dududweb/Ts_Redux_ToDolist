const ADD_TODO = 'todosReducer/ADD_TODO' as const;
const DElETE_TODO = 'todosReducer/DElETE_TODO' as const;
const UPDATE_TODO = 'todosReducer/UPDATE_TODO' as const;

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

export const updateTodo = (targetId: number, text: string) => ({
	type: UPDATE_TODO,
	payload: {
		targetId,
		text,
	},
});

type TodosAction = ReturnType<typeof addTodo> | ReturnType<typeof deleteTodo> | ReturnType<typeof updateTodo>;

export type Todo = {
	id: number;
	text: string;
};

export type TodosState = Todo[];

const initialState: TodosState = [];

export default function todosReducer(state: TodosState = initialState, action: TodosAction): TodosState {
	switch (action.type) {
		case ADD_TODO:
			return [...state, { id: action.payload.id, text: action.payload.text }];
		case DElETE_TODO:
			return state.filter((list) => list.id !== action.payload);
		case UPDATE_TODO:
			return state.filter((list) => list.id);
		default:
			return state;
	}
}
