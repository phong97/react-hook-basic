import { useState } from 'react';
import './App.scss';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

const TODOLIST = [
	{ id: 0, title: "Learn react hooks" },
	{ id: 1, title: "Learn redux" },
	{ id: 2, title: "Learn redux toolkit" },
]

function App() {

	const [todos, setTodos] = useState(TODOLIST);
	const [indexTodo, setIndexTodo] = useState(TODOLIST.length);

	function handleOnClickTodo(todo) {
		const index = todos.findIndex(item => item.id === todo.id);
		if (index < 0) {
			return;
		}

		const newTodolist = [...todos];
		newTodolist.splice(index, 1);
		setTodos(newTodolist);
	}

	function addNewTodo(value) {
		if (!value) {
			return;
		}
		const newTodoList = [...todos];
		const newTodo = {
			id: indexTodo,
			title: value
		}
		newTodoList.push(newTodo);
		setTodos(newTodoList);
		setIndexTodo(indexTodo + 1);
	}

	return (
		<div className="app">
			<h1>Hello React Hooks!</h1>
			<TodoForm
				addNewTodo={addNewTodo}
			/>
			<TodoList
				todos={todos}
				onTodoClick={handleOnClickTodo}
			/>
		</div>
	);
}

export default App;
