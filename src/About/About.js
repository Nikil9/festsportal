import React from "react";
import {useHistory } from "react-router-dom";

// import background from '../../src/images/p2.jpg';
import './About.css';



function About() {
  const history = useHistory();

  const handleClick=()=>{
    history.push({
      pathName:'/home',
      state: {type: 'student'}
    })
  }

  return (
    <div>
    <div class="about-section">
      <h2>About Us Page</h2><br/>
      <p>Our goal is to help the students, who are intrested, but unfortunately missing the information related to fests. Which results to students missing the chance to participate events and increase their skill set by meeting new minds around them. By using our website you can register the events in your college with in your finger tip with out wasting time.</p>
      <br/><br/><button type="button" class="block" onClick={handleClick}>check our Events !</button>

    </div>
</div>
  );
}

export default About;