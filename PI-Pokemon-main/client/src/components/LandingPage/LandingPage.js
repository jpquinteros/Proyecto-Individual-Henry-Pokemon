import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './LandingPage.module.css';

export const LandingPage=function(){
    return(
        <div className={style.fondo}>
            <NavLink to={'/home'}>
                <h1>Let's get started!</h1>
            </NavLink>
        </div>
    )
}