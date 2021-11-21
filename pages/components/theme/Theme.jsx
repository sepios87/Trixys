import React, { useState, useEffect } from 'react';

// css import
import classes from './Theme.module.scss';

// ui icons import
import { BsBrightnessHighFill, BsBrightnessHigh } from 'react-icons/bs';
import { MdOutlineBrightness2, MdBrightness2 } from 'react-icons/md';
import { BsChevronLeft } from 'react-icons/bs';
import { IoVolumeHighOutline, IoVolumeMuteOutline } from 'react-icons/io5';

const Theme = ({ music, setMusic }) => {
    // light theme is default theme
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
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
            {isDarkTheme ? (
                <BsBrightnessHigh
                    className={`${hidden && classes.hidden} ${
                        classes.theme__icon
                    }`}
                    onClick={onClickDarkTheme}
                />
            ) : (
                <BsBrightnessHighFill
                    className={`${hidden && classes.hidden} ${
                        classes.theme__icon
                    }`}
                />
            )}
            {isDarkTheme ? (
                <MdBrightness2
                    className={`${classes.theme__moon} ${
                        hidden && classes.hidden
                    } ${classes.theme__icon}`}
                />
            ) : (
                <MdOutlineBrightness2
                    className={`${classes.theme__moon} ${
                        hidden && classes.hidden
                    } ${classes.theme__icon}
                    `}
                    onClick={onClickDarkTheme}
                />
            )}
            {music ? (
                <IoVolumeMuteOutline
                    className={`${hidden && classes.hidden} ${
                        classes.theme__icon
                    }`}
                    onClick={() => setMusic(false)}
                />
            ) : (
                <IoVolumeHighOutline
                    className={`${hidden && classes.hidden} ${
                        classes.theme__icon
                    }`}
                    onClick={() => setMusic(true)}
                />
            )}
            <BsChevronLeft
                className={`${classes.theme__icon} ${hidden && classes.chevronRight}`}
                onClick={() => setHidden(!hidden)}
            />
        </div>
    );
};

export default Theme;
