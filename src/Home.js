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
            <h3>How To Lose 10kg in 10 Days?</h3>
            <p>
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
    </div>
  );
};

export default Home;
