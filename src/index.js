import './style.css';
import domChanger from './DOMscript';
class TodoItem{
    constructor( title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = "";
    }
}

class Project{
    constructor( title){
        this.title = title;
        this.todoList = [];
    }
}

let projectList = [];
let currentProjectIndex;

let addProjectButton = document.querySelector('.iconAddProject');
addProjectButton.addEventListener('click', () =>{

    domChanger.projectForm();

    let button = document.querySelector(".projectButton");
    let input = document.querySelector(".projectInput");
    button.addEventListener( 'click', () => {
        let projectName = input.value;
        let newProjectIndex = projectList.length;

        let newProject = new Project( projectName );
        projectList.push(newProject);
        domChanger.addProject( projectName, newProjectIndex);
        domChanger.removeProjectForm();

        let xButton = document.querySelector( `.project._${newProjectIndex} img` );
        xButton.addEventListener("click", (event) => {
            let classes = event.target.parentNode.classList;
            let index = classes[1].split("")[1];

            if( index == currentProjectIndex ){
                domChanger.removeTodoFormButton();
            }
            else if( index < currentProjectIndex){
                currentProjectIndex--;
            }

            projectList.splice( index, 1);
            domChanger.removeProject(classes[1]);
            event.stopPropagation();
        });

        let project = document.querySelector( `.project._${newProjectIndex}` );
        
        project.addEventListener("click", (event) => {
            let type = event.target.nodeName;
            let target;

            if( type == "LI" ){
                target = event.target;
            }
            else{
                target = event.target.parentNode;
            }

            let clickedProjectIndex = target.classList[1].split("")[1];

            if( clickedProjectIndex === currentProjectIndex){
                ;
            }
            else{
                currentProjectIndex = clickedProjectIndex;
                domChanger.updateRightSide( projectList[currentProjectIndex] );
                
            }
            
        });
    });
});

let allTodoProject = document.querySelector('.allTodoProject');
allTodoProject.addEventListener( 'click', () =>{
    domChanger.removeTodoFormButton();
});

let addToButton = document.querySelector(".addTodoIcon");
addToButton.addEventListener( 'click', () =>{
    domChanger.addTodoForm();
    let add = document.querySelector('.todoAddButton');
    add.addEventListener('click', () =>{
        let title = document.querySelector('.inputTitle');
        let due = document.querySelector(".dateInput");
        let select = document.querySelector(".todoForm select");
        let description = document.querySelector(".todoForm textArea");

        let newTodo = new TodoItem( title.value, description.value,due.value, select.value);
        projectList[currentProjectIndex].todoList.push(newTodo);
        domChanger.removeTodoForm();
        domChanger.updateRightSide( projectList[currentProjectIndex] );


        //code goes here
        let sumbits = document.querySelectorAll('.editButtonsSection .editSubmit');
        
        for(let i = 0; i < sumbits.length; i++){
            sumbits[i].addEventListener('click', (event) => {
                let todoIndex = event.target.parentNode.parentNode.parentNode.id.split('_')[1];
                
                let newTitle = event.target.parentNode.parentNode.firstElementChild.firstElementChild.nextElementSibling.value;
                let newDueDate = event.target.parentNode.parentNode.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.value;
                let newPriority = event.target.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;
                let newDes = event.target.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;
                let newNotes = event.target.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;

                projectList[currentProjectIndex].todoList[todoIndex].title = newTitle;
                projectList[currentProjectIndex].todoList[todoIndex].dueDate = newDueDate;
                projectList[currentProjectIndex].todoList[todoIndex].priority = newPriority;
                projectList[currentProjectIndex].todoList[todoIndex].description = newDes;
                projectList[currentProjectIndex].todoList[todoIndex].notes = newNotes;
            });
        }

    });                
});



for( let i = 0; i < 1; i++){
    let addProject = document.querySelector(".iconAddProject");
    addProject.click();

    let projectIn = document.querySelector('.projectInput');
    projectIn.value = "DD";

    let projButton = document.querySelector(".projectButton");
    projButton.click();

    let testProject = document.querySelector(`._${i}`);
    testProject.click();

    for( let j = 0; j < 5; j++){
        let tButt = document.querySelector('.addTodoIcon.active');
        tButt.click();

        let tIn = document.querySelector('.inputTitle');
        tIn.value = `test${j}`;

        let add = document.querySelector('.todoFormButton.todoAddButton');
        add.click();
    }
    
}