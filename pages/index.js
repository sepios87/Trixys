import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Contact from './components/contact/Contact.jsx';
import Vague from './components/vague/Vague.jsx';
import Projet from './components/projet/Projet.jsx';
import Bio from './components/bio/Bio.jsx';
import ReactPageScroller from 'react-page-scroller';
import Member from './components/member/Member';
import Estimate from './components/estimate/Estimate.jsx';
import MusicController from "./components/music-controller/MusicController";

export default function Home() {
    const [waveTransition, setWaveTransition] = useState(false);
    const [numPage, setNumPage] = useState(0);
    const [music, setMusic] = useState(null);

    return (
        <>
             <MusicController
                music = { music }
                setMusic={ setMusic }
            />
            <Vague waveTransition={waveTransition} />
            {/* <PointsPage numPage={numPage}/> */}
            <ReactPageScroller
                onBeforePageScroll={(e) => {
                    setNumPage(e);
                    setWaveTransition(true);
                    setTimeout(() => setWaveTransition(false), 1000)
                }}
            >
                <Header/>
                <Bio/>
                <Member
                    image="https://picsum.photos/900/1000"
                    name="Florian TORIBIO"
                    status="Développeur Web"
                    descr="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis pariatur cum sequi nisi possimus magni ullam laudantium numquam? Suscipit repudiandae inventore amet sint sapiente libero labore velit quos ad!"
                />
                <Member
                    image="https://picsum.photos/900/1000"
                    name="Benjamin PELAUDEIX"
                    status="Développeur Web"
                    descr="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis pariatur cum sequi nisi possimus magni ullam laudantium numquam? Suscipit repudiandae inventore amet sint sapiente libero labore velit quos ad!"
                />
                <Member
                    image="https://picsum.photos/900/1000"
                    name="Océane Guilloizeau"
                    status="Web designeuse"
                    descr="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis pariatur cum sequi nisi possimus magni ullam laudantium numquam? Suscipit repudiandae inventore amet sint sapiente libero labore velit quos ad!"
                />
                 <Member
                    image="https://picsum.photos/900/1000"
                    name="Rémi HAY RIMBAULT"
                    status="Développeur Web"
                    descr="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis pariatur cum sequi nisi possimus magni ullam laudantium numquam? Suscipit repudiandae inventore amet sint sapiente libero labore velit quos ad!"
                />
                <Projet />
                {/* <Services/> */}
                <Estimate />
                <Contact />
            </ReactPageScroller>
        </>
    );
}
