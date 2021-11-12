import Header from "./components/header/Header.jsx";
import Contact from "./components/contact/Contact.jsx";
import Vague from "./components/vague/Vague.jsx";
import Projet from "./components/projet/Projet.jsx";
import ServiceList from './components/service-list/ServiceList.jsx';
import Informations from "./components/informations/Informations";
import React, {useState} from 'react';

export default function Home() {

    const [windowWidth, setWindowWidth] = useState(1440)

    if (typeof window === "undefined") {
        console.log("Oops, `window` is not defined")
    } else {
        window.addEventListener("resize", widthSetter);
    }

    function widthSetter () {
        setWindowWidth(window.innerWidth);
    }

  return (
      <>
          <Vague />
          <Header />
          <ServiceList/>
          <Projet />
          <Contact />
          {windowWidth <= 700 && <Informations />}
      </>
  )
}
