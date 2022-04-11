import React from 'react'
import style from './Wlc.module.css'
import layer from '../../assets/layer.svg'
import img from '../../assets/img.svg'

const Wlc = () => {
  return (
    <div className={style.container}>
        <img src={layer} className={style.layer}  alt="layer" />

        <h1 className={style.title}>Welcome to SavEat</h1>
        <h5 className={style.text}>Please login to access the <br/>admin dashboard.</h5>  
        <img src={img} className={style.img}  alt="img" />

    </div>
  )
}

export default Wlc