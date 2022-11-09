import React from 'react'
import { Link } from "react-router-dom"
const styles = {
  header: {
    fontSize: 25,
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    textAlign:'center',
    backgroundColor:'black',
  },
  b: {
    fontSize: 30,
    // paddingBottom: 15,
    marginRight: 30,
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    textAlign:'justify',
    color: 'white',
    // backgroundColor:'#8E24AA',
    marginLeft: 10,
    fontSize: 35,
    paddingBottom: 15,
  },
  c: {
    display: 'flex',
    listStyle: 'none',
    textAlign:'center'
  }
}

const header = () => {
  return (
    <div className='header' style={styles.header}>
      {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh',color:'white',backgroundColor:'black'}}>
        // <h1> Jennifer Coranguez</h1>
      </div> */}
      <ul style={styles.c}>
        <li>
          <Link to="/" style={styles.b} >Home</Link>
        </li>
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
        {/* <li>
        <Link to="/footer" style={styles.b} >Footer</Link>
      </li> */}
      </ul>
    </div>



  )
}

export default header
