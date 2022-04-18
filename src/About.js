import React from "react";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <dir className="col-md-6 d-flex align-items-center">
            <div>
              <h1>Hi,</h1>
              <h2>Name : S. K. M Shadekul Islam </h2>
              <p>
                Skill: I am Web Developer. I am also an expert in HTML, CSS,
                JAVA-Script, Flutter,c, c++, Python PHP with WordPress.
              </p>

              <p>
                My goal is a be one of the best Full Stack Web Developer in
                2022.Making yourself more efficient in the web development
                sector.I would like to join a job as a developer in any company
                at the end of this course so that I can pursue my own hobbies.{" "}
              </p>
              <button type="button" class="btn btn-primary btn-lg">
                Learn More
              </button>
            </div>
          </dir>

          <div className="col-md-6 product">
            {/* <img src='./images/product.jpg' alt="" /> */}
            <img src="https://ibb.co/KDGmTP5" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
