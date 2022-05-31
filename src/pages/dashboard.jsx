import SideBar from "../compoenents/Dashboard/SideBar";
import ItemMenu from "../compoenents/Dashboard/ItemMenu";
import BoxMenu from "../compoenents/Dashboard/BoxMenu";
import OrderMenu from "../compoenents/Dashboard/orderMenu ";
import DealMenu from "../compoenents/Dashboard/dealMenu ";
import OfferMenu from "../compoenents/Dashboard/OfferMenu";
import { useEffect, useState } from "react";
import Header from "../compoenents/Dashboard/Header";
import { loggedIn } from "../api/api.user";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    async function log() {
      const res = await loggedIn()
      if (!(res)) {
        navigate("/login");
      } else {
      }
    }
    log();
  }, [navigate]);
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
        {active === 2 && <BoxMenu />}
        {active === 3 && <OrderMenu />}
        {active === 4 &&  <OfferMenu />}
        {active === 5 && <DealMenu />}
      </div>
    </div>
  );
};

export default Dashboard;
