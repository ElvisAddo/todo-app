import React, { useState } from 'react';
import { addContact } from '../store/contactSlice';
import { useDispatch } from 'react-redux';


export default function ContactPage() {
    const dispatch = useDispatch(); 
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', comments: '' });
    const [submitted, setSubmitted] = useState(false);


    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }


    function handleSubmit(e) {
        e.preventDefault();
        // Here we would send the data to a server. For now: console + show feedback.
        console.log('Contact form submitted', form);
        dispatch(addContact(form));
        setSubmitted(true);
        setForm({ firstName: '', lastName: '', email: '', comments: '' });
    }


    return (
        <div className="contact-page">
            <h2>Contact Us</h2>
            {submitted && <div className="alert">Thanks — we received your message.</div>}
            <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                <label>
                    First name
                    <input name="firstName" value={form.firstName} onChange={handleChange} required />
                </label>
                </div>
                <div>
                <label>
                    Last name
                    <input name="lastName" value={form.lastName} onChange={handleChange} required />
                </label>
                </div>
                <div>       
                <label>
                    Email
                    <input name="email" type="email" value={form.email} onChange={handleChange} required />
                </label>
                </div>
                <div>
                <label>
                    Comments
                    <input name="comments" value={form.comments} onChange={handleChange}  />
                </label>
                </div>
                <button type="submit" className="btn">Send message</button>
            </form>
        </div>
    );
}