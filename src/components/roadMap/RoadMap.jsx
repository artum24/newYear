import React, {useMemo, memo} from 'react';
import {isMobile} from 'react-device-detect';

const RoadMap = () => {
    const data = useMemo(() => [
        {
            title: 'Phase 1 Pre-Launch',
            items: ['Website', 'Social Media', 'Marketing', 'Partnerships and collaborations', 'Finalizing illustrations and attributes']
        },
        {
            title: 'Phase 2 Launch',
            items: ['Launch Santa\'s pre-sale sale, with the remainder available for public sale.', 'Increase Santa\'s presence on DISCORD / TWITTER / TikTok platforms with community rewards.', 'Post the collection featured on rarity tools.', 'Send collectibles to lucky 3D NFTs owners.']
        },
        {
            title: 'Phase  3 Post Launch',
            items: ['Conducting an online event for our community and contests on New Year\'s Eve.', 'Release of an exclusive collection of Santa Deers. Only those who hold a Santa will qualify for the raffle. Santa need to be delisted at the time the snapshot is taken in order to qualify.', 'Create unique gifts for each of Santa\'s holders and de-stublish them under the Christmas tree on December 25.', 'Big giveaway on 31 of December with a lot of suprisers for Santa and Deers holders.']
        },
        {
            title: 'Future Plans',
            items: ['Transferring the NFT to the AR world, so that everyone can use their NFT character  as an avatar in the virtual world.', 'Creating an interactive game with our softs, "Catch Santa" where you have to catch Santa when he comes out of the chimney.']
        },
    ], [])
    return (
        <div className={`roadMap ${isMobile ? 'mobile' : ''}`} id="roadMap">
            <p className="roadMap-title">Road map</p>
            <p className="roadMap-subtitle">We have a lot of ideas and directions that we want to implement. But we will also consult with our
                community to make the project even better!
            </p>
            <div className="roadMap-items">
                {data.map((item) => (
                    <div key={item.title} className="roadMap-item">
                        <p className="roadMap-item-title">{item.title}</p>
                        <div className="roadMap-item-info">
                            {item.items.map((title) => (
                                <p key={title}>{title}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default memo(RoadMap)