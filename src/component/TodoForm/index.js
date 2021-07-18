import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    addNewTodo: PropTypes.func,
};

TodoForm.defaultProps = {
    addNewTodo: null,
}

function TodoForm(props) {
    const { addNewTodo } = props;
    const [formValue, setFormValue] = useState('');

    function onHandleSubmitNewTodo(e) {
        e.preventDefault();
        if (!addNewTodo && !formValue) {
            return;
        }

        addNewTodo(formValue);
        setFormValue('');
    }

    function onHandleChangeTodo(value) {
        if (value === formValue) {
            return;
        }

        setFormValue(value);
    }

    return (
        <div className="todo-form">
            <form onSubmit={onHandleSubmitNewTodo}>
                <input
                    type="text"
                    value={formValue}
                    onChange={e => onHandleChangeTodo(e.target.value)}
                />
            </form>
        </div>
    );
}

export default TodoForm;