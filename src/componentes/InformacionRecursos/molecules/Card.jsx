import React from "react";
import TextAtom from "../atoms/Text";
import ImageAtom from "../atoms/Image";
import "./Card.css";

const Card = ({ image, description, info }) => {
  return (
    <div className="card-molecule">
      <ImageAtom src={image} alt="Workout" className="card-image" />
      <TextAtom className="card-description">{description}</TextAtom>
      <TextAtom className="card-info">{info}</TextAtom>
    </div>
  );
};

export default Card;
