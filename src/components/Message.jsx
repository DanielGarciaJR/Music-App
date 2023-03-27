import React from "react";
import style from "../styles/container.module.css";

export default function Message(){

    return(
        <div className={style.noData}>
            <h3>No data to display</h3>
        </div>
    );
}