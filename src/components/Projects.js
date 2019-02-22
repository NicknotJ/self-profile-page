import React from 'react';
import './Projects.css';

export default function Project(props){

    const projects= [{name: 'Ouch, My Everything', end: 'Full', 
      finished: Date('February 16, 2019'), tags: ['Thinkful', 'Pain Journal', 'Solo'],
      database: 'MongoDB', frontEnd: ['React', 'Redux'], backEnd: ['Mongoose', 'Node.js'], img: require('../images/Profile_Pic.jpg'), 
      alt:'Screenshot of project', desc: 'Online Pain Journal'},
      {name: 'Self-Profile Website', end: 'Front', finished: null, tags: ['Thinkful', 'Website', 'Solo'],
      database: null, frontEnd: ['React', 'React-Router'], backEnd: null, img: require('../images/Profile_Pic.jpg'), desc:'Self-Promotion Site'}];

    function projectCreator(project){
        
        const projectList = project.map((project, index) => {
            return (<div class='one-third column' key={index}>
              <h5>{project.name}</h5>
              <img src={project.img} alt={project.alt} />
              <p>{project.desc}</p>
            </div>)
        })
        return projectList;
    }


    return (
    <div role='container' class='masterProject'>
      <div role='container' class="row">
         <div class="one column">
            <form>
              <label htmlFor='whichEnd'>Which End:</label>
              <select name='whichEnd'>
                <option value='any'>Any</option>
                <option value='back'>Back</option>
                <option value='front'>Front</option>
                <option value='full'>Full</option>
              </select>
              <label htmlFor='searchTag'>Search Tags:</label>
              <input name='searchTag' placeholder='Thinkful'></input>
              <label htmlFor='searchTechStack'>Search TechStack:</label>
              <input placeholder='React'></input>
            </form>
         </div>
      </div>
      <div role='container' class='row'>
        {projectCreator(projects)}
      </div>
    </div>
    )
}