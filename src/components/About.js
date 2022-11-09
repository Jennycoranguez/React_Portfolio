import React from 'react'
import myself from "../assests/jennypicture.jpg"
const styles = {
  image: {
    display: 'flex',
    width: '400px',
    margin: 25,
    marginLeft: '150px',
    marginTop: '-120px',

  },
  text: {
    fontSize: 25,
    paddingTop: '100px',
    color: "black",
    textAlign: "center",
    paddingTop: "120px",

  },
  paragraphText: {
    //  height: 20,
    //  width: 460,
    color: 'blue',
    fontSize: 25,
    color: 'black',
    marginRight: '100px',
    display: 'flex'
  }

}


const About = () => {
  return (
    // // <section>

    //   <div id='about'>
    //   <div className='about' style={styles.text}>
    //     <h1 >  </h1>
    //     <p style={styles.paragraphText}> As a recent graduate as a Full Stack Developer from the University of Arizona. I am so excited to begin my career in the field of technologies. I look forward to putting my education and acquired skills to use, and learning more each day. </p>
    //   </div>
    //   <img src={myself} className="center" style={styles.image} alt="..." />
    //   </div>
    // {/* </section> */}
    <div style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", alignContent: "stretch", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word', width: '200px' }}>


        <p> jkhadfkjhadkjfhkadhffffffgjfssssssssssssssssssssssssssssssssssssssssssssssssssssssssjfgdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddjfggggggggggggfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddpjoooo </p>
      </div>
      <img src={myself} className="center" style={{ width: '410px' }} alt="..." />

    </div>
  )
}
export default About