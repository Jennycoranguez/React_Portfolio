import React from 'react'
import TriviaWarImage from '../assests/TriviaWarImage.png'
import AtHomeCulinary from '../assests/AtHomeCulinary.png'
import BallRunner from '../assests/ballrunner.png'
import NOTEtaker from '../assests/NOTEtaker.png'

const styles = {
  title: {
    fontSize: '45px',
    textAlign: 'center'
  },
  image: {
    width: '69%',
    display: 'flex',
    margin: 'auto',
    textAlign: 'center'
  },
  text: {
    fontSize: '29px',
    textAlign: 'center'
  },
  link: {
    textAlign: 'center',
    fontSize: '27px'
  },
  divStyle: {
    border: '2px solid ',
    height: 'auto',
    marginRight: '38px',
    marginLeft: '76px',
    marginTop: '13px',
    textAlign: 'center',
    marginLeft: '406px',
    marginRight: '435px'
  }

}
const Portfolio = () => {
  return (

    <div>
      <div style={styles.divStyle}>
        <h1 style={styles.title} > Travia War</h1>
        <ul style={styles.text}>Front-End Project</ul>
        <p style={styles.text}> Player gets to test their trivia knowledge compared to other players across the United States by sharing their username and high score in a map view.</p>
        <a href='https://rpape3.github.io/Trivia-War'><h1 style={styles.link} > View Application Demo</h1></a>
        <a href='https://github.com/RPAPE3/Trivia-War'><h1 style={styles.link} > View Github  Repositories</h1></a>
        <img style={styles.image} src={TriviaWarImage} alt="..." />
      </div>

      <div style={styles.divStyle} >
        <h1 style={styles.title}> At Home Culinary</h1>
        <ul style={styles.text}> Single-Page Project</ul>
        <p style={styles.text}> As an user cooker I want an application where I can easily search for meals by name or ingredient So that I can create recipes on my own.</p>
        <a href='https://whispering-temple-78267.herokuapp.com/'><h1 style={styles.link} > View Application Demo</h1></a>
        <a href='https://github.com/ivetteramos/Project2-girlGang'><h1 style={styles.link} > View Github Repositories</h1></a>
        <img style={styles.image} src={AtHomeCulinary} alt="..." />
      </div>

      <div style={styles.divStyle}>
        <h1 style={styles.title}> Note Taker</h1>
        <ul style={styles.text}>Back End Application</ul>
        <p style={styles.text}>This an application where it allows the use to enter notes and save them, notes that are being savewill appear in a sidebar. Notes can be deleted by clicking the trash can icon next to the save note</p>
        <a href='https://shielded-anchorage-58016.herokuapp.com/notes'><h1 style={styles.link}> View Application Demo</h1></a>
        <a href='https://github.com/Jennycoranguez/NOTEtaker'><h1 style={styles.link}> View Github Repositories</h1></a>
        <img style={styles.image} src={NOTEtaker} alt="..." />
      </div>

      <div style={styles.divStyle}>
        <h1 style={styles.title}> Ball Runner </h1>
        <ul style={styles.text}>Full Stack Project</ul>
        <p style={styles.text}> Created a little maze game where you have to get rid of all the lines in the grid. This is a full-stack MERN App where we created a maze game where you have to get rid of all the lines in the grid.</p>
        <a href='https://ballrunner.herokuapp.com/'><h1 style={styles.link} > View Application Demo</h1></a>
        <a href='https://github.com/DamonAndrews/InsertGameName'><h1 style={styles.link}> View Github Repositories</h1></a>
        <img style={styles.image} src={BallRunner} alt="..." />
      </div>

    </div>

  )
}

export default Portfolio
