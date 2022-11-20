import React from "react";

import { IoApps } from "react-icons/io5";

import {
  RiPhoneFill,
  RiUserLine,
  RiSettings5Line,
  RiFocusLine,
} from "react-icons/ri";

import "./footer.css";

const Footer = ({ selectedTab, onTabChange }) => {
  return (
    <footer>
      <div
        className="footer-btn"
        onClick={() => {
          onTabChange(0);
        }}
      >
        <RiPhoneFill size={20} />
        <div
          style={{
            position: "absolute",
            padding: "2px",
            top: "-40%",
            left: "50%",
            backgroundColor: "#F44D1D",
            borderRadius: "50%",
            color: "#fff",
            fontSize: 10,
            fontWeight: 700,
          }}
        >
          12
        </div>
        {selectedTab === 0 && <div className="footer-btn-active"></div>}
      </div>

      <div
        className="footer-btn"
        onClick={() => {
          onTabChange(1);
        }}
      >
        <RiUserLine size={20} />
        {selectedTab === 1 && <div className="footer-btn-active"></div>}
      </div>

      <div
        className="footer-btn-center"
        onClick={() => {
          onTabChange(4);
        }}
      >
        <div className="footer-btn-center-wrapper">
          <IoApps size={24} color="#fff" />
        </div>
      </div>

      <div
        className="footer-btn"
        onClick={() => {
          onTabChange(2);
        }}
      >
        <RiSettings5Line size={20} />
        {selectedTab === 2 && <div className="footer-btn-active"></div>}
      </div>

      <div
        className="footer-btn"
        onClick={() => {
          onTabChange(3);
        }}
      >
        <RiFocusLine size={20} />
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 4px)",
            left: "calc(50% - 3px)",
            width: "6px",
            height: "6px",
            backgroundColor: "#39B71F",
            borderRadius: "50%",
          }}
        >
          &nbsp;
        </div>
        {selectedTab === 3 && <div className="footer-btn-active"></div>}
      </div>
    </footer>
  );
};

export default Footer;
