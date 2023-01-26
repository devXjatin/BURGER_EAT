import React from 'react'
import {motion} from 'framer-motion'
import me from "../../assets/founder.jpg"
const Founder = () => {

    const options={
        initial:{
            x:"-100%",
            opacity:0
        },
        whileInView:{
            x:0,
            opacity:1
        }
    }
  return (
    <section className='founder'>
        <motion.div {...options} >
            <img src={me} alt="Founder" height={200} width={200}/>
            <h3>Jatin</h3>
            <p>Hey, I am Jatin Founder of Burger Eat <br />
            Our Aim to provide Best Burger in city.</p>
        </motion.div>

    </section>
  )
}

export default Founder