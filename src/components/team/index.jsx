import {useMemo, memo} from "react";
import Vixen from '../../assets/Vixen.svg';
import UncleChristmas from '../../assets/Uncle Christmas.svg';
import ChristmasDaddy from '../../assets/Christmas Daddy.svg';
import {isMobile} from 'react-device-detect';

const Team = () => {
    const data = useMemo(() => [
        {
            title: 'Uncle Christmas',
            description: 'Founder, Operation Director & Architect of the MetaChrismas.',
            img: UncleChristmas
        },
        {
            title: 'Christmas Daddy',
            description: 'Founder& Blockchain developer with many years of experience in smart contract developing.',
            img: ChristmasDaddy
        },
        {
            title: 'Vixen',
            description: 'Lead artist & design maker',
            img: Vixen
        },
    ], []);
    return (
        <div className={`team ${isMobile ? 'mobile' : ''}`} id="team">
            <p className="team-title">Team</p>
            <p className="team-subtitle">Meet the crew</p>
            <div className="team-items">
                {data.map((item) => (
                    <div key={item.title} className="team-item">
                        <img src={item.img} alt={item.title} className="team-item-image"/>
                        <p className="team-item-title">{item.title}</p>
                        <p className="team-item-description">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default memo(Team)