import Header from './components/header/Header.jsx';
import Contact from './components/contact/Contact.jsx';
import Vague from './components/vague/Vague.jsx';
import Projet from "./components/projet/Projet.jsx";
import ServiceList from './components/service-list/ServiceList.jsx';
import Informations from './components/informations/Informations';
import useWindowDimensions from './components/useWindowDimensions';

export default function Home() {

    const { width } = useWindowDimensions();

      return (
          <>
              <Vague />
              <Header />
              <ServiceList/>
              <Projet />
              <Contact />
              {width <= 700 && <Informations />}
          </>
      )
}
