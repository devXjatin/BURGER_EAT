import React from 'react'
import {AiFillInstagram, AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
   <footer>
     <div>
        <h2>Burger Eat</h2>
        <p>We are trying to provide best taste of burger.</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <strong>All rights recieved @burgereat</strong>

     </div>
     <aside>
        <h4>Follow Us</h4>
        <a href="https://github.com/devXjatin"><AiFillGithub/></a>
        <a href="https://instagram.com/insane.jatin"><AiFillInstagram/></a>
     </aside>
   </footer>
  )
}

export default Footer