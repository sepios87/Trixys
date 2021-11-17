import classes from './Button.module.scss';
import { useContext } from 'react';
import { MusicContext } from '../../index';
import useSound from 'use-sound';

const Button = ({ href, children, whiteTheme, submitType, ...rest }) => {
    const music = useContext(MusicContext);
    const [play] = useSound('/sounds/transition.mp3');

    return submitType ? (
        <input
            type="submit"
            value={children}
            className={`${classes.button} ${whiteTheme && classes.buttonWhite}`}
        />
    ) : (
        <a
            {...rest}
            onMouseEnter={() => music && play()}
            className={`${classes.button} ${whiteTheme && classes.buttonWhite}`}
            href={href}
        >
            {children}
        </a>
    );
};

export default Button;
