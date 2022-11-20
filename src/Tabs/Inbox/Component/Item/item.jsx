import React from "react";

import { format, parse } from "date-fns";

import { MdPhone } from "react-icons/md";
import { RiMore2Line } from "react-icons/ri";
import { CgArrowDown, CgArrowUp } from "react-icons/cg";

import "./item.css";

const Item = ({ row }) => {
  return (
    <React.Fragment>
      <div className="separator">
        <div className="separator-dot">
          <div className="separator-dot-line" />
        </div>
        <div className="separator-text">
          {format(
            parse(row.time, "yyyy-MM-dd HH:mm:ss", new Date()),
            "MMMM d, yyyy"
          )}
        </div>
        <div className="separator-dot">
          <div className="separator-dot-line" />
        </div>
      </div>

      <div className="item">
        <div style={{ position: "relative" }}>
          <CgArrowDown
            color="#FC5624"
            style={{ position: "absolute", left: 5, top: -2 }}
          />
          <MdPhone size={20} color="#BABABA" />
        </div>

        <div className="item-info">
          <div className="item-info-phone">
            {row.phone}
            {row.count > 1 && <span className="count">{row.count}</span>}
          </div>
          <div className="item-info-description">{row.description}</div>
        </div>

        <RiMore2Line color="#cacaca" />

        <div className="item-time">
          {format(parse(row.time, "yyyy-MM-dd HH:mm:ss", new Date()), "hh:mm")}
        </div>

        <div className="item-noon">
          {format(parse(row.time, "yyyy-MM-dd HH:mm:ss", new Date()), "a")}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Item;
