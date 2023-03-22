import React from "react";
import style from '../styles/container.module.css';

export default function Header({name}){
    return(
        <>
        <div className={style.header}>{name}</div>
        </>
    ); 
}

Header.defaultProps = { name: 'Daniel Garcia' }