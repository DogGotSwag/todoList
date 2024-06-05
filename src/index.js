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

        let xButton = document.querySelector( `.project._${projectIndex} img` );
        xButton.addEventListener("click", (event) => {
            let classes = event.target.parentNode.classList;
            let index = classes[1].split("")[1];

            projectList.splice( index, 1);
            domChanger.removeProject(classes[1]);
            event.stopPropagation();
        });

        let project = document.querySelector( `.project._${projectIndex}` );
        
        project.addEventListener("click", (event) => {
            let type = event.target.nodeName;
            let target;

            if( type == "LI" ){
                target = event.target;
            }
            else{
                target = event.target.parentNode;
            }
            let projectIndex = target.classList[1].split("")[1];
            domChanger.updateRightSide( projectList[projectIndex] );

            let addToButton = document.querySelector(".addTodoIcon");
            addToButton.addEventListener( 'click', () =>{
                domChanger.addTodoForm();
                let add = document.querySelector('.todoAddButton');
                add.addEventListener('click', () =>{
                    let title = document.querySelector('.inputTitle');
                    let due = document.querySelector(".dateInput");
                    let select = document.querySelector(".todoForm select");
                    let description = document.querySelector("textArea");

                    let newTodo = new TodoItem( title.value, description.value,due.value, select.value);
                    projectList[projectIndex].todoList.push(newTodo);

                    domChanger.removeTodoForm();
                    console.log(projectList);
                });

                
            });
        });
    });
});

let allTodoProject = document.querySelector('.allTodoProject');
allTodoProject.addEventListener( 'click', () =>{
    domChanger.removeTodoFormButton();
});