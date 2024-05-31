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
        formContainer.style.cssText = `
            display: flex;
            gap: 6px;
            flex-wrap:wrap;
            justify-content: center;
            align-content: center;

            background-color: blue;
            position: absolute;
            width: 80%;
            height: auto;
            border: 1px solid black;
            border-radius: 6px 2px 6px 6px;
            background-color: whitesmoke;
            right: 30px;
            top: 19px;
            padding: 10px;
        `;

        let label = document.createElement("label");
        let input = document.createElement("input");
        let p = document.createElement("p");
        let button = document.createElement("button");

        label.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        input.style.cssText = `
            padding: 2px 10px;
            height: 18px;
        `;

        p.innerText = "Project Name";
        button.innerText = "Submit";

        button.style.cssText = `
            width: 50px;
        `;

        label.appendChild(p);
        formContainer.appendChild(label);
        formContainer.appendChild(input);
        formContainer.appendChild(button);

        leftSide.appendChild(formContainer);


    }
    return {addProject, projectForm};
}    
)();

export default DOM_Module;