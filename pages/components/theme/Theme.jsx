import React, { useState, useEffect } from 'react';

// css import
import classes from './Theme.module.scss';
import useSound from 'use-sound';

// ui icons import
import { BsBrightnessHigh } from 'react-icons/bs';
import { MdOutlineBrightness2 } from 'react-icons/md';
import { BsChevronLeft } from 'react-icons/bs';
import { IoVolumeHighOutline, IoVolumeMuteOutline } from 'react-icons/io5';

const Theme = ({ music, setMusic }) => {
    // light theme is default theme
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [playHibou] = useSound('/sounds/hibou.mp3');
    const [playCocorico] = useSound('/sounds/cocorico.mp3');

    useEffect(() => {
        if (music) {
            isDarkTheme ? playHibou() : playCocorico();
        }
        document.documentElement.style.setProperty(
            '--primary',
            isDarkTheme ? '#464652' : 'white'
        );
        document
            .querySelector(':root')
            .style.setProperty(
                '--secondary',
                isDarkTheme ? 'white' : '#464652'
            );
    }, [isDarkTheme]);

    const onClickDarkTheme = () => {
        // inverser isDarkTheme
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className={classes.theme}>
            <BsBrightnessHigh
                className={`${hidden && classes.hidden} ${
                    classes.theme__icon
                } ${isDarkTheme && classes.hidden}`}
                onClick={onClickDarkTheme}
            />
            <MdOutlineBrightness2
                className={`${isDarkTheme ? classes.theme__moon : classes.hidden} ${
                    hidden && classes.hidden
                } ${classes.theme__icon}
                    `}
                onClick={onClickDarkTheme}
            />
            {music ? (
                <IoVolumeHighOutline
                    className={`${hidden && classes.hidden} ${
                        classes.theme__icon
                    }`}
                    onClick={() => setMusic(false)}
                />
            ) : (
                <IoVolumeMuteOutline
                    className={`${hidden && classes.hidden} ${
                        classes.theme__icon
                    }`}
                    onClick={() => setMusic(true)}
                />
            )}
            <BsChevronLeft
                className={`${classes.theme__icon} ${
                    hidden && classes.chevronRight
                }`}
                onClick={() => setHidden(!hidden)}
            />
        </div>
    );
};

export default Theme;
