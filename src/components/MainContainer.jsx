import React from 'react';
import style from '../styles/container.module.css';
import Card from './Card';
import Loader from './Loader';
import Message from './Message';

export default function MainContainer({displayData,loading}){
    return(
        <div className={style.mainContainerWrapper}>
            <div className={style.mainContainer}>

                {loading ? (
                    <Loader/>
                ): displayData.length > 0 ? (
                    displayData.map((el,index) => <Card key={index} name={el.trackName} cover={el.artworkUrl100}
                    desc={el.collectionName} artist={el.artistName} audio={el.previewUrl}/>)
                ) : (
                    <Message/>
                )}

            </div>
        </div>
    );
}

