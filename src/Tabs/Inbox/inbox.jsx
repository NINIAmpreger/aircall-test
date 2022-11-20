import React from "react";

import Archive from "./Component/Archive/archive.jsx";
import Item from "./Component/Item/item.jsx";

import "./inbox.css";

const Inbox = () => {
  const data = [
    {
      phone: "+33 6 45 13 53 91",
      description: "tried to call on Xavier",
      time: "2017-07-27 19:58:00",
      count: 1,
    },
    {
      phone: "+33 6 45 13 53 91",
      description: "tried to call on Xavier",
      time: "2017-07-21 12:34:00",
      count: 2,
    },
    {
      phone: "Arthur Andre",
      description: "tried to call on PrivateSportShop",
      time: "2017-07-05 19:03:00",
      count: 8,
    },
    {
      phone: "+33 1 76 44 04 77",
      description: "tried to call on Xavier",
      time: "2017-06-23 17:57:00",
      count: 1,
    },
  ];

  return (
    <div className="inbox">
      <Archive />

      {data.map((d, index) => (
        <Item row={d} key={index} />
      ))}
    </div>
  );
};

export default Inbox;
