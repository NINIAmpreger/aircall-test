import React from "react";

import { RiArchiveLine } from "react-icons/ri";

import "./archive.css";

const Archive = () => {
  return (
    <div className="archive">
      <RiArchiveLine size={20} />
      <span>Archive all calls</span>
    </div>
  );
};

export default Archive;
