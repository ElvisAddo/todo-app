import React from 'react';
import TodoItem from './TodoItem';


export default function TodoList({ todos, onToggle, onRemove }) {
if (!todos || todos.length === 0) return <div className="empty">No tasks found</div>;


return (
<ul className="todo-list">
{todos.map(todo => (
<TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
))}
</ul>
);
}