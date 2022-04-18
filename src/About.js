import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <dir className="col-md-6 d-flex align-items-center">
            <div>
              <h1>As Salamu Alaykum,</h1>
              <h2>I am S. K. M Shadekul Islam </h2>
              <p>
                Skill: <br /> 1. Content Writing <br /> 2. Keyword Research{" "}
                <br /> 3. HTML, CSS (Bootstrap) <br /> 4. Javascript, Python
                (Django)
              </p>

              <p>
                My Goal for 2022: <br /> 1. Maintain a CGPA of 3.85 <br /> 2.
                Focus on Web Development <br /> 3. Practice Data Structure and
                Algorithm Extensively <br />
                4. Regular Problem Solving <br /> 5. Maintain a weight of 65 KG
              </p>
              <button type="button" class="btn btn-success btn-lg aboutButton">
                <a
                  href="https://medium.com/@shadekulshovo"
                  className="text-white"
                >
                  Learn More
                </a>
              </button>
            </div>
          </dir>

          <div className="col-md-6 product">
            {/* <img src='./images/product.jpg' alt="" /> */}
            <img src="https://i.ibb.co/0DcXmpt/IMG-1003.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// npm install -g firebase-tools
// firebase login
// firebase init
// firebase deploy
