import React from 'react'
import Formulaire from '../../compoenents/Form/Form'
import Wlc from '../../compoenents/Wlc/Wlc'
import style from './Login.module.css'

const Login = () => {
  return (
    <div className={style.container}>
        <Formulaire></Formulaire>
        <Wlc></Wlc>
    </div>
  )
}

export default Login