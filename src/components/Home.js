import React from 'react';
import './Home.css';

export default function Home(props){

    const profilePic = require('../images/Profile_Pic.jpg');

    return (
        <div role='container' className='homePicHolder'>
          <h1>Nick Justin</h1>
          <img alt='Nick smiling against a brick wall backdrop. He is very handsome' src={profilePic} className='profilePic' />
          <h2>Full-Stack Web Development</h2>
          <h3>Experience with HTML, CSS, React, Redux, and jQuery on the Front-end</h3>
          <h3>Experience with Node.js, Mongoose, and MongoDB on the Back-end</h3>
          <p>Please click on <strong>About Me</strong> for my story, <strong>Projects</strong> for information on projects
              I have worked on, and <strong>Contact Me</strong> if you want to do just that
          </p>
        </div>
    )
}

