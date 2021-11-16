import React, { useState } from 'react';
import classes from './MusicController.module.scss';
import { IoVolumeHighOutline, IoVolumeMuteOutline } from 'react-icons/io5';
import Button from '../button/Button';

const MusicController = ({ music, setMusic }) => {
    return music === null ? (
        <section className={classes.musicController}>
            <IoVolumeHighOutline className={classes.musicController_icon} />
            <p>
                Notre agence vous propose une expérience sonore lors de votre
                navigation. Souhaitez-vous en bénéficier ?
            </p>
            <div className={classes.musicController_buttons}>
                <Button whiteTheme={true} onClick={() => setMusic(true)}>Oui</Button>
                <Button whiteTheme={true} onClick={() => setMusic(false)}>Non</Button>
            </div>
        </section>
    ) : (
        <></>
    );
};

export default MusicController;
