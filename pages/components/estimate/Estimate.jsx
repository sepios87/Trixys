import classes from './Estimate.module.scss';
import { useState } from 'react';
import { Slider, Progress } from 'antd';
import 'antd/dist/antd.css';

const tab = [
    {
        question: 'Est-ce pour une création ou une refonte de site ?',
        response1: {
            name: 'Creation',
            image: 'https://picsum.photos/200',
            point: 1,
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
            point: 1,
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
            point: 1,
        },
    },
    {
        question: 'Combien de pages contiendra votre site ?',
    },
    {
        question:
            'Quel niveau de graphisme souhaitez-vous ? (1 étant un design classique et 5 étant un design très poussé et personnalisé)',
    },
    {
        question:
            'Souhaitez-vous que votre site s’adapte aux mobiles et tablettes ?',
        response1: {
            name: 'Oui',
            image: 'https://picsum.photos/200',
            point: 1,
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
            name: 'Le prestataire',
            image: 'https://picsum.photos/200',
            point: 1,
        },
    },
    {
        question:
            'Souhaitez vous une optimisation et une expertise SEO ? (réferencement)',
        response1: {
            name: 'Oui',
            image: 'https://picsum.photos/200',
            point: 1,
        },
        response2: {
            name: 'Non',
            image: 'https://picsum.photos/200',
            point: 1,
        },
    },
];

const ProgressBar = () => {
    const [valueSlider, setValueSlider] = useState(0);

    return (
        <Slider
            min={0}
            max={20}
            value={valueSlider}
            onChange={setValueSlider}
        />
    );
};

const Estimate = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const Item = () => {
        if (tab[currentQuestion].response1 != null) {
            return (
                <div className={classes.containerQuestion}>
                    <figure
                        className={classes.itemQuestion}
                        onClick={() => {
                            setCurrentQuestion(currentQuestion + 1);
                        }}
                    >
                        <img src={tab[currentQuestion].response1.image} />
                        <figcaption>
                            <p>{tab[currentQuestion].response1.name}</p>
                        </figcaption>
                    </figure>
                    <figure
                        className={classes.itemQuestion}
                        onClick={() => {
                            setCurrentQuestion(currentQuestion + 1);
                        }}
                    >
                        <img src={tab[currentQuestion].response2.image} />
                        <figcaption>
                            <p>{tab[currentQuestion].response2.name}</p>
                        </figcaption>
                    </figure>
                </div>
            );
        } else {
            return (
                <div>
                    <ProgressBar />
                    <p
                        onClick={() => {
                            setCurrentQuestion(currentQuestion + 1);
                        }}
                    >
                        Valider
                    </p>
                </div>
            );
        }
    };

    return (
        <section className={classes.container}>
            <span className={classes.questionNum+1}>{currentQuestion}</span>
            <h2>Evaluez le montant de votre site web</h2>
            <h3>{tab[currentQuestion].question}</h3>
            <Item />
            <Progress
                percent={(currentQuestion * 100) / tab.length}
                onChange={setCurrentQuestion}
                showInfo={false}
                strokeColor="#f6c952"
            />
        </section>
    );
};

export default Estimate;
