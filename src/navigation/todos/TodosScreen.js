import React from 'react';
import { ScrollView } from 'react-native';
import TodosLists from '../../features/todos/containers/TodosLists';

function TodosScreen() {
	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: 'white',
			}}
			contentContainerStyle={{
				paddingTop: 60,
				paddingHorizontal: 20,
				paddingBottom: 250,
			}}
		>
			<>
				<TodosLists />
			</>
		</ScrollView>
	);
}

export default TodosScreen;
