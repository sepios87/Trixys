import Button from '../button/Button';
import classes from './Bio.module.scss';
import useWindowDimensions from './../../../hooks/useWindowDimensions';
import Triangle from '../triangle/Triangle';

const Bio = ({ onPageMembers }) => {
    const { width } = useWindowDimensions();

    return (
        <section className={classes.bio}>
            {/* background elements */}
            <img src="svg/croix.svg" loading='lazy' alt="croix" className="croix" />
            <img src="svg/montagne.svg" loading='lazy' alt="montagnes" className="montagne" />
            <Triangle num={3} classNameTriangle="triangle__gris" />
            <Triangle num={6} classNameTriangle="triangle__jaune" />
            {/* end background elements */}
            <p className={classes.bio__backgroundLetter}>4</p>
            <section className={classes.bio__bioContainer}>
                <h2 className='title'>L{"'"}agence</h2>
                <h3>Qui sommes-nous ?</h3>
                <p className={classes.bio__contentText}>
                    Trixys est une agence digitale basée à La Rochelle.{' '}
                    <span>
                        Composée de 4 membres, nous saurons vous accompagner
                        dans la création de vos projets au travers d&apos;un
                        accompagnement dans l&apos;expérience utilisateur, le
                        design graphique mais aussi le développement web.
                    </span>
                    Notre agence met au centre de sa méthode le travail d’équipe.
                    En plus d’une bonne ambiance, nous tissons des liens forts sur la base
                    d’une confiance avec nos collaborateurs et construisons ensemble leur projet.
                </p>
                <Button
                    {...(width <= 780 && { href: '#members' })}
                    onClick={() => width > 780 && onPageMembers()}
                    className={classes.bio__button}
                >
                    En savoir plus sur notre équipe
                </Button>
            </section>
        </section>
    );
};

export default Bio;
