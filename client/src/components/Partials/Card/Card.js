import React from "react";

const Card = props => {
  return (
    <div className="card mt-5 border-danger">
      <div className="card-body">
        <h1 className="card-title text-warning">{props.title1}</h1>
        <h2 className="card-title text-warning">{props.title2}</h2>
        <h3 className="card-title text-warning">{props.title3}</h3>
        <hr />
        <p className="card-text">{props.body}</p>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
