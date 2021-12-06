import Button from '../../button/Button';
import Image from 'next/image';
import classes from './Member.module.scss';

const Member = ({ image, name, status, descr, portfolio }) => {
    return (
        <section className={classes.member}>
            <figure>
                <Image
                    loading='lazy'
                    alt="image"
                    className={classes.member__imageProfil}
                    src={image}
                    height={300}
                    width={300}
                />
                <figcaption className={classes.member__content}>
                    <h2>{name}</h2>
                    <h3>{status}</h3>
                    <p>{descr}</p>
                    <div className={classes.member__button}>
                        <Button newPage={true} href={portfolio}>
                            Voir son portfolio
                        </Button>
                    </div>
                </figcaption>
            </figure>
        </section>
    );
};

export default Member;
