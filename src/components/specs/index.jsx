import {useMemo, memo} from 'react';
import {isMobile} from 'react-device-detect';

const Specs = () => {
    const data = useMemo(() => [
        {
            title: 'ART',
            description: 'Real art by a real artist. We have the ambition to create one of the most well designed collections in the space.'
        },
        {
            title: 'UNIQUE',
            description: 'With more than 100 elements designed, each Santa will be unique and original.'
        },
        {
            title: 'SOCIETY',
            description: 'Join a community of crypto enthusiasts through our discord, twitter, tiktok and physical events.'
        },
        {
            title: 'REWARDS',
            description: 'An innovative reward system for holders, for a long term project.'
        },
    ], [])
    return (
        <div className={`specs ${isMobile ? 'mobile' : ''}`}>
            <p className="specs-title">specs of the project</p>
            <div className="specs-items">
                {data.map((item) => (
                    <div className="specs-item" key={item.title}>
                        <p className="specs-item-title">{item.title}</p>
                        <p className="specs-item-description">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default memo(Specs);