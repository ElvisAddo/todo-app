# 📝 Todo App

**Author:** Elvis Addo  
**Live Demo:** [https://elvisaddo.github.io/todos]

A simple, state-managed **Todo application** built with **React** and **Redux Toolkit**.  
This app allows users to manage their daily tasks and send feedback through a contact form.

---

## 🚀 Features

- ➕ Add, edit, and delete todos  
- ✅ Mark todos as complete or incomplete  
- 🔍 Filter todos by **All**, **Active**, or **Completed**  
- 📨 Submit feedback or issues via a **contact form**  
- ⚙️ Real-time state management with **Redux Toolkit**



4. Technologies Used for the project
 1. React — UI library 
2. Redux Toolkit — State management 
3. Create React App — Build tool (depending on setup) 

 
## 🧩 User Stories

1. “As a user, I want to create new todo items so that I can keep track of tasks I need to complete.”  
2. “As a user, I want to mark todos as complete/incomplete so that I can track my progress.”  
3. “As a user, I want to filter todos by their status (all/active/completed) so that I can focus on relevant tasks.”  
4. “As a user, I want to contact the app administrators through a contact form so that I can report issues or give feedback.”

---

## 🧠 State Tree

```js
{
  todos: {
    items: [
      {
        id: string,
        text: string,
        completed: boolean,
        createdAt: date
      }
    ],
    filter: 'all' | 'active' | 'completed',
    loading: boolean
  },

  // Contact form state (managed locally)
  contactForm: {
    firstName: string,
    lastName: string,
    message: string,
    comment: string
  }
}


## Ideas for future Improvement  

1. Integrate this app with a backend api service using either express, django to persist data in a database and not just in local storage  

2. Add A view to view a detailed todo created item 

3. Enhance the ui layout of the application  

 