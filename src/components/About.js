import React from 'react'
import myself from "../assests/jennypicture.jpg"

const styles = {
  image: {
    width: "28%",
    marginLeft: '100px',
    marginTop: '-388px'
  },
  text: {
    textAlign: 'center',
    fontSize: '30px',
    marginLeft: '735px',
    marginRight: '74px',
  },
  title: {
    textAlign: 'center',
    marginLeft: '772px',
    fontSize: '37px'
  },
  text2: {
    textAlign: 'center',
    marginLeft: '772px',
    fontSize: '37px',
  },
  text3:{
    textAlign: 'center',
    fontSize: '30px',
    marginLeft: '841px',
    marginRight: '74px',
    fontWeight: 'bold'
  }
}

const About = () => {
  return (
    <section>
      <div>
        <h1 style={styles.title}>About Me</h1>
        <p style={styles.text3}>Welcome to my portfolio</p>
        <p style={styles.text}>I'm Jennifer Coranguez, I was born and raised in Phoenix, Arizona. As a recent graduate as a Full Stack Developer from the University of Arizona. I am so excited to begin my career in the field of technologies. I look forward to putting my education and acquired skills to use, and learning more each day.  </p>
        <p style={styles.text2}> Thank you for looking at my portfolio!!</p>
        <img style={styles.image} src={myself} className="center" alt="..." />
      </div>
    </section>

  )
}
export default About