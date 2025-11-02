import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavBar() {
return (
<nav className="nav">
<div className="nav-inner container">
<div className="brand">TaskMaster</div>
<div className="nav-links">
<NavLink to="/todos" className={({isActive})=> isActive? 'active' : ''}>Todos</NavLink>
<NavLink to="/contact" className={({isActive})=> isActive? 'active' : ''}>Contact</NavLink>
</div>
</div>
</nav>
);
}