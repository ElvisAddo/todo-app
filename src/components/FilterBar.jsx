import React from 'react';


export default function FilterBar({ filter, onChange }) {
return (
<div className="filter-bar">
<button className={`chip ${filter === 'all' ? 'active' : ''}`} onClick={() => onChange('all')}>All</button>
<button className={`chip ${filter === 'active' ? 'active' : ''}`} onClick={() => onChange('active')}>Active</button>
<button className={`chip ${filter === 'completed' ? 'active' : ''}`} onClick={() => onChange('completed')}>Completed</button>
</div>
);
}