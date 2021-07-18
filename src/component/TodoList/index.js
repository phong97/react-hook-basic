import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

function TodoList(props) {
    const { todos, onTodoClick } = props;

    return (
        <div className="todo-list">
            {
                todos.map(todo => (
                    <li
                        key={todo.id}
                        onClick={() => onTodoClick(todo)}
                    >
                        {todo.title}
                    </li>
                ))
            }
        </div>
    );
}

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: PropTypes.func,
}




export default TodoList;