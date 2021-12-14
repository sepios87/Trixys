import classes from './Estimate.module.scss';
import { useState } from 'react';
import ItemQuestionCard from './itemQuestionCard/ItemQuestionCard';
import ItemQuestionNumber from './itemQuestionNumber/ItemQuestionNumber';
import Button from '../button/Button';

const tab = [
    {
        question: 'Est-ce pour une création ou une refonte de site ?',
        response1: {
            name: 'Création',
            image: '/svg/creation.svg',
            point: 5,
        },
        response2: {
            name: 'Refonte',
            image: '/svg/refonte.svg',
            point: 3,
        },
    },
    {
        question: "Quel est l'objectif du site ?",
        response1: {
            name: 'Site vitrine',
            image: 'svg/evitrine.svg',
            point: 1,
        },
        response2: {
            name: 'Site de e-commerce',
            image: 'svg/ecommerce.svg',
            point: 3,
        },
    },
    {
        question: 'Fournissez-vous les images pour le contenu du site ?',
        response1: {
            name: 'Oui',
            image: 'svg/imageYes.svg',
            point: 0,
        },
        response2: {
            name: 'Non',
            image: 'svg/imageNo.svg',
            point: 1,
        },
    },
    {
        question: 'Combien de pages contiendra votre site ?',
        response: {
            min: 1,
            max: 10,
            point: 2,
        },
    },
    {
        question:
            'Quel niveau de graphisme souhaitez-vous ? (1 étant un design classique et 5 étant un design très poussé)',
        response: {
            min: 1,
            max: 5,
            point: 2,
        },
    },
    {
        question:
            'Souhaitez-vous que votre site s’adapte aux mobiles et tablettes ?',
        response1: {
            name: 'Oui',
            image: 'svg/responsiveYes.svg',
            point: 2,
        },
        response2: {
            name: 'Non',
            image: 'svg/responsiveNo.svg',
            point: 0,
        },
    },
    {
        question: "Qui doit gérer l'hébergement et le nom de domaine ?",
        response1: {
            name: 'Vous',
            image: 'svg/domaine.svg',
            point: 0,
        },
        response2: {
            name: 'Le prestataire (Nous)',
            image: 'svg/domaine.svg',
            point: 2,
        },
    },
    {
        question:
            'Souhaitez-vous une optimisation et une expertise SEO ? (référencement)',
        response1: {
            name: 'Oui',
            image: 'svg/seoYes.svg',
            point: 2,
        },
        response2: {
            name: 'Non',
            image: 'svg/seoNo.svg',
            point: 0,
        },
    },
];

const Estimate = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [points, setPoints] = useState(0);

    const onFinishedQuestion = (e) => {
        setCurrentQuestion(currentQuestion + 1);
        setPoints(points + e);
    };

    const formIsFinished = () => {
        return currentQuestion == tab.length - 1;
    };

    return (
        <section className={classes.estimate} id="estimate">
            {/* background elements */}

            {/* end background elements */}
            <span className={classes.estimate__questionNum}>
                {currentQuestion + 1}
            </span>
            <h2 className="title">Evaluez le montant de votre site web</h2>
            {formIsFinished() ? (
                <div>
                    <p className={classes.estimateNumber}>
                        Votre site est estimé à : <strong>{points * 150}€</strong>
                    </p>
                    <Button
                        onClick={() => {
                            setPoints(0);
                            setCurrentQuestion(0);
                        }}
                    >
                        Recommencer
                    </Button>
                </div>
            ) : (
                <>
                    <h3 className={classes.estimate__titleQuestion}>
                        {tab[currentQuestion].question}
                    </h3>
                    <div
                        className={`${classes.estimate__progressBar} ${
                            currentQuestion == 0 && classes.hidden
                        }`}
                    >
                        <div
                            className={classes.estimate__progressBarContent}
                            style={{
                                width:
                                    (currentQuestion * 100) / (tab.length - 1) +
                                    '%',
                            }}
                        ></div>
                    </div>
                    {tab[currentQuestion].response1 != null ? (
                        <ItemQuestionCard
                            onFinishedQuestion={(e) => onFinishedQuestion(e)}
                            image1={tab[currentQuestion].response1.image}
                            image2={tab[currentQuestion].response2.image}
                            name1={tab[currentQuestion].response1.name}
                            name2={tab[currentQuestion].response2.name}
                            point1={tab[currentQuestion].response1.point}
                            point2={tab[currentQuestion].response2.point}
                        />
                    ) : (
                        <ItemQuestionNumber
                            onFinishedQuestion={(e) => onFinishedQuestion(e)}
                            min={tab[currentQuestion].response.min}
                            max={tab[currentQuestion].response.max}
                            point={tab[currentQuestion].response.point}
                        />
                    )}
                </>
            )}
        </section>
    );
};

export default Estimate;
