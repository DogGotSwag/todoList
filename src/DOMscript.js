import './style.css';
import xImg from './../img/close-thick.svg';
import dropDown from "./../img/downArrow.svg";
import up from "./../img/upArrow.svg";
import projectAddIcon from "./../img/plus-box-outline.svg";
import todoAddIcon from "./../img/plus-box-outline.svg"

let DOM_Module = (function () {

    let setProjectAddSrc = () => {
        let leftSideHeader = document.querySelector('.leftSideHeader');
        let img = document.createElement('img');
        img.classList.add('iconAddProject');
        img.src = projectAddIcon;
        leftSideHeader.appendChild(img);
    };

    let setAddTodoIconImg = () => {
        let button = document.querySelector('.addTodoIcon');
        let img = document.createElement( 'img' );
        img.src = todoAddIcon;
        button.appendChild( img );
    };

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

        cancel.addEventListener('click', () => {
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
        todoList.forEach((key, index) => {
            let li = document.createElement('li');
            li.classList.add('todoLi');
            li.id = `todo_${index}`;

            let topContainer = document.createElement('div');
            topContainer.classList.add('topContainer');

            let checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.classList.add('checkBox');
            if (key.done === true) {
                checkbox.setAttribute('checked', 'true');
            }
            checkbox.id = `todoCheck_${index}`


            let p = document.createElement('p');
            p.classList.add('todoTitleP');
            p.innerText = key.title;

            let label = document.createElement('label');
            label.classList.add('todoLabel');
            label.setAttribute('for', `todoCheck_${index}`);
            label.setAttribute('name', `todo_${index}`);
            label.appendChild(p);

            let dueDate = document.createElement('p');
            dueDate.classList.add('dueDateP');
            if (key.dueDate == "") {
                dueDate.innerText = "No Due Date";
            }
            else {
                dueDate.innerText = key.dueDate;
            }

            let div = document.createElement('div');
            div.classList.add('dropDownContainer');

            let img = new Image();
            img.src = dropDown;
            div.appendChild(img);
            img.classList.add('dropDownIcon');




            topContainer.appendChild(checkbox)
            topContainer.appendChild(label);
            topContainer.appendChild(dueDate);
            topContainer.appendChild(div);


            let editForm = document.createElement('form');
            editForm.classList.add('editTodoForm');

            let divOne = document.createElement('div');
            divOne.classList.add('todoEditDiv');
            let titleLabel = document.createElement('label');
            titleLabel.innerText = "Title";
            titleLabel.setAttribute(`for`, `titleEdit${index}`);
            let titleInput = document.createElement('input');
            titleInput.setAttribute('type', 'text');
            titleInput.value = key.title;
            titleInput.id = `titleEdit${index}`;

            divOne.appendChild(titleLabel);
            divOne.appendChild(titleInput);

            let divTwo = document.createElement('div');
            divTwo.classList.add('todoEditDiv');
            let dueDateLabel = document.createElement('label');
            dueDateLabel.innerText = "Due Date";
            dueDateLabel.setAttribute('for', `dueEdit${index}`);
            let dueDateInput = document.createElement('input');
            dueDateInput.setAttribute('type', 'date');
            dueDateInput.id = `dueEdit${index}`;
            dueDateInput.defaultValue = key.dueDate;
            divTwo.appendChild(dueDateLabel);
            divTwo.appendChild(dueDateInput);

            let divThree = document.createElement('div');
            divThree.classList.add('todoEditDiv');
            let priorityLabel = document.createElement('label');
            priorityLabel.innerText = "Priority"
            priorityLabel.setAttribute('for', `priorityEdit${index}`);
            let priorityInput = document.createElement('select');
            priorityInput.id = `priorityEdit${index}`;
            let selectOptions = ['low', 'medium', 'high'];

            selectOptions.forEach(op => {
                let option = document.createElement('option');
                option.innerText = op;
                if (key.priority == op) {
                    option.setAttribute('selected', 'selected');
                }
                priorityInput.appendChild(option);
            });
            divThree.appendChild(priorityLabel);
            divThree.appendChild(priorityInput);

            let divFour = document.createElement('div');
            divFour.classList.add('todoEditDiv');
            divFour.classList.add('todoEditLastDiv');
            let desLabel = document.createElement('label');
            desLabel.innerText = "Description";
            let desInput = document.createElement('textarea');
            desInput.value = key.description;
            divFour.appendChild(desLabel);
            divFour.appendChild(desInput);

            let divFive = document.createElement('div');
            divFive.classList.add('todoEditDiv');
            divFive.classList.add('todoEditLastDiv');
            let notesLabel = document.createElement('label');
            notesLabel.innerText = "Notes";
            let notesInput = document.createElement('textarea');
            notesInput.value = key.notes;
            divFive.appendChild(notesLabel);
            divFive.appendChild(notesInput);

            let divSix = document.createElement('div');
            divSix.classList.add('editButtonsSection');

            let deleteTodoButton = document.createElement('button');
            deleteTodoButton.setAttribute('type', 'button');
            deleteTodoButton.classList.add('editButton');
            deleteTodoButton.classList.add('editDelete');
            deleteTodoButton.innerText = "Delete This Todo";

            let editCancel = document.createElement('button');
            editCancel.setAttribute('type', 'button');
            editCancel.classList.add('editButton');
            editCancel.innerText = "Undo Draft";


            editCancel.addEventListener('click', () => {
                titleInput.value = key.title;
                dueDateInput.value = key.dueDate;
                desInput.value = key.description;
                notesInput.value = key.notes;

                if (key.priority == 'low') {
                    priorityInput.selectedIndex = 0;
                }
                else if (key.priority == "medium") {
                    priorityInput.selectedIndex = 1;
                }
                else {
                    priorityInput.selectedIndex = 2;
                }
            });

            let editSumbit = document.createElement('button');
            editSumbit.setAttribute('type', 'button');
            editSumbit.classList.add('editButton');
            editSumbit.classList.add('editSubmit');
            editSumbit.innerText = "Sumbit Changes";
            divSix.appendChild(deleteTodoButton);
            divSix.appendChild(editCancel);
            divSix.appendChild(editSumbit);

            editForm.appendChild(divOne);
            editForm.appendChild(divTwo);
            editForm.appendChild(divThree);
            editForm.appendChild(divFour);
            editForm.appendChild(divFive);
            editForm.appendChild(divSix);





            li.appendChild(topContainer);
            li.appendChild(editForm);

            li.classList.add(`${key.priority}`);
            ul.appendChild(li);

            div.addEventListener('click', () => {
                let liClasses = Array.from(li.classList);
                if (liClasses.includes("expand")) {
                    li.classList.remove('expand');
                    img.src = dropDown;
                    editForm.classList.remove('visible');
                }
                else {
                    li.classList.add('expand');
                    img.src = up;
                    editForm.classList.add('visible');
                }
            });

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

        let selectOptions = ['low', 'medium', 'high'];

        selectOptions.forEach(op => {
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
        addButton.setAttribute('type', 'button');
        addButton.classList.add('todoFormButton')
        addButton.classList.add('todoAddButton')
        addButton.innerText = 'Add';

        let cancelButton = document.createElement('button');
        cancelButton.setAttribute('type', 'button');
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

        cancelButton.addEventListener('click', () => {
            removeTodoForm();
        });
    }

    let removeTodoForm = () => {
        let form = document.querySelector('.todoForm');
        right.removeChild(form);
    }

    let removeTodoFormButton = () => {
        let addTodoButton = document.querySelector('.addTodoIcon');
        let checkTwo = document.querySelector('.todoForm');

        addTodoButton.classList.remove('active');

        if (checkTwo != null) {
            removeTodoForm();
        }

    };

    let updatePriorityMarker = (index, oldPriority, newPriority) => {
        let todoLi = document.querySelector(`#todo_${index}`);
        todoLi.classList.remove(oldPriority);
        todoLi.classList.add(newPriority);
    };

    let updateTitle = (index, newTitle) => {
        let todoTitle = document.querySelector(`#todo_${index} .todoTitleP`);
        todoTitle.innerText = newTitle;
    };

    let updateDueDate = (index, newDueDate) => {
        let todoDue = document.querySelector(`#todo_${index} .dueDateP`);
        todoDue.innerText = (newDueDate == "") ? "No Due Date" : newDueDate;

    };

    let removeTodo = (index) => {
        let todoToBeRemoved = document.querySelector(`#todo_${index}`);
        let containers = document.querySelector('.allTodos ul');
        containers.removeChild(todoToBeRemoved);


        let key = containers.firstElementChild;

        let newIndex = 0;
        while (key != null) {
            key.id = `todo_${newIndex}`;
            newIndex++;
            key = key.nextElementSibling;
        }
    };

    let clearRightSide = (newHeader) => {
        removeTodoFormButton();
        updateRightHeader(newHeader);
        updateToDoSection([]);
    };

    let nonEditableTodo = (todoList) => {
        let ul = document.createElement('ul');
        todoList.forEach((key, index) => {
            let li = document.createElement('li');
            li.classList.add('todoLi');
            li.classList.add('nonEditMode');
            li.id = `todo_${index}`;

            let topContainer = document.createElement('div');
            topContainer.classList.add('topContainer');

            let checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.classList.add('checkBox');
            checkbox.disabled = true;
            if (key.done === true) {
                checkbox.setAttribute('checked', 'true');
            }
            checkbox.id = `todoCheck_${index}`


            let p = document.createElement('p');
            p.classList.add('todoTitleP');
            p.innerText = key.title;

            let label = document.createElement('label');
            label.classList.add('todoLabel');
            label.setAttribute('for', `todoCheck_${index}`);
            label.setAttribute('name', `todo_${index}`);
            label.appendChild(p);

            let dueDate = document.createElement('p');
            dueDate.classList.add('dueDateP');
            if (key.dueDate == "") {
                dueDate.innerText = "No Due Date";
            }
            else {
                dueDate.innerText = key.dueDate;
            }

            let div = document.createElement('div');
            div.classList.add('dropDownContainer');

            let img = new Image();
            img.src = dropDown;
            div.appendChild(img);
            img.classList.add('dropDownIcon');




            topContainer.appendChild(checkbox)
            topContainer.appendChild(label);
            topContainer.appendChild(dueDate);
            topContainer.appendChild(div);


            let editForm = document.createElement('form');
            editForm.classList.add('editTodoForm');

            let divOne = document.createElement('div');
            divOne.classList.add('todoEditDiv');
            let titleLabel = document.createElement('label');
            titleLabel.innerText = "Title";
            titleLabel.setAttribute(`for`, `titleEdit${index}`);
            let titleInput = document.createElement('input');
            titleInput.setAttribute('type', 'text');
            titleInput.value = key.title;
            titleInput.id = `titleEdit${index}`;
            titleInput.readOnly = true;

            divOne.appendChild(titleLabel);
            divOne.appendChild(titleInput);

            let divTwo = document.createElement('div');
            divTwo.classList.add('todoEditDiv');
            let dueDateLabel = document.createElement('label');
            dueDateLabel.innerText = "Due Date";
            dueDateLabel.setAttribute('for', `dueEdit${index}`);
            let dueDateInput = document.createElement('input');
            dueDateInput.setAttribute('type', 'date');
            dueDateInput.id = `dueEdit${index}`;
            dueDateInput.defaultValue = key.dueDate;
            dueDateInput.readOnly = true;

            divTwo.appendChild(dueDateLabel);
            divTwo.appendChild(dueDateInput);

            let divThree = document.createElement('div');
            divThree.classList.add('todoEditDiv');
            let priorityLabel = document.createElement('label');
            priorityLabel.innerText = "Priority"
            priorityLabel.setAttribute('for', `priorityEdit${index}`);
            let priorityInput = document.createElement('input');
            priorityInput.id = `priorityEdit${index}`;
            priorityInput.value = key.priority;
            priorityInput.readOnly = true;



            divThree.appendChild(priorityLabel);
            divThree.appendChild(priorityInput);

            let divFour = document.createElement('div');
            divFour.classList.add('todoEditDiv');
            divFour.classList.add('todoEditLastDiv');
            let desLabel = document.createElement('label');
            desLabel.innerText = "Description";
            let desInput = document.createElement('textarea');
            desInput.readOnly = true;

            desInput.value = key.description;
            divFour.appendChild(desLabel);
            divFour.appendChild(desInput);

            let divFive = document.createElement('div');
            divFive.classList.add('todoEditDiv');
            divFive.classList.add('todoEditLastDiv');
            let notesLabel = document.createElement('label');
            notesLabel.innerText = "Notes";
            let notesInput = document.createElement('textarea');
            notesInput.readOnly = true;

            notesInput.value = key.notes;
            divFive.appendChild(notesLabel);
            divFive.appendChild(notesInput);

            editForm.appendChild(divOne);
            editForm.appendChild(divTwo);
            editForm.appendChild(divThree);
            editForm.appendChild(divFour);
            editForm.appendChild(divFive);


            li.appendChild(topContainer);
            li.appendChild(editForm);

            li.classList.add(`${key.priority}`);
            ul.appendChild(li);

            div.addEventListener('click', () => {
                let liClasses = Array.from(li.classList);
                if (liClasses.includes("expand")) {
                    li.classList.remove('expand');
                    img.src = dropDown;
                    editForm.classList.remove('visible');
                }
                else {
                    li.classList.add('expand');
                    img.src = up;
                    editForm.classList.add('visible');
                }
            });

        });

        return ul;
    }

    let setupAllTodoProject = (projectList) => {
        addHeaderMargin();
        removeTodoFormButton();
        updateRightHeader('All Todos');
        let allTodosContainer = right.firstElementChild.nextElementSibling;
        allTodosContainer.innerHTML = "";
        for (let i = 0; i < projectList.length; i++) {
            let ul = nonEditableTodo(projectList[i].todoList);
            allTodosContainer.appendChild(ul);
        }
    };

    let removeHeaderMargin = () => {
        let header = document.querySelector( '.rightSideHeader' ); 
        header.classList.remove('noEditHeader');
    };

    let addHeaderMargin = () => {
        let header = document.querySelector( '.rightSideHeader' ); 
        header.classList.add('noEditHeader');
    }

    return {
        addProject, projectForm, removeProjectForm,
        removeProject, updateRightSide,
        addTodoForm, removeTodoForm, removeTodoFormButton,
        updatePriorityMarker, updateTitle, updateDueDate,
        removeTodo, clearRightSide, setupAllTodoProject,
        removeHeaderMargin, removeHeaderMargin,
        setProjectAddSrc, setAddTodoIconImg
    };
}
)();

export default DOM_Module;