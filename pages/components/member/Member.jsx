import classes from './Member.module.scss';

const Member = ({image, name, status, descr}) => {
    return <section className={classes.member}>
        <figure>
            <img className={classes.member__imageProfil} src={image}/>
            <figcaption className={classes.member__content}>
                <h2>{name}</h2>
                <h3>{status}</h3>
                <p>{descr}</p>
                <a className={classes.member__button}>Voir son porfolio</a>
            </figcaption>
        </figure>
    </section>
}

export default Member;
