import classes from './Button.module.scss';

const Button = ({ href, children, whiteTheme, submitType, ...rest }) => {
    return submitType ? (
        <input
            type="submit"
            value={children}
            className={`${classes.button} ${
                whiteTheme ? classes.buttonWhite : ''
            }`}
        />
    ) : (
        <a
            {...rest}
            className={`${classes.button} ${
                whiteTheme ? classes.buttonWhite : ''
            }`}
            href={href}
        >
            {children}
        </a>
    );
};

export default Button;
