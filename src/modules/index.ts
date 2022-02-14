import { combineReducers } from 'redux';
import counter from './counter';
import todo from './todo';

const rootReducer = combineReducers({
	counter,
	todo,
});

// 루트 리듀서를 내보내기
export default rootReducer;

// 루트 리듀서의 반환값를 유추
// 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내기.
export type RootState = ReturnType<typeof rootReducer>;
