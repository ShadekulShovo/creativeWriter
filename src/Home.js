import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import ServiceCard from "./ServiceCard";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Yk5BxRk/pexels-pixabay-256514.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-dark">How To Lose 10kg in 10 Days?</h3>
            <p className="text-dark">
              Weight loss is not the answer to every health problem, but if your
              doctor recommends it, there are tips to help you lose weight
              safely.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/M1tmFyF/pexels-lisa-fotios-851213.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3> The Truth About Belly Fat</h3>
            <p>
              Surprise: Everyone has some belly fat, even people who have flat
              abs. That's normal. But too much belly fat can affect your health
              in a way that other fat doesn't.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/TKmCLmr/pexels-dziana-hasanbekava-7063767.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>How to Get Rid of Dandruff?</h3>
            <p>
              Regardless of the season, a flaky scalp can be a pesky problem.
              How do you get rid of dandruff? Below, some tips and tricks for
              how to address your head case — so that you can finally start
              wearing true black again.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 d-flex justify-content-center my-5">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service}></ServiceCard>
            ))}
          </div>
        </div>
      </section>

      <div className="accorian">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Difference between authorization and authentication
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Simply defined, authentication is the process of confirming
                  that someone is who they claim to be, while authorization is
                  the process of confirming that a person has access to the
                  particular apps, files, and data that they claim to have
                  access to.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Why are you using firebase? What other options do you have to
                implement authentication?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  <b>Why firebase?</b> <br /> <br />
                  You can use Firebase to develop online and mobile
                  applications, increase app quality, and help your customers
                  expand their businesses. <br />
                  Firebase administers the database in real-time. So data
                  communication between the database is simple and rapid. So, if
                  you want to build mobile applications like live streaming or
                  texting, you can utilize Firebase. <br />
                  Make an app without a backend server. <br />
                  No SQL database, therefore quicker. <br />
                  No need to pay for a backend server. <br />
                  Sync live data in the app. <br />
                  Real-time data synchronization across Android, iOS, and web
                  devices is possible with Firebase. <br /> <br /> <br />
                  <b>
                    When it comes to authentication, what other alternatives am
                    I left with?
                  </b>{" "}
                  <br /> <br />
                  STYTCH : STYTCH is a staunch supporter of password-less
                  authentication. It is focused on improving user experience and
                  cutting developer headaches by doing just that. <br />
                  Ory : Ory brings complete user experience control with its
                  headless user authentication management. <br />
                  Supabase : Supabase calls itself an open-source Firebase
                  alternative. <br />
                  Okta : Okta is again a flagbearer of password-less security.
                  However, you can ask for the strongest passwords with Okta as
                  well. <br />
                  PingIdentity: PingIdentity is shaped as an intelligent central
                  authentication module for all your cloud, in-house, and SaaS
                  implementations. <br />
                  Keycloak : Keycloak is an open-source user identity and access
                  management platform. <br />
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What other services does firebase provide other than
                authentication
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Firebase Realtime Database: was the first product released under
                the Firebase banner, making it the most established and
                dependable service. Scalability, sophisticated data structures,
                and powerful querying options are all features of Cloud
                Firestore. <br />
                Web hosting: Web apps, progressive web apps, and mobile landing
                pages all need hosting. Firebase provides static web hosting for
                HTML, CSS, and JavaScript apps. Test Lab is a service that
                allows you to test your app on real-world devices. It may be
                used with current testing tools like Android Studio. <br />
                App Distribution: This is a beta-testing distribution service.
                Symbolic. To handle pre-release builds, use App Distribution's
                CLI to establish a single hub for both iOS and Android apps.
                Firebase Realtime Database: was the first product released under
                the Firebase banner, making it the most established and
                dependable service.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                About Me
              </a>
            </li>
          </ul>
          <p class="text-center text-muted">© 2022 Company, Inc</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
