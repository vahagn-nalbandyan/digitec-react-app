import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
    document.title = "Digitec Intl | Media and Innovations";    
    document.body.className = 'body-home';
    
    return (
        <div className='home-wrapper'>
            <div className='center-text-box'>
                <Typewriter 
                    options={{
                        strings: ['innovations', 'media'],
                        loop: true,
                        autoStart: true,
                        delay: 80,
                        deleteSpeed: 10,
                        pauseFor: 5000, 
                      }}
                />
            </div>
            <div className='lower-box'>
                <div className='social-box'>
                    <a href="https://www.facebook.com/digitecintl/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 17.14 17.14">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <path d="M13.93,0A3.1,3.1,0,0,1,16.2.94a3.1,3.1,0,0,1,.94,2.27V13.93a3.21,3.21,0,0,1-3.21,3.21h-2.1V10.5h2.22l.34-2.59H11.83V6.26a1.46,1.46,0,0,1,.26-.94,1.35,1.35,0,0,1,1-.31h1.37V2.69a14.59,14.59,0,0,0-2-.1,3.35,3.35,0,0,0-2.43.89A3.41,3.41,0,0,0,9.15,6V7.91H6.92V10.5H9.15v6.64H3.21A3.1,3.1,0,0,1,.94,16.2,3.1,3.1,0,0,1,0,13.93V3.21A3.1,3.1,0,0,1,.94.94,3.1,3.1,0,0,1,3.21,0Z"></path>
                                </g>
                            </g>
                        </svg>        
                    </a>
                    <a href="https://www.instagram.com/digitecintl/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 17.14 17.14">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <path d="M17.14,8.57c0,1.71,0,2.88-.05,3.54A5.25,5.25,0,0,1,15.7,15.7a5.25,5.25,0,0,1-3.59,1.39c-.66,0-1.83.05-3.54.05s-2.88,0-3.54-.05A5.26,5.26,0,0,1,1.44,15.7,5.19,5.19,0,0,1,.06,12.11C0,11.45,0,10.28,0,8.57S0,5.69.06,5A5.21,5.21,0,0,1,1.44,1.44,5.21,5.21,0,0,1,5,.06Q6,0,8.57,0c1.71,0,2.88,0,3.54.06A5.19,5.19,0,0,1,15.7,1.44,5.26,5.26,0,0,1,17.09,5C17.12,5.69,17.14,6.87,17.14,8.57Zm-7.71-7H6.54l-1.08,0a8.48,8.48,0,0,0-1.15.11,4.06,4.06,0,0,0-.79.21,2.81,2.81,0,0,0-1,.64,3,3,0,0,0-.64,1,4.06,4.06,0,0,0-.21.79,8.48,8.48,0,0,0-.11,1.15c0,.45,0,.81,0,1.08V7.72c0,.51,0,.8,0,.85s0,.34,0,.85V10.6c0,.27,0,.63,0,1.08a8.48,8.48,0,0,0,.11,1.15,4.17,4.17,0,0,0,.21.8,2.92,2.92,0,0,0,.64,1,3,3,0,0,0,1,.65,4.11,4.11,0,0,0,.79.2,7.12,7.12,0,0,0,1.15.11l1.08,0H10.6l1.08,0a7.12,7.12,0,0,0,1.15-.11,4.23,4.23,0,0,0,.8-.2,3,3,0,0,0,1.63-1.63,4.23,4.23,0,0,0,.2-.8,7.12,7.12,0,0,0,.11-1.15c0-.45,0-.81,0-1.08V9.42c0-.51,0-.8,0-.85s0-.34,0-.85V6.54c0-.27,0-.63,0-1.08a7.12,7.12,0,0,0-.11-1.15,4.11,4.11,0,0,0-.2-.79,3,3,0,0,0-.65-1,2.78,2.78,0,0,0-1-.64,4.17,4.17,0,0,0-.8-.21,8.48,8.48,0,0,0-1.15-.11l-1.08,0Zm2.26,3.93A4.24,4.24,0,0,1,13,8.57a4.24,4.24,0,0,1-1.28,3.11A4.25,4.25,0,0,1,8.57,13a4.21,4.21,0,0,1-3.11-1.29A4.21,4.21,0,0,1,4.17,8.57,4.21,4.21,0,0,1,5.46,5.46,4.21,4.21,0,0,1,8.57,4.17,4.25,4.25,0,0,1,11.69,5.46Zm-1.1,5.13a2.85,2.85,0,0,0,0-4,2.85,2.85,0,0,0-4,0,2.85,2.85,0,0,0,0,4,2.85,2.85,0,0,0,4,0Zm3.28-7.32a1,1,0,0,1,0,1.45A1,1,0,0,1,12.12,4a1,1,0,0,1,1.75-.73Z"></path>
                                </g>
                            </g>
                        </svg>        
                    </a>
                    <a href="https://www.linkedin.com/company/digitec-intl/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 17.14 17.14">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <path d="M17.14,3.21V13.93a3.21,3.21,0,0,1-3.21,3.21H3.21A3.1,3.1,0,0,1,.94,16.2,3.1,3.1,0,0,1,0,13.93V3.21A3.1,3.1,0,0,1,.94.94,3.1,3.1,0,0,1,3.21,0H13.93A3.1,3.1,0,0,1,16.2.94,3.1,3.1,0,0,1,17.14,3.21Zm-11.75,1a1.32,1.32,0,0,0-.4-1,1.45,1.45,0,0,0-1-.38,1.49,1.49,0,0,0-1.05.38,1.22,1.22,0,0,0-.41,1,1.24,1.24,0,0,0,.4,1,1.39,1.39,0,0,0,1,.39h0A1.46,1.46,0,0,0,5,5.17,1.24,1.24,0,0,0,5.39,4.22ZM2.65,14.35H5.22V6.61H2.65Zm9.27,0H14.5V9.91a3.67,3.67,0,0,0-.82-2.6,2.78,2.78,0,0,0-2.15-.88A2.59,2.59,0,0,0,9.2,7.73h0V6.61H6.64q0,.73,0,7.74H9.22V10A1.62,1.62,0,0,1,9.3,9.4a1.82,1.82,0,0,1,.5-.67,1.26,1.26,0,0,1,.82-.27c.87,0,1.3.58,1.3,1.75Z"></path>
                                </g>
                            </g>
                        </svg>        
                    </a>
                    <a href="https://twitter.com/DigitecIntl" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 17.14 17.14">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <path d="M17.14,3.21V13.93a3.21,3.21,0,0,1-3.21,3.21H3.21A3.1,3.1,0,0,1,.94,16.2,3.1,3.1,0,0,1,0,13.93V3.21A3.1,3.1,0,0,1,.94.94,3.1,3.1,0,0,1,3.21,0H13.93A3.1,3.1,0,0,1,16.2.94,3.1,3.1,0,0,1,17.14,3.21ZM14.29,5.38a5,5,0,0,1-1.35.38,2.26,2.26,0,0,0,1-1.31A4.54,4.54,0,0,1,12.48,5,2.37,2.37,0,0,0,9.11,5a2.29,2.29,0,0,0-.68,1.66,2.16,2.16,0,0,0,.05.54,6.78,6.78,0,0,1-2.7-.73A6.67,6.67,0,0,1,3.64,4.71a2.29,2.29,0,0,0-.33,1.18,2.22,2.22,0,0,0,1,2,3,3,0,0,1-1.12-.29v0a2.25,2.25,0,0,0,.56,1.49,2.39,2.39,0,0,0,1.38.81,2.22,2.22,0,0,1-.57.09,3.25,3.25,0,0,1-.44-.05A2.36,2.36,0,0,0,5,11.08a2.22,2.22,0,0,0,1.36.47,4.66,4.66,0,0,1-2.91,1,4.92,4.92,0,0,1-.56,0,6.57,6.57,0,0,0,3.59,1.05,6.65,6.65,0,0,0,2.34-.4,5.82,5.82,0,0,0,1.88-1.06A6.93,6.93,0,0,0,12,10.59a6.59,6.59,0,0,0,.84-1.81,6.83,6.83,0,0,0,.27-1.88,2.28,2.28,0,0,0,0-.3A4.72,4.72,0,0,0,14.29,5.38Z"></path>
                                </g>
                            </g>
                        </svg>        
                    </a>
                </div>
                <div className='copyright-box'>
                    Ⓒ 2021 Digitec Intl., All Rights Reserved
                </div>
            </div>
        </div>
    );
};

export default Home;