import './style.css';
import domChanger from './DOMscript';

class TodoItem{
    constructor( title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class Project{
    constructor( title){
        this.title = title;
        this.todoList = [];
    }
}


let addProjectButton = document.querySelector('.icon');
addProjectButton.addEventListener('click', () =>{
    let item = new Project();
    domChanger.addProject();
});

