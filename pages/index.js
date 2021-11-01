import Header from "./components/header/Header.jsx";
import Contact from "./components/contact/Contact.jsx";
import Vague from "./components/vague/Vague.jsx";
import Projet from "./components/projet/Projet.jsx";
import ServiceList from './components/service-list/ServiceList.jsx';

export default function Home() {

  return (
      <>
          <Vague />
          <Header />
          <ServiceList/>
          <Projet />
          <Contact />
      </>
  )
}
