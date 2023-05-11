import React from 'react'
import { useParams } from 'react-router-dom';
import './index.scss'
import { ProjectList } from '../helpers/ProjectList';
import {GitHub} from '@material-ui/icons';


function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    let showTag = false;  
    if(id==2){showTag = true}
    if(id==3){showTag = true}
    
    return (
        <div className='project'>
            <h1>{project.name} {project.message}</h1>
            <div className='projectLinks'>
                <GitHub id='gitHub' onClick={() => openGitRepo(project.repoLink)}/>
                {showTag && <p id='demo' onClick={() => liveDemo(project.demoLink) }>LIVE DEMO</p>}
            </div>
            <p> <span id='Description'>Description:</span> {project.description}</p>
            <p> <span id='skills'>Skills developed:</span> {project.skills}</p>
            <p> <span id='learned'>Learned:</span> {project.learned} </p>
        </div>
    );

}

function openGitRepo(link){
    window.open(link);
}

function liveDemo(link){
    window.open(link)
}
export default ProjectDisplay;

