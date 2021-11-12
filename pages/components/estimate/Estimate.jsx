import classes from './Estimate.module.scss';
import { useState } from 'react';
import { Progress } from 'antd';
import ItemQuestionCard from './components/ItemQuestionCard';
import ItemQuestionSlider from './components/ItemQuestionSlider';

const tab = [
    {
        question: 'Est-ce pour une création ou une refonte de site ?',
        response1: {
            name: 'Creation',
            image: 'https://picsum.photos/200',
            point: 2,
        },
        response2: {
            name: 'Refonte',
            image: 'https://picsum.photos/200',
            point: 1,
        },
    },
    {
        question: "Quel est l'objectif du site ?",
        response1: {
            name: 'Site de e vitrine',
            image: 'https://picsum.photos/200',
            point: 1,
        },
        response2: {
            name: 'Site de e commerce',
            image: 'https://picsum.photos/200',
            point: 2,
        },
    },
    {
        question: 'Fournissez vous les images pour le contenu du site ?',
        response1: {
            name: 'Oui',
            image: 'https://picsum.photos/200',
            point: 1,
        },
        response2: {
            name: 'Non',
            image: 'https://picsum.photos/200',
            point: 2,
        },
    },
    {
        question: 'Combien de pages contiendra votre site ?',
        response: {
            min: 1,
            max: 10,
            point: 1,
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
            image: 'https://picsum.photos/200',
            point: 2,
        },
        response2: {
            name: 'Non',
            image: 'https://picsum.photos/200',
            point: 1,
        },
    },
    {
        question:
            "Qui doit gérer l'hébergement et la gestion des noms de domaines ?",
        response1: {
            name: 'Vous',
            image: 'https://picsum.photos/200',
            point: 1,
        },
        response2: {
            name: 'Le prestataire (Nous)',
            image: 'https://picsum.photos/200',
            point: 2,
        },
    },
    {
        question:
            'Souhaitez vous une optimisation et une expertise SEO ? (réferencement)',
        response1: {
            name: 'Oui',
            image: 'https://picsum.photos/200',
            point: 2,
        },
        response2: {
            name: 'Non',
            image: 'https://picsum.photos/200',
            point: 1,
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
        <section className={classes.container}>
            <span className={classes.questionNum}>{currentQuestion + 1}</span>
            <h2>Evaluez le montant de votre site web</h2>
            {formIsFinished() ? (
                <div>Fini !!! avec un poids de {points}</div>
            ) : (
                <div>
                    <h3 className={classes.titleQuestion}>
                        {tab[currentQuestion].question}
                    </h3>
                    {tab[currentQuestion].response1 != null ? (
                        <ItemQuestionCard
                            onFinishedQuestion={(e) => onFinishedQuestion(e)}
                            response1={tab[currentQuestion].response1}
                            response2={tab[currentQuestion].response2}
                        />
                    ) : (
                        <ItemQuestionSlider
                            onFinishedQuestion={(e) => onFinishedQuestion(e)}
                            response={tab[currentQuestion].response}
                        />
                    )}
                </div>
            )}

            <Progress
                percent={(currentQuestion * 100) / (tab.length - 1)}
                onChange={setCurrentQuestion}
                showInfo={false}
                strokeColor="#f6c952"
            />
        </section>
    );
};

export default Estimate;
