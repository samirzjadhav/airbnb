import React from "react";

const card = (props) => {
  console.log(props);
  return (
    <div className="card-container">
      <img src={props.img} alt="" />
      <div className="card-rating flex gap-[6px] items-center">
        <img src="./Star.svg" alt="" width={14} height={14} />
        <p>{props.rating}</p>
        <p>{props.reviewCount}</p>
        <p>.{props.country}</p>
      </div>
      <div className="card-details">
        <p>{props.title}</p>
        <p>
          <strong>From ${props.price} </strong>/ person
        </p>
      </div>
    </div>
  );
};

export default card;
