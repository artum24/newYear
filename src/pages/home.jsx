import {useMemo, memo} from 'react';
import Header from "../components/header";
import Menu from "../components/menu";
import About from "../components/about";
import Collection from "../components/collection";
import RoadMap from "../components/roadMap";
import Team from "../components/team";
import Specs from "../components/specs";
import Faq from "../components/faq";

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