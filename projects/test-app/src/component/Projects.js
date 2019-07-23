import React,{Component} from 'react';
import PROJECTS from '../data/projects';
import ProjectProps from '../New/Practice';
import Header from './Header';
class Projects extends Component{

    render()
    {
        return(

            <div>
                <h1>
                HighLighted Projects!
                </h1>
                
                <div>
                    {
                        PROJECTS.map(p =>
                            (
                                <ProjectProps key={p.title} pro={p}/>
                                
                            ))
                        
                    }
                </div>
            </div>
        );

    }



}
export default Projects;