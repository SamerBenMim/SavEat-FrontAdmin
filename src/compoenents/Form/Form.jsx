import React from 'react'
import style from './Form.module.css'
import logo from '../../assets/logo.png'
import Button  from '../button/Button'
import { Formik, Form } from "formik";

const Formulaire = () => {
  return (
    <div className={style.container}>
      <img src={logo} className={style.logo} alt="logo" />
    <Button color="#4DAAAA" content="Submit" type="submit"></Button>
    <div className={style.form}>

</div>
</div>
  )
}

export default Formulaire