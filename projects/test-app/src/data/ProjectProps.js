import React, {Component} from 'react';
import { blockStatement } from '@babel/types';

class ProjectProps extends Component{

    render()
    {

        const{title,image,description,link}=this.props.pro;
        return(

            <div style={{display:'inline-block', width: 300, margin:15}}>
                <h1>{title}</h1>
                <h4>{description}</h4>
                <img src={image} alt={image} style={{width:200, height:150}}/>
                <br/>
                <a href={link}>{link}</a>

            </div>


        );
    }


}
export default ProjectProps;