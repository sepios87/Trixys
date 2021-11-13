import React from 'react';
import classes from './Projet.module.scss';
import { isMobile } from 'react-device-detect';

const Projet = () => {
    return (
        <section className={classes.container}>
            <div className={classes.projetContainer}>
                <div className={`${classes.clip} ${classes.clip1}`}>
                    <div className={classes.content}>
                        <h2>Projet 1</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sint libero nostrum dolore rem! Quibusdam
                            architecto maiores aliquam quaerat vitae, nemo, nam
                            cupiditate, exercitationem sed et commodi doloribus
                            ad? Atque, tempora!
                        </p>
                    </div>
                </div>
                <div className={`${classes.clip} ${classes.clip2}`}>
                    <div className={classes.content}>
                        <h2>Projet 2</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sint libero nostrum dolore rem! Quibusdam
                            architecto maiores aliquam quaerat vitae, nemo, nam
                            cupiditate, exercitationem sed et commodi doloribus
                            ad? Atque, tempora!
                        </p>
                    </div>
                </div>
                <div className={`${classes.clip} ${classes.clip3}`}>
                    <div className={classes.content}>
                        <h2>Projet 3</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sint libero nostrum dolore rem! Quibusdam
                            architecto maiores aliquam quaerat vitae, nemo, nam
                            cupiditate, exercitationem sed et commodi doloribus
                            ad? Atque, tempora!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projet;
