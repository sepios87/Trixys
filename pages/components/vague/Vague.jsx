import React from 'react';
import classes from './Vague.module.scss';
import Wave from 'react-wavify';

const Vague = () => {
    return (
        <>
            <img className={classes.logo} src="svg/logo.svg" alt="logo" />
            <div className={classes.waveContainerGauche}>
                <Wave
                    fill="rgba(246,201,82,0.6)"
                    className={classes.testvagueGauche}
                    paused={false}
                    options={{
                        amplitude: 50,
                        speed: 0.13,
                        points: 6,
                    }}
                />
                <Wave
                    fill="rgba( 255, 201, 40 ,0.5)"
                    className={`${classes.testvagueGauche}`}
                    paused={false}
                    options={{
                        amplitude: 52,
                        speed: 0.1,
                        points: 6,
                    }}
                />
            </div>
            <div className={classes.waveContainerDroite}>
                <Wave
                    fill="rgba(246,201,82,0.6)"
                    className={classes.testvagueDroite}
                    paused={false}
                    options={{
                        height: 15,
                        amplitude: 50,
                        speed: 0.13,
                        points: 4,
                    }}
                />
                <Wave
                    fill="rgba( 255, 201, 40 ,0.5)"
                    className={`${classes.testvagueDroite}`}
                    paused={false}
                    options={{
                        height: 18,
                        amplitude: 52,
                        speed: 0.15,
                        points: 4,
                    }}
                />
            </div>
        </>
    );
};

export default Vague;
