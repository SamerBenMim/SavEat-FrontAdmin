import React from 'react'
import style from './Form.module.css'
import logo from '../../assets/logo.png'

import { SignInForm } from './SignInForm'
import { Formik, Form } from "formik";

const Formulaire = () => {
  return (
    <div className={style.container}>
      <img src={logo} className={style.logo} alt="logo" />
      

    <div className={style.form}>
      <SignInForm />
      
    </div>
</div>
  )
}

export default Formulaire