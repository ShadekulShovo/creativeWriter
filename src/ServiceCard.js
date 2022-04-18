import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { name, id, detail, price } = service;

  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title bg-primary text-white p-4">{name}</h5>
            <h5 className="bg-danger text-white p-2">Price:$ {price}</h5>
            <p className="card-text">{detail}</p>

            <Link to="/servicedetail">
              <Button variant="success">Details</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
