import './style.css';
import domChanger from './DOMscript';

class TodoItem{
    constructor( title, description, dueDate, priority, ...args){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = !( args[0] ) ? '': args[0];
        this.done = !( args[1] ) ? false: true;
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


function setTodoButtonsListners(){
        let sumbits = document.querySelectorAll('.editButtonsSection .editSubmit');
        for(let i = 0; i < sumbits.length; i++){
            sumbits[i].addEventListener('click', (event) => {
            let todoIndex = event.target.parentNode.parentNode.parentNode.id.split('_')[1];
            let newTitle = event.target.parentNode.parentNode.firstElementChild.firstElementChild.nextElementSibling.value;
            let newDueDate = event.target.parentNode.parentNode.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.value;
            let newPriority = event.target.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;
            let newDes = event.target.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;
            let newNotes = event.target.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;

                
            if( !(projectList[currentProjectIndex].todoList[todoIndex].title === newTitle) ){
                domChanger.updateTitle(todoIndex, newTitle);
                projectList[currentProjectIndex].todoList[todoIndex].title = newTitle;
            }
                
            if( !(projectList[currentProjectIndex].todoList[todoIndex].dueDate === newDueDate) ){
                domChanger.updateDueDate( todoIndex, newDueDate);
                projectList[currentProjectIndex].todoList[todoIndex].dueDate = newDueDate;
            }
                
            if( !(projectList[currentProjectIndex].todoList[todoIndex].priority == newPriority)){
                domChanger.updatePriorityMarker(todoIndex , projectList[currentProjectIndex].todoList[todoIndex].priority, newPriority);
                projectList[currentProjectIndex].todoList[todoIndex].priority = newPriority;
            }
                
                projectList[currentProjectIndex].todoList[todoIndex].description = newDes;
                projectList[currentProjectIndex].todoList[todoIndex].notes = newNotes;

                localStorage.setItem( "localProjectList" , JSON.stringify( projectList) );
            });
        }

    let checkboxes = document.querySelectorAll('.todoLi .checkBox');
    for(let i = 0; i < checkboxes.length; i++){
        checkboxes[i].addEventListener( 'change' , ( event) =>{
            let todoIndex = event.target.parentNode.parentNode.id.split('_')[1];
            if (event.target.checked) {
                projectList[currentProjectIndex].todoList[todoIndex].done = true;
                localStorage.setItem( "localProjectList" , JSON.stringify( projectList) );
            } else {
                projectList[currentProjectIndex].todoList[todoIndex].done = false;
                localStorage.setItem( "localProjectList" , JSON.stringify( projectList) );
            }
        });
    }

    let deleteButtons = document.querySelectorAll('.editButtonsSection .editDelete');
    for( let i = 0; i < deleteButtons.length ; i++){
        deleteButtons[i].addEventListener( 'click' , ( event) => {
            let todoIndex = event.target.parentNode.parentNode.parentNode.id.split('_')[1];
            projectList[currentProjectIndex].todoList.splice( todoIndex, 1);
            domChanger.removeTodo( todoIndex);
            localStorage.setItem( "localProjectList" , JSON.stringify( projectList) );
        });
    }
}

function deleteProjectListner( index ){
    let xButton = document.querySelector( `.project._${index} img` );
        xButton.addEventListener("click", (event) => {
            

            let classes = event.target.parentNode.classList;
            let index = classes[1].split("")[1];

            if( index == currentProjectIndex ){
                domChanger.clearRightSide('deleted :]');
                currentProjectIndex = undefined;
            }
            else if( index < currentProjectIndex){
                currentProjectIndex--;
            }

            projectList.splice( index, 1);
            domChanger.removeProject(classes[1])
            if( projectList.length == 0 ){
                currentProjectIndex = undefined
                localStorage.clear();
            }
            else{
                localStorage.setItem( "localProjectList" , JSON.stringify( projectList) );
            }
            event.stopPropagation();
        });
}


if (!localStorage.getItem("localProjectList")) {

} 
else {

    let savedLocal =  JSON.parse(localStorage.getItem('localProjectList'));
    
    for( let i = 0 ; i < savedLocal.length ; i++){
        let newProjectIndex = projectList.length;
        domChanger.addProject( savedLocal[i].title, newProjectIndex);
        let newProject = new Project( savedLocal[i].title );
        projectList.push(newProject);
        deleteProjectListner( newProjectIndex );

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
            setTodoButtonsListners()
        });
        let todoList = savedLocal[i].todoList;

        for( let j = 0 ; j < todoList.length ; j++){
            let title = todoList[j].title;
            let dueDate = todoList[j].dueDate;
            let priority = todoList[j].priority;
            let description = todoList[j].description;
            let notes = todoList[j].notes;
            let done = todoList[j].done;


            let newTodo = new TodoItem( title, description, dueDate, priority , notes , done);
            projectList[i].todoList.push(newTodo);

        }
    }

}

domChanger.setupAllTodoProject( projectList );


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
        localStorage.setItem( "localProjectList" , JSON.stringify( projectList) );
        domChanger.addProject( projectName, newProjectIndex);
        domChanger.removeProjectForm();

        deleteProjectListner( newProjectIndex );

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
    currentProjectIndex = undefined;
    domChanger.setupAllTodoProject( projectList );
    console.log( projectList );
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
        localStorage.setItem( "localProjectList" , JSON.stringify( projectList) );
        domChanger.removeTodoForm();
        domChanger.updateRightSide( projectList[currentProjectIndex] );


        //code goes here
        setTodoButtonsListners();

    });                
});