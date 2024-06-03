import './style.css';
import xImg from '../img/close-thick.svg';
let DOM_Module = ( function( index ){
    let projectArea = document.querySelector('.projectsArea');
    let addProject = ( insideText, index) =>{
        let li = document.createElement('li');
        li.classList.add('project');
        li.classList.add( index );

        let p = document.createElement('p');
        p.innerText = insideText;

        let x = document.createElement('img');
        x.classList = "removeIcon";
        x.src = xImg;

        li.appendChild(p);
        li.appendChild(x);
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
    }

    let removeProjectForm = () => {
        let form = document.querySelector(".formContainer");
        leftSide.removeChild(form);
    }

    return {addProject, projectForm, removeProjectForm};
}    
)();

export default DOM_Module;