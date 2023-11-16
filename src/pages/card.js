import React from "react";

const card = (props) => {
  return (
    <div className="card-container">
      <img src="./card-image.png" alt="" />
      <div className="card-rating flex gap-[6px] items-center">
        <img src="./Star.svg" alt="" width={14} height={14} />
        <p>5.0</p>
        <p>(6)</p>
        <p>.USA</p>
      </div>
      <div className="card-details">
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <strong>From $136 </strong>/ person
        </p>
      </div>
    </div>
  );
};

export default card;
