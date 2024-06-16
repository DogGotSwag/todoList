import './style.css';
import xImg from '../img/close-thick.svg';

let DOM_Module = (function (index) {
    let projectArea = document.querySelector('.projectsArea');
    let addProject = (insideText, index) => {
        let li = document.createElement('li');
        li.classList.add('project');
        li.classList.add("_" + index);

        let p = document.createElement('p');
        p.innerText = insideText;

        let x = document.createElement('img');
        x.classList = "removeIcon";
        x.src = xImg;

        li.appendChild(p);
        li.appendChild(x);
        projectArea.appendChild(li);

    };

    let leftSide = document.querySelector('.left');
    let projectForm = () => {
        let formContainer = document.createElement('div');
        formContainer.classList.add("formContainer");

        let label = document.createElement("label");
        let input = document.createElement("input");
        let p = document.createElement("p");
        let button = document.createElement("button");
        let cancel = document.createElement("button");

        label.classList.add("projectLabel");
        input.classList.add("projectInput");
        button.classList.add("projectButton");
        cancel.classList.add("projectButton");
        cancel.classList.add("cancelButton");


        p.innerText = "Project Name";
        button.innerText = "Create";
        cancel.innerText = "Cancel";


        label.appendChild(p);
        formContainer.appendChild(label);
        formContainer.appendChild(input);
        formContainer.appendChild(button);
        formContainer.appendChild(cancel);

        leftSide.appendChild(formContainer);

        cancel.addEventListener('click' , () => {
            removeProjectForm();
        });
    };

    let removeProjectForm = () => {
        let form = document.querySelector(".formContainer");
        leftSide.removeChild(form);
    };

    let removeProject = (index) => {
        let element = document.querySelector(`.project.${index}`);
        projectArea.removeChild(element);

        let alltodos = projectArea.firstElementChild;
        let key = alltodos.nextElementSibling;

        let newIndex = 0;
        while (key != null) {
            key.className = `project _${newIndex}`;
            newIndex++;
            key = key.nextElementSibling;
        }
    };


    let updateRightSide = (project) => {
        updateRightHeader(project.title);
        updateToDoSection(project.todoList);
        addTodoButton();
    };

    let updateRightHeader = (text) => {
        let header = document.querySelector(".rightSideHeader h2");
        header.innerText = `Todos from project : ${text}`;
    };
    let right = document.querySelector('.right');

    let updateToDoSection = (todoList) => {
        let allTodosContainer = right.firstElementChild.nextElementSibling; 
        allTodosContainer.innerHTML = "";
        let ul = document.createElement('ul');
        todoList.forEach( (key,index) => {
            let li = document.createElement('li');
            li.classList.add('todoLi');

            let checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.classList.add('checkBox');
            checkbox.id = `todo_${index}`;

            let p = document.createElement('p');
            p.innerText = key.title;
            
            let label = document.createElement('label');
            label.classList.add('todoLabel');
            label.setAttribute('for', `todo_${index}`);
            label.setAttribute('name' ,`todo_${index}`);
            label.appendChild(p);

            
            li.appendChild(checkbox)
            li.appendChild(label);

            ul.appendChild(li);
        });

        allTodosContainer.appendChild(ul);

    };

    let addTodoButton = () => {

        let addTodoIcon = document.querySelector(".addTodoIcon");
        addTodoIcon.classList.add('active');

    }

    let addTodoForm = () => {
        let div = document.createElement('form');
        div.classList.add('todoForm');
        right.appendChild(div);

        let header = document.createElement('h5');
        header.classList.add('todoformHeader');
        header.innerText = "Todo";

        let list = document.createElement('ul');

        let li = document.createElement('li');
        let labelTitle = document.createElement('label');
        labelTitle.innerText = "Title"
        let inputTitle = document.createElement('input');
        inputTitle.classList.add('inputTitle');
        li.appendChild(labelTitle);
        li.appendChild(inputTitle);

        let liTwo = document.createElement('li');
        let labelDue = document.createElement('label');
        labelDue.innerText = "Due Date"
        let inputDue = document.createElement('input');
        inputDue.classList.add('dateInput');
        inputDue.setAttribute('type', 'date');
        liTwo.appendChild(labelDue);
        liTwo.appendChild(inputDue);


        let liThree = document.createElement('li');
        let labelPriority = document.createElement('label');
        labelPriority.innerText = "Priorty";
        let inputPriority = document.createElement('select');

        let selectOptions = ['low','medium', 'high'];

        selectOptions.forEach( op => {
            let option = document.createElement('option');
            option.innerText = op;
            inputPriority.appendChild(option);
        });

        liThree.appendChild(labelPriority);
        liThree.appendChild(inputPriority);

        let liFour = document.createElement('li');
        liFour.classList.add("lastLi");
        let labelDes = document.createElement('label');
        labelDes.innerText = "Description"
        let inputDes = document.createElement('textArea');
        liFour.appendChild(labelDes);
        liFour.appendChild(inputDes);

        let addButton = document.createElement('button');
        addButton.setAttribute('type','button');
        addButton.classList.add('todoFormButton')
        addButton.classList.add('todoAddButton')
        addButton.innerText = 'Add';

        let cancelButton = document.createElement('button');
        cancelButton.setAttribute('type','button');
        cancelButton.classList.add('todoFormButton')
        cancelButton.classList.add('todoCancelButton')
        cancelButton.innerText = 'Cancel';

        list.appendChild(li);
        list.appendChild(liTwo);
        list.appendChild(liThree);
        list.appendChild(liFour);
        list.appendChild(addButton);
        list.appendChild(cancelButton);

        div.appendChild(header);
        div.appendChild(list);

        cancelButton.addEventListener( 'click' , () =>{
            removeTodoForm();
        });
    }

    let removeTodoForm = () =>{
        let form = document.querySelector('.todoForm');
        right.removeChild(form);
    }

    let removeTodoFormButton = () => {
        let addTodoButton = document.querySelector('.addTodoIcon');
        let checkTwo = document.querySelector('.todoForm');

        addTodoButton.classList.remove('active');

        if( checkTwo != null ){
            removeTodoForm();
        }
        
    }

    return {
        addProject, projectForm, removeProjectForm, 
        removeProject, updateRightSide,
        addTodoForm, removeTodoForm, removeTodoFormButton
    };
}
)();

export default DOM_Module;