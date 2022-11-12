import React from 'react'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { TfiEmail } from 'react-icons/tfi'
import { FiPhoneCall } from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'
import { IconContext } from 'react-icons'

const styles = {
  icons: {
    lineHeight: 1.5,
    textAlign: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    justifyContent: 'center',
  },
  links: {
    padding: '100px',
    margin: '100px',
    color: 'blue',
  },
  title: {
    textAlign: 'center',
    fontSize: "46PX"
  },
}

const Contact = () => {
  return (
    <IconContext.Provider value={{ size: "2em", color: 'black', justifyContent: 'space-between' }}>
      <div>
        <h1 style={styles.title}>Contact Me </h1>
        <div style={styles.icons}>
          <a href="tel:4806175925" className='phonenumber' style={styles.links}> <h1> < FiPhoneCall /> (480)6175925 </h1> </a>
          <a href='mailto:jennifer.coranguez@gmail.com' className='email' style={styles.links}> <h1> <TfiEmail /> Email</h1></a>
          <a href="https://www.linkedin.com/in/jennifercoranguez" className='linkedin' style={styles.links} > <h1> <AiOutlineLinkedin /> Linkedin</h1> </a>
          <a href="https://github.com/Jennycoranguez" className='github' style={styles.links} > <h1> <BsGithub /> Github </h1> </a>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default Contact
