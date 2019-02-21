import React, {Component} from 'react';
import './AboutMe.css'

export default class AboutMe extends Component{

    returnImg(){
        const img = require('../images/Profile_Pic.jpg');
        return img;
    }

    render(){
        return (
            <div role='container' className='aboutMeContainer'>
              <h1>Who am I?</h1>
              <div role='container' className='aboutMeImg'>
                <p>This is going to be a bunch of really funny, but smart stuff</p>
                <img className='revolvingImage'alt='this is temporary' src={this.returnImg()} />
              </div>
            </div>
        )
    }
}