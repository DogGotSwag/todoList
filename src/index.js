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

    domChanger.projectForm();

    let button = document.querySelector(".projectButton");
    let input = document.querySelector(".projectInput");
    button.addEventListener( 'click', () => {
        domChanger.addProject(input.value);
        domChanger.removeProjectForm();
    });

    cancel.addEventListener('click' , () => {
        domChanger.removeProjectForm();
    });
});
