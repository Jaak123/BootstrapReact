import React from "react";
import Cards from "./Cards";

const Card = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-md-4">
          <Cards />
        </div>
        <div className="col-md-4">
          <Cards />
        </div>
        <div className="col-md-4">
          <Cards />
        </div>
      </div>
    </div>
  );
};
export default Card;
