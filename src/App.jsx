import React from "react";
import { createRoot } from "react-dom/client";

import Header from "./Header/header.jsx";
import Footer from "./Footer/footer.jsx";

import Tabs from "./Tabs/tabs.jsx";

const App = () => {
  const [tab, setTab] = React.useState(0);

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  return (
    <div className="container">
      <Header selectedTab={tab} onTabChange={handleTabChange} />

      <div className="container-view">
        <Tabs selectedTab={tab} />
      </div>

      <Footer selectedTab={tab} onTabChange={handleTabChange} />
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

export default App;
