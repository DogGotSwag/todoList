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
        formContainer.innerText = 'hello';
        formContainer.style.cssText = `
            background-color: blue;
            position: absolute;
            width: 90%; 
        `;
        leftSide.appendChild(formContainer);


    }
    return {addProject, projectForm};
}    
)();

export default DOM_Module;