import './style.css';
let DOM_Module = ( function(){
    let projectArea = document.querySelector('.projectsArea');
    let addProject = ( insideText) =>{
        let li = document.createElement('li');
        li.classList.add('project');

        let p = document.createElement('p');
        p.innerText = insideText;

        li.appendChild(p);
        projectArea.appendChild(li);

    }
    let leftSide = document.querySelector('.left')
    let projectForm =() => {
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


        p.innerText = "Project Name";
        button.innerText = "Create";
        cancel.innerText = "Cancel";


        label.appendChild(p);
        formContainer.appendChild(label);
        formContainer.appendChild(input);
        formContainer.appendChild(button);
        formContainer.appendChild(cancel);

        leftSide.appendChild(formContainer);

        button.addEventListener( 'click', () => {
            addProject(input.value);
            removeProjectForm();
        });

        cancel.addEventListener('click' , () => {
            removeProjectForm();
        });


    }

    let removeProjectForm = () => {
        let form = document.querySelector(".formContainer");
        leftSide.removeChild(form);
    }
    return {addProject, projectForm};
}    
)();

export default DOM_Module;