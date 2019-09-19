import React from "react";

const Jumbotron = props => {
  return (
    <div className="my-3">
      <div className="jumbotron jumbotron-fluid border border-danger rounded">
        <div className="container">
          <h1 className="display-4">Healthy Easy Meal Planning </h1>
          <p className="lead">
            We calculate dozens of personal, daily nutrient recommendations
            based on individual Dietary Reference Intakes (DRIs). Fill out our
            short form to begin your journey to healthy, planned meals.
          </p>
          <hr class="my-4" />
          <p>
            After signing up for free and learning your DRI, select from a list
            of delicious meals and plan out your week in a healthy and
            progressive manner.
          </p>
          <a class="btn btn-warning btn-lg float-right" href="/" role="button">
            Let's Get Started!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
