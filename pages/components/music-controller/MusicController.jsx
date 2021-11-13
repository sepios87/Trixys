import React, {useState} from 'react'
import classes from './MusicController.module.scss'
import {IoVolumeHighOutline, IoVolumeMuteOutline} from "react-icons/io5";

const MusicController = ({ music, setMusic }) => {

    return music === null
    ? <section className={classes.musicController}>
        <IoVolumeHighOutline
            className={classes.musicController_icon}
        />
        <p>Notre agence vous propose une expérience sonore lors de votre navigation. Souhaitez-vous en bénéficier ?</p>
        <div className={classes.musicController_buttons}>
            <button
                className='button button--white'
                onClick={() => setMusic(true)}
            >
                Oui
            </button>
            <button
                className='button button--white'
                onClick={() => setMusic(false)}
            >
                Non
            </button>
        </div>
    </section>
    : <></>

}

export default MusicController
