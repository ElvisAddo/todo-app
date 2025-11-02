import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TodosPage from './pages/TodosPage';
import ContactPage from './pages/ContactPage';
import NavBar from './components/NavBar';


export default function App() {
return (
<div className="app-root">
<NavBar />
<main className="container">
<Routes>
<Route path="/" element={<Navigate to="/" replace />} />
<Route path="/todos" element={<TodosPage />} />
<Route path="/contact" element={<ContactPage />} />
<Route path="*" element={<div>Not Found</div>} />
</Routes>
</main>
</div>
);
}