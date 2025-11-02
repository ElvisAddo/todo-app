import React from 'react';


const TodoItem = React.memo(function TodoItem({ todo, onToggle, onRemove }) {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <label className="todo-row">
                <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
                <span className="todo-text">{todo.text}</span>
            </label>
            <div className="todo-actions">
                <button className="btn small" onClick={() => onRemove(todo.id)} aria-label={`Remove ${todo.text}`}>
                    Remove
                </button>
            </div>
        </li>
    );
});

export default TodoItem;