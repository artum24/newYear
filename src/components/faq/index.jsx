import {memo, useCallback, useMemo, useState} from 'react';
import AnimateHeight from 'react-animate-height';
import Plus from '../../assets/plus.svg';
import {isMobile} from 'react-device-detect';

const Faq = () => {
    const [activeFaq, setActiveFaq] = useState([]);
    const onChangeFaq = useCallback((index) => {
        const findFaq = activeFaq.findIndex((item) => item === index);
        if (+findFaq === -1) {
            setActiveFaq([...activeFaq, index])
        } else {
            setActiveFaq([...activeFaq.splice(0, findFaq, index)])
        }
    }, [activeFaq])
    const data = useMemo(() => [
        {
            heading: '1.What is a MetaChristmas',
            content: 'Is an NFT collection of 10k unique and original Santas with over 100 of elements.',
        },
        {
            heading: '2.What\'s the total number available to mint?',
            content: '10000 thousands unique and original Santas will be available to claim your very own Santa!'
        },
        {
            heading: '3.How much will Santa’s cost?',
            content: (
                <>
                    <p> -We will be announcing the price before the launch date, please follow us on Discord and Twitter
                        for
                        updates.
                    </p>
                    <p>-Price for one Santa NFT is 0.08 eth + gas costs.</p>
                </>
            )
        },
        {
            heading: '4.When the MetaChristmas mint?',
            content: (
                <>
                    <p>We will be announcing the official date soon, please check our Discord and Twitter accounts for
                        the latest updates.</p>
                    <p>Pre-Sale December 15, 16.00 UTC, mint window 24h</p>
                    <p>Limit for Pre-Sale : 1 NFT per person</p>
                    <p>Public Sale December 16, 16.00 UTC</p>
                    <p>Limit for Public Sale : 2 NFT per transaction</p>
                    <p>Please follow the countdown on the website so as not to miss the start. (for Public Sale)</p>
                </>
            )
        },
        {
            heading: '5.How can I get the Whitelist spot?',
            content: (
                <>
                    <p>To claim whitelist spots you have different ways:</p>
                    <p>-Fill the form and we will pick 100 lucky winners and 50 with the most ref</p>
                    <p>-Check out requirements in our Discord to have a chance to get wl spot. Be quick there is no much
                        spots available!</p>
                    <p>-Be active in our social media and help others in our community we will be monitoring and pick
                        people who deserve it.</p>
                    <p>-If you are artist you can get your spot winning mem contest</p>
                </>
            )
        },
        {
            heading: '6.When is the reveal date?',
            content: 'The reveal date is after24 hours from public sale is started  or 12 hours after sold out.'
        },
        {
            heading: '7.How many Santa NFTs can I mint?',
            content: (
                <>
                    <p>Limit for Pre-Sale: 1 NFT per person</p>
                    <p>Limit for Public Sale : 2 NFT per transaction</p>
                </>
            )
        },
        {
            heading: '8.Will there be any drops and privileges for NFT owners?',
            content: 'Santas are just the beginning! These is only main character of the our Metaverse, Santa is not working alone he has team to make happy people all over the world. Just imagine how many additions we will create for the community of the MetaChristmas! Take a close look at the big picture. We left a lot of hints there for you...'
        },
    ], []);
    return (
        <div className={`faq ${isMobile ? 'mobile' : ''}`} id="faq">
            <p className="faq-title">FAQ</p>
            {data.map((item, index) => (
                <div key={item.heading} className="faq-item">
                    <div className="faq-item-head" onClick={() => onChangeFaq(index)}>{item.heading}
                        <img src={Plus} alt="plus" className="plus"/></div>
                    <AnimateHeight
                        duration={500}
                        height={activeFaq.includes(index) ? 'auto' : 0}
                    >
                        <p className="faq-item-content">{item.content}</p>
                    </AnimateHeight>
                </div>
            ))}
        </div>
    )
}

export default memo(Faq);