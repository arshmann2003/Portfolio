import ProjectItem from '../ProjectItem';
import './index.scss'

import { ProjectList } from '../../helpers/ProjectList';
import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { CircleLoader } from 'react-spinners';

function Projects(){

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 2000)
    }, [])


    
    return ( <div className="projects">
        {
            // loading?
            // <div className='testing'>
              
            //     {/* <CircleLoader
            //         color={'#D0021B'}
            //         loading={loading}
            //         size={800}
            //     /> */}
                
            // </div>
            // :
            // <div className='projectList'>
            //     {ProjectList.map((project, index) =>{
            //         return <ProjectItem id={index} name={project.name} image={project.image} showTag={index === 0} />
            //     })}   
            // </div>
            <div>
                <div className='under_dev_container'>
                <p className='under_dev'>UNDER DEVELOPMENT</p>
                </div>
            </div>
                
        }       
                                   
        </div> 
    )
}

export default Projects;

