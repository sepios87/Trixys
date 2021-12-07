import React, { useEffect } from 'react';
import classes from './MusicController.module.scss';
import { IoVolumeHighOutline } from 'react-icons/io5';
import Button from '../button/Button';
import { useTransition, animated } from 'react-spring';

const MusicController = ({ music, setMusic }) => {
    useEffect(() => {
        if (music != null) {
            document.body.style.overflow = 'hidden auto';
        }
    }, [music]);

    const transitions = useTransition(music != null ? [] : true, {
        from: { opacity: 1 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 600 },
    });

    return transitions(({ opacity }) => (
        <animated.section
            style={{ opacity: opacity }}
            className={classes.musicController}
        >
            <IoVolumeHighOutline className={classes.musicController__icon} />
            <p>
                Notre agence vous propose une expérience sonore lors de votre
                navigation. Souhaitez-vous en bénéficier ?
            </p>
            <div className={classes.musicController__buttons}>
                <Button whiteTheme={true} onClick={() => setMusic(true)}>
                    Oui
                </Button>
                <Button whiteTheme={true} onClick={() => setMusic(false)}>
                    Non
                </Button>
            </div>
        </animated.section>
    ));
};

export default MusicController;
