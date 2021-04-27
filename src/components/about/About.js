import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me</h3>
        <p>
        I'm Ivan Gorojovsky. Since I was a kid I have been curious about computing, programming and technologies in general, but a few years ago I began to study  them formally. Fortunately, in develomment i found my vocation. By the way, I love preparing coffee while spending hours and hours creating, modeling and developing. I really enjoy the learning process, for this reason, I feel very identified with the quote "Live as if you were going to die tomorrow, learn as if you were going to live forever". In my free time i love spending it with my friends, updating myself on some technologies, reading romantic novelas and playng sports. My favourite ones are soccer and sport fishing. I consider myself to be a responsible, kind, firendly, optimistic and empathetic person. Also, I am keen on working with others and shearing ideas as a team from different perspectives to increase the knowledge on it.
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;