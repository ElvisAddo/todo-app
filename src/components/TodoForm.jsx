import React, { useState } from 'react';


export default function TodoForm({ onAdd }) {
    const [text, setText] = useState('');


    function submit(e) {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd(text);
        setText('');
    }


    return (
        <form className="todo-form" onSubmit={submit}>
            <input
                aria-label="New todo"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="e.g. Buy groceries"
            />
            <button className="btn" type="submit">Add</button>
        </form>
    );
}