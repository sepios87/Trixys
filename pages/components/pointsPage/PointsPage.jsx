import React from 'react';
import classes from './PointsPage.module.scss';

const PointsPage = ({numPage}) => {
    return <div className={classes.pointsContainer}>
        {Array(5).fill(0).map((e, index) => (
            <span className={classes.point} key={index}></span>
        ))}
    </div>
}

export default PointsPage;