import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@modules/index';
import { increase, decrease, increaseBy } from '@modules/counter';
import Counter from '@components/Counter';

function CounterContainer() {
	// 상태를 조회합니다. 상태를 조회 할 때에는 state 의 타입을 RootState 로 지정해야합니다.
	const count = useSelector((state: RootState) => state.counter.count);
	const dispatch = useDispatch();

	const onIncrease = () => {
		dispatch(increase());
	};

	const onDecrease = () => {
		dispatch(decrease());
	};

	const onIncreaseBy = (diff: number) => {
		dispatch(increaseBy(diff));
	};

	return <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} onIncreaseBy={onIncreaseBy} />;
}

export default CounterContainer;
