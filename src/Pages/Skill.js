import React from "react";
const Skill= () => {
  return (
    <section className="skills">
      <h1 className="section-bg-heading">My skills</h1>
      <h1 className="section-heading">Professional skills</h1>
      <h3 className="sub-heading">
        my <span>skills</span>
      </h3>

      <div className="skills-cards">
        <div className="skills-card">
          <div className="skill">
            <span>HTML</span>
            <span>95%</span>
          </div>
          <p>
            Proficient in HTML for building portfolio websites. Capable of
            creating clean, semantic markup to structure content effectively.
            Skilled in integrating multimedia elements, such as images, videos,
            and interactive components. Knowledgeable in implementing responsive
            design principles for optimal viewing across devices. Familiar with
            HTML5 standards and best practices to ensure accessibility and
            SEO-friendlines
          </p>
          <div className="skills-card-progress">
            <div className="skills-card-circle"> </div>
          </div>
        </div>

        <div className="skills-card">
          <div className="skill">
            <span>CSS</span>
            <span>85%</span>
          </div>
          <p>
            CSS Skill Note: Proficient in CSS for crafting visually appealing
            portfolio websites. Experienced in styling HTML elements to achieve
            cohesive and aesthetically pleasing layouts. Skilled in utilizing
            CSS frameworks like Bootstrap for efficient design implementation.
            Knowledgeable in responsive design techniques for seamless
            adaptation to various screen sizes. Proficient in CSS animations and
            transitions to enhance user experience and engagement.
          </p>
          <div className="skills-card-progress2">
            <div className="skills-card-circle2"> </div>
          </div>
        </div>

        <div className="skills-card">
          <div className="skill">
            <span>Javascript</span>
            <span>75%</span>
          </div>
          <p>
            JavaScript Skill Note: Proficient in JavaScript for dynamic and
            interactive portfolio websites. Capable of implementing client-side
            functionality to enhance user experience, such as form validation,
            interactive elements, and dynamic content loading. Skilled in
            utilizing JavaScript frameworks like React or Vue.js for efficient
            front-end development. Experienced in integrating third-party APIs
            to add advanced features and functionality. Knowledgeable in modern
            JavaScript concepts, including ES6 syntax and asynchronous
            programming, to create robust and responsive web applications.
          </p>
          <div className="skills-card-progress3">
            <div className="skills-card-circle3"> </div>
          </div>
        </div>

        <div className="skills-card">
          <div className="skill">
            <span>React</span>
            <span>70%</span>
          </div>
          <p>
            React.js Skill Note: Experienced in leveraging React.js to build
            captivating portfolio websites with dynamic user interfaces.
            Proficient in creating reusable components for modular and efficient
            code organization. Skilled in state management with React hooks or
            Redux for maintaining application state and facilitating data flow.
            Knowledgeable in using React Router for seamless navigation and
            multi-page functionality within a single-page application.
            Experienced in optimizing performance through virtual DOM
            manipulation and code splitting techniques.
          </p>
          <div className="skills-card-progress4">
            <div className="skills-card-circle4"> </div>
          </div>
        </div>

        <div className="skills-card">
          <div className="skill">
            <span>Git/github</span>
            <span>65%</span>
          </div>
          <p>
            React.js Skill Note: Proficient in React.js for crafting sleek and
            responsive portfolio websites. Capable of building modular
            components to ensure code reusability and maintainability. Skilled
            in state management using hooks or Redux for efficient data handling
            and application flow. Experienced in integrating external APIs and
            libraries to enhance functionality and user experience.
            Knowledgeable in optimizing performance through virtual DOM
            manipulation and lazy loading techniques for seamless navigation.
          </p>
          <div className="skills-card-progress5">
            <div className="skills-card-circle5"> </div>
          </div>
        </div>

        <div className="skills-card">
          <div className="skill">
            <span>CI/CD</span>
            <span>60%</span>
          </div>
          <p>
            Proficient in integrating React.js applications into Continuous
            Integration/Continuous Deployment (CI/CD) pipelines. Capable of
            setting up automated build, test, and deployment processes using
            tools like Jenkins, Travis CI, or GitHub Actions. Skilled in
            configuring deployment environments and managing version control
            workflows for seamless integration with CI/CD pipelines. Experienced
            in implementing code quality checks, such as linting and unit
            testing, to ensure reliability and maintainability throughout the
            development lifecycle. Knowledgeable in deploying React.js
            applications to various hosting platforms.
          </p>
          <div className="skills-card-progress6">
            <div className="skills-card-circle6"> </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
