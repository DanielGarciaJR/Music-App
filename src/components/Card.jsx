import React, {useState,useEffect} from "react";
import style from '../styles/container.module.css';


export default function Card(){



    return(
        <div className={style.card}>
            <h3>Nombre</h3>
            <img alt="Descripción de la imagen"/>
        </div>
    );
}