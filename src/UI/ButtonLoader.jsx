import classes from "./ButtonLoader.module.css"
const ButtonLoader = () => {
  return (
    <div className={classes.load}>
      <div className={classes.loadOne}></div>
      <div className={classes.loadTwo}></div>
      <div className={classes.loadThree}></div>
    </div>
  );
};

export default ButtonLoader;
