import {memo, useCallback, useEffect, useState} from 'react';
import DesktopSantaBig from '../assets/payment/desctopBig.svg'
import DesktopSantaMiddle1 from '../assets/payment/desctopMiddle1.svg'
import DesktopSantaMiddle2 from '../assets/payment/desctopMiddle2.svg'
import DesktopSantaSmall1 from '../assets/payment/desctopSmall1.svg'
import DesktopSantaSmall2 from '../assets/payment/desctopSmall2.svg'
import DesktopSantaSmall3 from '../assets/payment/desctopSmall3.svg'
import Logo from '../assets/Logo.svg';
import {isMobile} from 'react-device-detect';
import {useDispatch, useSelector} from "react-redux";
import {connect} from "../redux/blockchain/blockchainActions";
import {fetchData} from "../redux/data/dataActions";

const Payment = () => {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [claimingNft, setClaimingNft] = useState(false);
    const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
    const [mintAmount, setMintAmount] = useState(1);
    const CONFIG = {
        CONTRACT_ADDRESS: "0x5815223E84E0dBe96CCfc240331e7e88272824E9",
        SCAN_LINK: "https://rinkeby.etherscan.io/address/0x5815223E84E0dBe96CCfc240331e7e88272824E9",
        NETWORK: {
            NAME: "Rinkeby",
            SYMBOL: "Eth",
            ID: 4,
        },
        NFT_NAME: "MetaChristmas",
        SYMBOL: "CH",
        MAX_SUPPLY: 77,
        WEI_COST: 80000000000000000,
        DISPLAY_COST: 0.08,
        GAS_LIMIT: 285000,
        MARKETPLACE: "Opeansea",
        MARKETPLACE_LINK: "https://testnets.opensea.io/collection/metachristmas-v2",
        SHOW_BACKGROUND: true,
    };
    const claimNFTs = () => {
        let cost = CONFIG.WEI_COST;
        let gasLimit = CONFIG.GAS_LIMIT;
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);
        setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
        setClaimingNft(true);
        blockchain.smartContract.methods
            .mint(mintAmount)
            .send({
                gasLimit: String(totalGasLimit),
                to: CONFIG.CONTRACT_ADDRESS,
                from: blockchain.account,
                value: totalCostWei,
            })
            .once("error", (err) => {
                console.log(err);
                setFeedback("Sorry, something went wrong please try again later.");
                setClaimingNft(false);
            })
            .then((receipt) => {
                console.log(receipt);
                setFeedback(
                    `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
                );
                setClaimingNft(false);
                dispatch(fetchData(blockchain.account));
            });
    };

    const decrementMintAmount = () => {
        let newMintAmount = mintAmount - 1;
        if (newMintAmount < 1) {
            newMintAmount = 1;
        }
        setMintAmount(newMintAmount);
    };

    const incrementMintAmount = () => {
        let newMintAmount = mintAmount + 1;
        if (newMintAmount > 10) {
            newMintAmount = 10;
        }
        setMintAmount(newMintAmount);
    };

    const getData = useCallback(() => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
        }
    }, [blockchain.account, dispatch, blockchain.smartContract]);

    useEffect(() => {
        getData();
    }, [getData, blockchain.account]);
    const endNft = Number(data.totalSupply) >= CONFIG.MAX_SUPPLY;
    return (
        <div className="app">
            <div className={`payment ${isMobile ? 'mobile' : ''}`}>
                <div className="logo-wrapper">
                    <img src={Logo} alt="logo" className="logo"/>
                </div>
                <div className={`payment-content ${!endNft ? 'active' : ''}`}>
                    <div className="payment-images">
                        <img className="icon santa-big" src={DesktopSantaBig} alt="santa"/>
                        <img className="icon santa-middleFirst" src={DesktopSantaMiddle1} alt="santa"/>
                        <img className="icon santa-middleSecond" src={DesktopSantaMiddle2} alt="santa"/>
                        <img className="icon santa-small" src={DesktopSantaSmall1} alt="santa"/>
                        <img className="icon santa-smallSecond" src={DesktopSantaSmall2} alt="santa"/>
                        <img className="icon santa-smallThird" src={DesktopSantaSmall3} alt="santa"/>

                    </div>
                    <div className="payment-info">
                        <p className="payment-number">{data.totalSupply} / {CONFIG.MAX_SUPPLY}</p>
                        {endNft ? (
                            <>
                                <p className="payment-title">The sale has ended.You can still
                                    find {CONFIG.NFT_NAME} on {CONFIG.MARKETPLACE}</p>
                            </>
                        ) : (
                            <>
                                <p className="payment-cost">1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}{CONFIG.NETWORK.SYMBOL}.</p>
                                <p className="payment-title">Excluding gas fees.</p>
                                {blockchain.account === "" ||
                                blockchain.smartContract === null ? (
                                    <>
                                        <p className="payment-title">Connect to the {CONFIG.NETWORK.NAME} Network</p>
                                        <div className="payment-connect" onClick={(e) => {
                                            e.preventDefault();
                                            dispatch(connect());
                                            getData();
                                        }}>Connect
                                        </div>
                                        {blockchain.errorMsg !== "" ? (
                                            <p className="payment-title error">{blockchain.errorMsg}</p>
                                        ) : null}
                                    </>
                                ) : (
                                    <>
                                        <p className="payment-title">{feedback}</p>
                                        <div className="buy-buttons">
                                            <button
                                                className="payment-connect active"
                                                disabled={claimingNft ? 1 : 0}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    decrementMintAmount();
                                                }}
                                            >
                                                -
                                            </button>
                                            <p className="payment-title number">{mintAmount}</p>
                                            <button
                                                className="payment-connect active"
                                                disabled={claimingNft ? 1 : 0}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    incrementMintAmount();
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            className="payment-connect"
                                            disabled={claimingNft ? 1 : 0}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                claimNFTs();
                                                getData();
                                            }}
                                        >
                                            {claimingNft ? "BUSY" : "BUY"}
                                        </button>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
                <p className="payment-footer">
                    Please make sure you are connected to right network (Ethereum Mainnet) and the
                    correct address. Please note: Once you make the purchase, you cannot undo this action.
                    We have set the limit to 28500 for the contract to successfully mint your NFT. We recommend that you
                    don`t lower the gas limit.
                </p>
            </div>
        </div>
    )
}


export default memo(Payment);