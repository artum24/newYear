import {useMemo, memo} from 'react';
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import About from "../components/about/About";
import Collection from "../components/collection/Collection";
import RoadMap from "../components/roadMap/RoadMap";
import Team from "../components/team/Team";
import Specs from "../components/specs/Specs";
import Faq from "../components/faq/faq";

const Home = () => {
    const titles = useMemo(() => [
        {
            title: 'About',
            linkTo: 'about',
        },
        {
            title: 'Road map',
            linkTo: 'roadMap',
        },
        {
            title: 'Team',
            linkTo: 'team',
        },
        {
            title: 'FAQ',
            linkTo: 'faq',
        },
        {
            title: 'Opensea',
            action: () => {}
        },
        {
            title: ' Twitter',
            action: () => {}
        },
        {
            title: 'Discord',
            action: () => {}
        },
    ], [])
    return (
        <div>
            <Header titles={titles} isHeader/>
            <div className="app">
                <Menu/>
                <About/>
                <Collection/>
                <RoadMap />
                <Team />
                <Specs/>
                <Faq />
                <Header titles={titles}/>
            </div>
        </div>
    )
}

export default memo(Home);