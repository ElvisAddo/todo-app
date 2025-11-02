import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add as addTodo, toggle, remove, setFilter } from '../store/todoSlice';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import FilterBar from '../components/FilterBar';


export default function TodosPage() {
    const state = useSelector(s => s.todos);
    const dispatch = useDispatch();


    const handleAdd = useCallback((text) => dispatch(addTodo({ text })), [dispatch]);
    const handleToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
    const handleRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
    const handleFilter = useCallback((f) => dispatch(setFilter(f)), [dispatch]);


    const filteredTodos = useMemo(() => {
        const { todos, filter } = state;
        if (filter === 'completed') return todos.filter(t => t.completed);
        if (filter === 'active') return todos.filter(t => !t.completed);
        return todos;
    }, [state]);


    return (
        <div className="todos-page">
            <div className="todos-grid">
                <section className="todos-list">
                    <h2>Todos</h2>
                    <FilterBar filter={state.filter} onChange={handleFilter} />
                    <TodoList todos={filteredTodos} onToggle={handleToggle} onRemove={handleRemove} />
                </section>
                <aside className="todos-form">
                    <h3>Add new task</h3>
                    <TodoForm onAdd={handleAdd} />
                </aside>
            </div>
        </div>
    );
}