import React from 'react';
import style from '../styles/container.module.css';
import Card from './Card';

export default function MainContainer({displayData}){
    return(
        <div className={style.mainContainer}>
            
            {displayData.map((el,index) => <Card key={index} name={el.trackName} cover={el.artworkUrl100} desc={el.collectionName} artist={el.artistName} audio={el.previewUrl}/>)}
                        
        </div>
    );
}

