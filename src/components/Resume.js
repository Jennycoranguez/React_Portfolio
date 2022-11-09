import React from 'react'
import resumeimage from '../assests/resumeimage.png'
import resumeimage1 from '../assests/resumeimage1.png'

const styles={
  button:{
    // alignItems:'center',
    // display:'flex',
    // justifyContent:'center',
    // marginRight: 100,
    // padding: '100px',
    // margin:'200px',
    // size: '2em',
    // marginLeft: '20px',
    // paddingBottom: 30,
  },
  image:{

  }
}

const Resume = () => {
  return (
    
    <div className="resume" >
      <h1 >Resume</h1>
      <h1 style={{display:'flex',flexDirection: 'column'}}> <button variant="primary"><a href="./resume.pdf" download > Download My Resume </a></button></h1>
       <img src={resumeimage} className="center" style={{marginRight:'100px',display:'flex',margin:'auto',}}alt="..." />
        <img src={resumeimage1} className="center" style={{marginRight:'100px',display:'flex',margin:'auto',}} alt="..." />
    </div>
  
  )
}

export default Resume

