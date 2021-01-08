import React from "react";
import axios from "axios";

export default function Card({ title, id, cardName }) {
  return (
    <div>
      {cardName}
      {title}
      {id}
    </div>
  );
}
