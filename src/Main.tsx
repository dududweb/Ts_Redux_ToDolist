import React from 'react';
import PageSample from '@pages/PageSample';
import CounterContainer from './container/CounterContainer';
import TodoContainer from './container/TodoContainer';

function main() {
	return (
		<div className="main">
			<PageSample />
			<CounterContainer />
			<TodoContainer />
		</div>
	);
}
export default main;
