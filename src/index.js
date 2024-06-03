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

let projectList = []; 

let addProjectButton = document.querySelector('.iconAddProject');
addProjectButton.addEventListener('click', () =>{

    domChanger.projectForm();

    let button = document.querySelector(".projectButton");
    let input = document.querySelector(".projectInput");
    button.addEventListener( 'click', () => {
        let projectName = input.value;
        let projectIndex = projectList.length;

        let newProject = new Project( projectName );
        projectList.push(newProject);
        domChanger.addProject( projectName, projectIndex);
        domChanger.removeProjectForm();

    });

    let cancel = document.querySelector(".cancelButton");
    cancel.addEventListener('click' , () => {
        domChanger.removeProjectForm();
    });
});
