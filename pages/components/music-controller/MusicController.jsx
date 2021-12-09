import React, { useEffect, useState } from 'react';
import classes from './MusicController.module.scss';
import { IoVolumeHighOutline } from 'react-icons/io5';
import Button from '../button/Button';
import { useTransition, animated } from 'react-spring';

const MusicController = ({ music, setMusic }) => {
    const [firstOpen, setFirstOpen] = useState(false)

    useEffect(() => {
        if (music == null) {
            const localValue = localStorage.getItem('music');
            localValue == null ? setFirstOpen(true) : setMusic(localValue === "true");
        } else {
            document.body.style.overflow = 'hidden auto';
        }
    }, [music, setMusic]);

    const transitions = useTransition(music != null ? [] : true, {
        from: { opacity: firstOpen ? 1 : 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 600 },
    });

    const selectMusic = (choice) => {
        setMusic(choice);
        localStorage.setItem('music', choice);
    }

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
                <Button whiteTheme={true} onClick={() => selectMusic(true)}>
                    Oui
                </Button>
                <Button whiteTheme={true} onClick={() => selectMusic(false)}>
                    Non
                </Button>
            </div>
        </animated.section>
    ));
};

export default MusicController;
