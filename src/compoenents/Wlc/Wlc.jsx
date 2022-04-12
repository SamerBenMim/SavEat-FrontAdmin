import React from 'react'
import style from './Wlc.module.css'
import layer from '../../assets/layer.svg'
import img from '../../assets/img.png'

const Wlc = () => {
  return (
    <div className={style.container}>
        <img src={layer} className={style.layer}  alt="layer" />

        <h1 className={style.title}>Welcome to SavEat</h1>
        <h5 className={style.text}>Please login to access the <br/>admin dashboard.</h5>  
        <div className={style.img}>
          <img src={img}   alt="img" />
        </div>
        

    </div>
  )
}

export default Wlc