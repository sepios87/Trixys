import React from 'react';
import classes from './Vague.module.scss';
import { AiOutlineInstagram } from 'react-icons/ai';
import { IoLogoFacebook } from 'react-icons/io';

const Vague = ({ waveTransition }) => {
    return (
        <>
            <img className={classes.logo} src="svg/logo.svg" alt="logo" />
            <svg
                style={{
                    width: waveTransition ? '75vh' : '',
                    height: waveTransition ? '75vh' : '',
                }}
                className={classes.vague1}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                viewBox={`0 0 300 300`}
            >
                <g>
                    <linearGradient
                        id="lg-0.29842378160630834"
                        x1="0"
                        x2="1"
                        y1="0"
                        y2="0"
                    >
                        <stop stopColor="#f5d854" offset="0"></stop>
                        <stop stopColor="#f8c555" offset="1"></stop>
                    </linearGradient>
                    <path
                        d=""
                        fill="url(#lg-0.29842378160630834)"
                        opacity="0.85"
                    >
                        <animate
                            attributeName="d"
                            dur="10s"
                            repeatCount="indefinite"
                            keyTimes="0;0.333;0.667;1"
                            calcmod="spline"
                            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                            begin="0s"
                            values="M0 0L 0 228.42543842578573Q 51 142.83663458617897  102 114.47324156937736T 204 -9.337771633703426T 306 -56.47590973474547L 306 0 Z;M0 0L 0 250.36432133146397Q 51 178.18379212665405  102 159.47725707987627T 204 -18.94150754097538T 306 -66.58833541669983L 306 0 Z;M0 0L 0 182.41469627155692Q 51 122.66909570264957  102 105.01394912908002T 204 67.82784391178691T 306 -99.30838040351745L 306 0 Z;M0 0L 0 228.42543842578573Q 51 142.83663458617897  102 114.47324156937736T 204 -9.337771633703426T 306 -56.47590973474547L 306 0 Z"
                        ></animate>
                    </path>
                    <path
                        d=""
                        fill="url(#lg-0.29842378160630834)"
                        opacity="0.5"
                    >
                        <animate
                            attributeName="d"
                            dur="10s"
                            repeatCount="indefinite"
                            keyTimes="0;0.333;0.667;1"
                            calcmod="spline"
                            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                            begin="-3.3333333333333335s"
                            values="M0 0L 0 195.5993151932361Q 51 101.61444356154269  102 77.83196348693434T 204 56.314204330963435T 306 -164.96701629150587L 306 0 Z;M0 0L 0 278.2996792773374Q 51 206.74910223273355  102 172.55643212659862T 204 26.000838764349254T 306 -122.41126523921872L 306 0 Z;M0 0L 0 233.47999386176232Q 51 212.8509033961567  102 194.84568871291685T 204 45.01238816781304T 306 -65.29086367448375L 306 0 Z;M0 0L 0 195.5993151932361Q 51 101.61444356154269  102 77.83196348693434T 204 56.314204330963435T 306 -164.96701629150587L 306 0 Z"
                        ></animate>
                    </path>
                    <path
                        d=""
                        fill="url(#lg-0.29842378160630834)"
                        opacity="0.5"
                    >
                        <animate
                            attributeName="d"
                            dur="10s"
                            repeatCount="indefinite"
                            keyTimes="0;0.333;0.667;1"
                            calcmod="spline"
                            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                            begin="-6.666666666666667s"
                            values="M0 0L 0 161.5878217322325Q 51 133.77615903651417  102 110.75482384135945T 204 -13.465822835454361T 306 -34.21643098282419L 306 0 Z;M0 0L 0 140.65061527941552Q 51 132.18328080856173  102 103.97832584903564T 204 20.201805162821188T 306 -83.71674019504087L 306 0 Z;M0 0L 0 221.114749520734Q 51 132.35403638426357  102 105.94320226874972T 204 23.542012624034413T 306 -11.518939933766148L 306 0 Z;M0 0L 0 161.5878217322325Q 51 133.77615903651417  102 110.75482384135945T 204 -13.465822835454361T 306 -34.21643098282419L 306 0 Z"
                        ></animate>
                    </path>
                </g>
            </svg>

            <div className={classes.socials}>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/trixys_agency/?hl=fr"
                >
                    <AiOutlineInstagram />
                </a>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/Trixys-107698671761137"
                >
                    <IoLogoFacebook />
                </a>
            </div>
            <svg
                style={{
                    width: waveTransition ? '75vh' : '',
                    height: waveTransition ? '75vh' : '',
                }}
                className={classes.vague2}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                viewBox={`0 0 300 300`}
            >
                <g>
                    <linearGradient
                        id="lg-0.29842378160630834"
                        x1="0"
                        x2="1"
                        y1="0"
                        y2="0"
                    >
                        <stop stopColor="#f5d854" offset="0"></stop>
                        <stop stopColor="#f8c555" offset="1"></stop>
                    </linearGradient>
                    <path
                        d=""
                        fill="url(#lg-0.29842378160630834)"
                        opacity="0.85"
                    >
                        <animate
                            attributeName="d"
                            dur="10s"
                            repeatCount="indefinite"
                            keyTimes="0;0.333;0.667;1"
                            calcmod="spline"
                            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                            begin="0s"
                            values="M0 0L 0 228.42543842578573Q 51 142.83663458617897  102 114.47324156937736T 204 -9.337771633703426T 306 -56.47590973474547L 306 0 Z;M0 0L 0 250.36432133146397Q 51 178.18379212665405  102 159.47725707987627T 204 -18.94150754097538T 306 -66.58833541669983L 306 0 Z;M0 0L 0 182.41469627155692Q 51 122.66909570264957  102 105.01394912908002T 204 67.82784391178691T 306 -99.30838040351745L 306 0 Z;M0 0L 0 228.42543842578573Q 51 142.83663458617897  102 114.47324156937736T 204 -9.337771633703426T 306 -56.47590973474547L 306 0 Z"
                        ></animate>
                    </path>
                    <path
                        d=""
                        fill="url(#lg-0.29842378160630834)"
                        opacity="0.5"
                    >
                        <animate
                            attributeName="d"
                            dur="10s"
                            repeatCount="indefinite"
                            keyTimes="0;0.333;0.667;1"
                            calcmod="spline"
                            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                            begin="-3.3333333333333335s"
                            values="M0 0L 0 195.5993151932361Q 51 101.61444356154269  102 77.83196348693434T 204 56.314204330963435T 306 -164.96701629150587L 306 0 Z;M0 0L 0 278.2996792773374Q 51 206.74910223273355  102 172.55643212659862T 204 26.000838764349254T 306 -122.41126523921872L 306 0 Z;M0 0L 0 233.47999386176232Q 51 212.8509033961567  102 194.84568871291685T 204 45.01238816781304T 306 -65.29086367448375L 306 0 Z;M0 0L 0 195.5993151932361Q 51 101.61444356154269  102 77.83196348693434T 204 56.314204330963435T 306 -164.96701629150587L 306 0 Z"
                        ></animate>
                    </path>
                    <path
                        d=""
                        fill="url(#lg-0.29842378160630834)"
                        opacity="0.5"
                    >
                        <animate
                            attributeName="d"
                            dur="10s"
                            repeatCount="indefinite"
                            keyTimes="0;0.333;0.667;1"
                            calcmod="spline"
                            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                            begin="-6.666666666666667s"
                            values="M0 0L 0 161.5878217322325Q 51 133.77615903651417  102 110.75482384135945T 204 -13.465822835454361T 306 -34.21643098282419L 306 0 Z;M0 0L 0 140.65061527941552Q 51 132.18328080856173  102 103.97832584903564T 204 20.201805162821188T 306 -83.71674019504087L 306 0 Z;M0 0L 0 221.114749520734Q 51 132.35403638426357  102 105.94320226874972T 204 23.542012624034413T 306 -11.518939933766148L 306 0 Z;M0 0L 0 161.5878217322325Q 51 133.77615903651417  102 110.75482384135945T 204 -13.465822835454361T 306 -34.21643098282419L 306 0 Z"
                        ></animate>
                    </path>
                </g>
            </svg>
        </>
    );
};

export default Vague;
