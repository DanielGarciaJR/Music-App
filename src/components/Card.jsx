import React from "react";
import style from '../styles/container.module.css';


export default function Card({name,cover,desc,artist,audio}){

    return(
        <div className={style.card}>
            <img src={cover} alt={desc}/>
            <h3>{name}</h3>
            <h4>{artist}</h4>
            <audio src={audio} controls></audio>
        </div>
    );

}