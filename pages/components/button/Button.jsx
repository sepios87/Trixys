import classes from './Button.module.scss';
import { useContext } from 'react';
import { MusicContext } from '../../index';
// import useSound from 'use-sound';

const Button = ({ href, children, whiteTheme, submitType, newPage = false, ...rest }) => {
    const music = useContext(MusicContext);
    // const [play] = useSound('/sounds/transition.mp3');

    return submitType ? (
        <input
            type="submit"
            value={children}
            className={`${classes.button} ${whiteTheme && classes.buttonWhite}`}
        />
    ) : (
        <a
            {...rest}
            // onMouseEnter={() => music && isMounted && play()}
            className={`${classes.button} ${whiteTheme && classes.buttonWhite}`}
            href={href}
            {... newPage && {target: "_blank"}} 
            {... newPage && {rel: "noreferrer"}}
        >
            {children}
        </a>
    );
};

export default Button;
