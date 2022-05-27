import SideBar from "../compoenents/Dashboard/SideBar";
import ItemMenu from "../compoenents/Dashboard/ItemMenu";
import { useState } from "react";
import Header from "../compoenents/Dashboard/Header";
const Dashboard = () => {
  const [active, setActive] = useState(1);

  const f = (x) => {
    setActive(x);
  };

  return (
    <div
      style={{
        marginLeft: "calc(50px + 1vmin)",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          minHeight: " calc( 100vh - 1vmin - 100px)",
        }}
      >
        <SideBar fn={f} />
        {active === 1 && <ItemMenu />}
      </div>
    </div>
  );
};

export default Dashboard;
