import React from 'react';
import style from '../styles/container.module.css';
import Card from './Card';

export default function MainContainer(){
    return(
        <div className={style.mainContainer}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}

