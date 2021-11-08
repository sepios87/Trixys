import Header from './components/header/Header.jsx';
import Contact from './components/contact/Contact.jsx';
import Vague from './components/vague/Vague.jsx';
import Projet from './components/projet/Projet.jsx';
import ServiceList from './components/service-list/ServiceList.jsx';
import Bio from './components/bio/Bio.jsx';
import ReactPageScroller from 'react-page-scroller';
import Member from './components/member/Member';
import Estimate from './components/estimate/Estimate.jsx';

export default function Home() {
    return (
        <div>
            {/* <Vague /> */}
            {/* <ReactPageScroller> */}
                <Header />
                <Bio />
                <Member
                    image="https://picsum.photos/900/1000"
                    name="Florian TORIBIO"
                    status="Développeur Web"
                    descr="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis pariatur cum sequi nisi possimus magni ullam laudantium numquam? Suscipit repudiandae inventore amet sint sapiente libero labore velit quos ad!"
                />
                {/* <ServiceList /> */}
                <Projet />
                <Estimate/>
                <Contact />
            {/* </ReactPageScroller> */}
        </div>
    );
}
