import React from 'react'
import { Link } from "react-router-dom"
const styles = {
  header: {
    fontSize: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'black',
  },
  b: {
    fontSize: 30,
    marginRight: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'justify',
    color: 'white',
    marginLeft: 10,
    fontSize: 35,
    paddingBottom: 15,
  },
  c: {
    display: 'flex',
    listStyle: 'none',
    textAlign: 'center'
  }
}

const header = () => {
  return (
    <div className='header' style={styles.header}>

      <ul style={styles.c}>

        <li>
          <Link to="/about" style={styles.b} >About Me</Link>
        </li>
        <li>
          <Link to="/portfolio" style={styles.b} >Portfolio</Link>
        </li>
        <li>
          <Link to="/resume" style={styles.b} >Resume</Link>
        </li>
        <li>
          <Link to="/contact" style={styles.b} >Contact Me</Link>
        </li>

      </ul>
    </div>



  )
}

export default header
