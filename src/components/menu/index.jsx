import {useCallback, useEffect, useMemo, useRef, useState, memo} from "react";
import Santas from '../../assets/Santas.svg';
import SmallSanta1 from '../../assets/circleSmallSanta1.svg'
import SmallSanta2 from '../../assets/circleSmallSanta2.svg'
import MediumSanta from '../../assets/circleMediumSanta.svg';
import BigSanta from '../../assets/circleBigSanta.svg';
import moment from 'moment';
import {isMobile} from 'react-device-detect';

const Menu = () => {
    const calculateDuration = useCallback((eventTime) => moment.duration(Math.max(eventTime - (Math.floor(Date.now() / 1000)), 0), 'seconds'), []);
    const addZero = useCallback((time) => +time < 10 ? `0${time}` : time, []);
    const timerRef = useRef(0);
    const eventTime = moment('2021/12/15').valueOf();
    const [duration, setDuration] = useState(calculateDuration(eventTime));
    const timerCallback = useCallback(() => {
        setDuration(calculateDuration(eventTime));
    }, [eventTime, calculateDuration])
    useEffect(() => {
        timerRef.current = setInterval(timerCallback, 1000);
        return () => {
            clearInterval(timerRef.current);
        }
    }, [timerCallback]);
    const timeInfo = useMemo(() => [
        {
            title: 'Days',
            value: addZero(duration.days())
        },
        {
            title: 'Hours',
            value: addZero(duration.hours())
        },
        {
            title: 'Minutes',
            value: addZero(duration.minutes())
        },
        {
            title: 'Seconds',
            value: addZero(duration.seconds())
        }
    ], [addZero, duration])
    return (
        <div className={`menu ${isMobile ? 'mobile' : ''}`}>
            <div className="menu-info">
                <p className="menu-info-title"> The first Santa Claus NFT collection created
                    on Ethereum</p>
                <div className="menu-timer">
                    {timeInfo.map((item) => (
                        <div className="menu-timer-item" key={item.title}>
                            <div className="menu-timer-value">{item.value}</div>
                            <div className="menu-timer-title">{item.title}</div>
                        </div>
                    ))}
                </div>
            </div>
            {isMobile
                ? (
                    <>
                        <img src={SmallSanta1} alt="santa" className="menu-santa-smallFirst"/>
                        <img src={SmallSanta2} alt="santa" className="menu-santa-smallSecond"/>
                        <img src={MediumSanta} alt="santa" className="menu-santa-medium"/>
                        <img src={BigSanta} alt="santa" className="menu-santa-big"/>

                    </>
                ) :
                <img src={Santas} alt="santas" className="menu-santas"/>}
        </div>
    )
}

export default memo(Menu);