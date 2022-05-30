import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Formulaire from '../../compoenents/Form/Form'
import Wlc from '../../compoenents/Wlc/Wlc'
import style from './Login.module.css'
import { loggedIn } from "../../api/api.user";
import { LoaderPage } from "./loader";
import ButtonLoader from "../../UI/ButtonLoader";

const Login = () => {


  const { state } = useLocation();

  let toggle;
  if (state) {
    toggle = state.toggle;
  } else {
    toggle = false;
  }

  const [loading, setLoading] = useState(!toggle);

  const navigate = useNavigate();
  useEffect(() => {
    async function log() {
      if (await loggedIn()) {
        console.log("finally")
        setLoading(false);
        navigate("/dashboard");
      } else {
        setLoading(false);
      }
    }
    log();
  }, [navigate]);


  return (
    <>
      
          <div className={style.container}>
        <Formulaire></Formulaire>
        <Wlc></Wlc>
         </div>

    </>
   
  )
}

export default Login