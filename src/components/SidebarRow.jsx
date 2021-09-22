import { Avatar } from "@mui/material";
import React from "react";

function SidebarRow({ src, Icon, tittle }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{tittle}</h4>
    </div>
  );
}

export default SidebarRow;
