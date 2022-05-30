import classes from "./Header.module.css";
import img from '../../assets/logout.svg'
import { logout } from "../../api/api.user";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  const signout = async () => {
    const res = await logout();
    if (res) {
      navigate("/login");
    }
  };
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <div className={classes.saveat}>SavEat</div>
      </div>
      <img src={img} alt="logout" className={classes.logout} onClick={signout}/>
    </div>
  );
};

export default Header;
