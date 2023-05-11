import ProjectItem from '../ProjectItem';
import './index.scss'

import { ProjectList } from '../../helpers/ProjectList';


function Projects(){
    return <div className="projects">
        <div className='projectList'></div>
            {ProjectList.map((project, index) =>{
                return <ProjectItem id={index} name={project.name} image={project.image} showTag={index === 0} />
            })}
        
    </div> 
}

export default Projects;

