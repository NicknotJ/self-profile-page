import React, {Component} from 'react';
import './AboutMe.css'

//ToDo: Write a better "Who Am I?"
//ToDo: Record gif of Yonaguni isle being circled
//ToDo: Find more pictures to showcase certain parts of life

export default class AboutMe extends Component{
    constructor(props){
        super(props);
        this.state = {
            img: require('../images/Profile_Pic.jpg')
        }
    }

    handleClick(e, value){
        e.preventDefault();
        return this.setState({
            img: value
        })
    }

    render(){
        return (
            <div role='container' className='aboutMeContainer'>
              <h1>Who am I?</h1>
              <div role='container' className='aboutMeImg'>
                <img className='revolvingImage' alt='this is temporary' src={this.state.img} />
                <p>I'm <a href='#' onClick={e => this.handleClick(e, require('../images/Profile_Pic.jpg'))}>Nick Justin</a>, current Full-Stack Web Developer and 2013 graduate from the Olin Business School at Washington University in St. Louis. After graduation,
                     I found myself in the insurance industry. Soon afterwards, I fled the country to teach English in Japan, specifically on the island of 
                     <a href='#' onClick={e => this.handleClick(e, `https://upload.wikimedia.org/wikipedia/commons/d/dc/Map-yonaguni.png`)}> Yonaguni.</a> </p>
              </div>
            </div>
        )
    }
}