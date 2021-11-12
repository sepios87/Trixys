import React, { useState, useEffect } from 'react';

// css import
import classes from './Theme.module.scss';

// ui icons import
import { BsBrightnessHighFill, BsBrightnessHigh } from "react-icons/bs";
import { MdOutlineBrightness2, MdBrightness2 } from "react-icons/md";
import { BsChevronLeft } from "react-icons/bs";

const Theme = () => {
    // light theme is default theme

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        document.documentElement.style.setProperty('--primary', isDarkTheme ? '#464652' : 'white');
        document.querySelector(':root').style.setProperty('--secondary', isDarkTheme ? 'white' : '#464652');
    }, [isDarkTheme]);

    const onClickDarkTheme = () => {
        // inverser isDarkTheme
        setIsDarkTheme(!isDarkTheme);
    };

    const onClickCloseTheme = () => {
        document.getElementsByClassName(classes.theme)[0].style.transform =
            'translateX(-50px)';
    };

    return isDarkTheme ? (
        <div className={classes.theme}>
            <BsBrightnessHigh onClick={onClickDarkTheme} />
            <MdBrightness2 className={classes.moon} />
            <BsChevronLeft onClick={onClickCloseTheme} />
        </div>
    ) : (
        <div className={classes.theme}>
            <BsBrightnessHighFill/>
            <MdOutlineBrightness2
                className={classes.moon}
                onClick={onClickDarkTheme}
            />
            <BsChevronLeft onClick={onClickCloseTheme} />
        </div>
    );
};

export default Theme;
