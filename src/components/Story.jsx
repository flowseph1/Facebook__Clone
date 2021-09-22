import { Avatar } from "@mui/material";
import React from "react";
import "./../Story.css";

function Story({ image, profileSrc, tittle }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{tittle}</h4>
    </div>
  );
}

export default Story;
