import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Burger Eat</h4>
          <p>
            We are Burger Eat. The most like place of everyone to Eat Burger
          </p>
          <p>
            Explore different types of Burgers and Beverages. Click Below to see
            the menu{" "}
          </p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Jatin</h3>
            </div>
            <p>I am Jatin. Founder of Burger Eat</p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
