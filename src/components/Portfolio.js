import React from 'react'
import TriviaWarImage from '../assests/TriviaWarImage.png'
import AtHomeCulinary from '../assests/AtHomeCulinary.png'
import BallRunner from '../assests/ballrunner.png'
import NOTEtaker from '../assests/NOTEtaker.png'
import Button from 'react-bootstrap/Button';
const projects =[
  {
    Title:"Travia War",
    Description:"Player gets to test their trivia knowledge compared to other players across the United States by sharing their username and high score in a map view.",
    Image :TriviaWarImage,
    Link:'https://rpape3.github.io/Trivia-War/',
    Link:'https://github.com/RPAPE3/Trivia-War'
  },
  {
    Title:"At Home Culinary",
    Description:"As an user cooker I want an application where I can easily search for meals by name or ingredient So that I can create recipes on my own",
    Image :AtHomeCulinary,
    Link:'https://whispering-temple-78267.herokuapp.com/',
    Link: 'https://github.com/ivetteramos/Project2-girlGang'
  },
  {
    Title:"Ball Runner",
    Description:"Created a little maze game where you have to get rid of all the lines in the grid. This is a full-stack MERN App where we created a maze game where you have to get rid of all the lines in the grid.",
    Image :BallRunner,
    Link:'https://ballrunner.herokuapp.com/',
    Link:'https://github.com/DamonAndrews/InsertGameName'
  },
  {
    Title:"Note Taker",
    Description:"This an application where it allows the use to enter notes and save them, notes that are being savewill appear in a sidebar. Notes can be deleted by clicking the trash can icon next to the save note",
    Image :NOTEtaker,
    Link:'https://shielded-anchorage-58016.herokuapp.com/notes',
    Link:'https://github.com/Jennycoranguez/NOTEtaker'
  }
  
]
const Portfolio = () => {
  return (
    <div >
      <h1 >Portfolio</h1>
      {projects.map(project=> <div>
        <ul></ul>
        <h2 style={{width:'27%',display:'block',margin:'auto',fontSize:'20px',display:'flex'}}>{project.Title}</h2>
        <ul></ul>
        <p style={{width:'27%',display:'block',margin:'auto',fontSize:'20px',display:'flex'}}>{project.Description}</p>
        <ul></ul>
        <a style={{width:'27%',display:'block',margin:'auto',fontSize:'20px',display:'flex'}} href={project.Link} >View Application </a>
        <ul></ul>
        <a style={{width:'27%',display:'block',margin:'auto',fontSize:'20px',display:'flex'}} href={project.Link} >View Github Repositories </a>
        <ul></ul>s
        <img style={{width:'27%',display:'block',margin:'auto',}} src={project.Image}/>
        </div>)}
    </div>
  )
}

export default Portfolio
