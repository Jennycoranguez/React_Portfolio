import React from 'react'
import resumeimage from '../assests/resumeimage.png'
import resumeimage1 from '../assests/resumeimage1.png'

const styles = {
  link: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '27px',
    textAlign: 'center',
  },
  image: {
    marginRight: '100px',
    display: 'flex',
    margin: 'auto',
  },
  title: {
    textAlign: 'center',
    fontSize: '40px',
    marginBottom: '16px',
    marginTop: '6px'
  },
  divStyle: {
    overflow: 'auto',
    border: '4px solid ',
    height: '649px',
    marginRight: '38px',
    marginLeft: '76px'

  }
}

const Resume = () => {
  return (

    <div>
      <h1 style={styles.title}>Resume</h1>
      <h1 style={styles.link}> < a href="./resume.pdf" download > Download My Resume </a></h1>
      <div style={styles.divStyle}>
        <img style={styles.image} src={resumeimage} alt="..." />
        <img style={styles.image} src={resumeimage1} alt="..." />
      </div>
    </div>
  )
}

export default Resume

