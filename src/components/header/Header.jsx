import React, {useCallback, useState} from 'react';
import Logo from '../../assets/Logo.svg';
import {Link} from "react-scroll";
import {isMobile} from 'react-device-detect';
import BurgerIcon from '../../assets/Burger.svg';
import AnimateHeight from 'react-animate-height';
import CloseIcon from '../../assets/close.svg';

const Header = ({titles, isHeader}) => {
    const [height, setHeight] = useState(0);
    const onClose = useCallback(() => setHeight(0), []);
    const onOpen = useCallback(() => setHeight('auto'), []);
    return <>
        <AnimateHeight
            duration={300}
            height={height}
        >
            <div className="header-menu">
                <div className="header-menu-close">
                    <img src={CloseIcon} alt="close" onClick={onClose}/>
                </div>
                <div className="header-menu-list">
                    {titles.map((item) => (
                        <>
                            {item.linkTo ? (
                                <Link
                                    to={item.linkTo}
                                    smooth={true}
                                    duration={500}
                                    offset={-400}
                                    key={item.title}
                                >
                                    <div onClick={onClose} className="header-menu-item">{item.title}</div>
                                </Link>
                            ) : (
                                <div onClick={onClose} className="header-menu-item" key={item.title}>{item.title}</div>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </AnimateHeight>
        {!isMobile ? (
            <div className="header">
                <img src={Logo} alt="logo" className="header-logo"/>
                <div className="header-titles">
                    {titles.map((item) => (
                        <>
                            {item.linkTo ? (
                                <Link
                                    to={item.linkTo}
                                    smooth={true}
                                    duration={500}
                                    offset={-40}
                                    key={item.title}
                                >
                                    <div className="header-item">{item.title}</div>
                                </Link>
                            ) : (
                                <a className="header-item" href={item.link}>
                                    {item.title}
                                </a>
                            )}
                        </>
                    ))}
                </div>
            </div>
        ) : (
            <div className={`header ${height === 'auto' ? 'active' : ''}`}>
                <img src={Logo} alt="logo" className="header-mobile-logo"/>
                {isHeader ?
                    <>
                        <img src={BurgerIcon} alt={"burger"} onClick={onOpen} className="header-mobile-burger"/>
                    </> : null
                }
            </div>

        )}
    </>
}

export default React.memo(Header);