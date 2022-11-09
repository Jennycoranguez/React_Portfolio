import React from 'react'
import { AiOutlineLinkedin} from 'react-icons/ai'
import { TfiEmail } from 'react-icons/tfi'
import { FiPhoneCall } from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'
import { IconContext } from 'react-icons'


const styles = {
  icons: {
    fontSize: "1rem",
    fontWeight: 1.5,
    lineHeight: 1.5,
    textAlign: 'center',
    justifyContent:'space-between',
    display:'flex',
    flexDirection: 'row',
    alignItems:'center',
    fontSize: 15,
    paddingBottom: 15,
    marginRight: 100,
    justifyContent:'center',

  },
  links:{
    padding: '100px',
    margin:'100px',
    color:'blue',
  },
  
}

  
const Contact = () => {
  return (
    <IconContext.Provider value={{size:"2em",color:'black',justifyContent:'space-between'}}>
    <div>
      <div id='contact' >
      <h1>Contact Me </h1>
        <div className="social" style={styles.icons}>
          <a href="tel:4806175925" className='phonenumber' style={styles.links}> <h1> < FiPhoneCall/> (480)6175925 </h1> </a>
          <a href='mailto:jennifer.coranguez@gmail.com' className='email'style={styles.links}> <h1> <TfiEmail /> Email</h1></a>
          <a href="https://www.linkedin.com/in/jennifercoranguez" className='linkedin'style={styles.links} > <h1> <AiOutlineLinkedin/> Linkedin</h1> </a>
          <a href="https://github.com/Jennycoranguez" className='github' style={styles.links} > <h1> <BsGithub/> Github </h1> </a>
          </div>
      </div>
    </div>
  </IconContext.Provider>   
  )
}

export default Contact
