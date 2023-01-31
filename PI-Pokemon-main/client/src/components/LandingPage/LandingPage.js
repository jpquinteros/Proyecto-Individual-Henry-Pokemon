import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './LandingPage.module.css';

export const LandingPage=function(){
    return(
        <div className={style.fondo}>
           <div className={style.divButton}>
                <NavLink to={'/home'}>
                    <button className={style.landingButton}>Let's get started!</button>
                </NavLink>
            </div>
            <div className={style.container}>
                <h1 className='title'>Welcome to the PokeApi!</h1>
            </div>
        </div>
    )
}