import Button from '../../button/Button';
import classes from './Member.module.scss';

const Member = ({ image, name, status, descr, portfolio }) => {
    return (
        <section className={classes.member}>
            <figure>
                <img
                    alt="image"
                    className={classes.member__imageProfil}
                    src={image}
                />
                <figcaption className={classes.member__content}>
                    <h2>{name}</h2>
                    <h3>{status}</h3>
                    <p>{descr}</p>
                    <Button
                        newPage={true}
                        href={portfolio}
                        style={{ marginLeft: '10%' }}
                    >
                        Voir son portfolio
                    </Button>
                </figcaption>
            </figure>
        </section>
    );
};

export default Member;
