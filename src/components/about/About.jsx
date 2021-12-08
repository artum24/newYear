import {memo} from "react";
import Santa from '../../assets/Gif.gif';
import {isMobile} from 'react-device-detect';

const About = ({aboutRef}) => (
    <div ref={aboutRef} className={`about ${isMobile ? 'mobile' : ''}`} id="about">
        <p className="about-title">About</p>
        <div className="about-info">
            <div>
                <p className="about-info-paragraph">
                    The <span className="about-info-main">MetaChristmas</span> is a collection <span
                    className="about-info-main">of 10000 unique Santa Clauses</span> who
                    unite together on the Ethereum Blockchain.
                </p>
                <p className="about-info-paragraph">
                    Each representative of our metasemir is in its own way original, based on hundreds of
                    well-designed elements, and hand-drawn by our dedicated Vixen designer to bring to the nft world
                    a unique product in its own way.
                    MetaChristmas is a whole nft meta universe that holds countless characters that will bring you
                    joy for profit in the long run. So Entering The MetaChristmas Society means joining a family full of
                    people who believe in the future of Cryptocurrencies and the Blockchain technology.
                </p>
                <p className="about-info-paragraph">
                    Let`s make a large and powerful community, follow our Twitter, Discord and TikTok so as not to
                    miss the presale!
                </p>
            </div>
            <img src={Santa} alt="Santa" className="santa"/>
        </div>
        <div className="about-buttons">
            <div className="about-button">Twitter</div>
            <div className="about-button">Discord</div>
        </div>
    </div>
)


export default memo(About);