import React, { useState, useEffect } from 'react';

// css import
import classes from './Theme.module.scss';
import iconClasses from '../music-controller/MusicController.module.scss';

// ui icons import
import { BsBrightnessHighFill, BsBrightnessHigh } from "react-icons/bs";
import { MdOutlineBrightness2, MdBrightness2 } from "react-icons/md";
import { BsChevronLeft } from "react-icons/bs";
import {IoVolumeHighOutline, IoVolumeMuteOutline} from "react-icons/io5";

const Theme = ({ music, setMusic }) => {
    // light theme is default theme

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        document.documentElement.style.setProperty('--primary', isDarkTheme ? '#464652' : 'white');
        document.documentElement.style.setProperty('--secondary', isDarkTheme ? 'white' : '#464652');
    }, [isDarkTheme]);

    const onClickDarkTheme = () => {
        // inverser isDarkTheme
        setIsDarkTheme(!isDarkTheme);
        // changer le theme
        isDarkTheme
            ? document.body.classList.remove('dark-mode')
            : document.body.classList.add('dark-mode');
    };

    const onClickCloseTheme = () => {
        document.getElementsByClassName(classes.theme)[0].style.transform =
            'translateX(-50px)';
    };

    return isDarkTheme ? (
        <div className={classes.theme}>
            <BsBrightnessHigh onClick={onClickDarkTheme} />
            <MdBrightness2 className={classes.moon} />
            { music
                ? <IoVolumeMuteOutline
                    className={iconClasses.musicController_iconToggle}
                    onClick={() => setMusic(false)}
                />
                : <IoVolumeHighOutline
                    className={iconClasses.musicController_iconToggle}
                    onClick={() => setMusic(true)}
                />
            }
            <BsChevronLeft onClick={onClickCloseTheme} />
        </div>
    ) : (
        <div className={classes.theme}>
            <BsBrightnessHighFill/>
            <MdOutlineBrightness2
                className={classes.moon}
                onClick={onClickDarkTheme}
            />
            { music
                ? <IoVolumeMuteOutline
                    className={iconClasses.musicController_iconToggle}
                    onClick={() => setMusic(false)}
                />
                : <IoVolumeHighOutline
                    className={iconClasses.musicController_iconToggle}
                    onClick={() => setMusic(true)}
                />
            }
            <BsChevronLeft onClick={onClickCloseTheme} />
        </div>
    );
};

export default Theme;
