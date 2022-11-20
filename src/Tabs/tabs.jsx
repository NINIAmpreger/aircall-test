import React from "react";

import Inbox from "./Inbox/inbox.jsx";

const Tabs = ({ selectedTab }) => {
  return <div>{selectedTab === 0 && <Inbox />}</div>;
};

export default Tabs;
