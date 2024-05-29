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
    return {addProject};
}    
)();

export default DOM_Module;