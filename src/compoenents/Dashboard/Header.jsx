import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <div className={classes.saveat}>SavEat</div>
      </div>
    </div>
  );
};

export default Header;
