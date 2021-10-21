import React, { useState, useEffect } from 'react';

// css import
import classes from './Theme.module.scss';

// ui icons import
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Theme = () => {
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
            <WbSunnyOutlinedIcon onClick={onClickDarkTheme} />
            <Brightness2Icon className={classes.moon} />
            <ChevronLeftIcon onClick={onClickCloseTheme} />
        </div>
    ) : (
        <div className={classes.theme}>
            <WbSunnyIcon />
            <Brightness2OutlinedIcon
                className={classes.moon}
                onClick={onClickDarkTheme}
            />
            <ChevronLeftIcon onClick={onClickCloseTheme} />
        </div>
    );
};

export default Theme;
