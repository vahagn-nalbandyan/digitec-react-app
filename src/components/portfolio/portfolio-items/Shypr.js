import React from 'react';
import { Link } from 'react-router-dom';

import shyprOne from '../../../assets/images/portfolio-shypr/shypr-1.jpg';
import shyprTwo from '../../../assets/images/portfolio-shypr/shypr-2.jpg';
import shyprThree from '../../../assets/images/portfolio-shypr/shypr-3.jpg';
import shyprFour from '../../../assets/images/portfolio-shypr/shypr-4.jpg';
import shyprFive from '../../../assets/images/portfolio-shypr/shypr-5.jpg';

import imgSymbolium from '../../../assets/images/page-portfolio/symbolium-portfolio.jpg';
import imgFlexoeasy from '../../../assets/images/page-portfolio/flexoeasy-portfolio.jpg';
import imgDubaiprint from '../../../assets/images/page-portfolio/dubaiprint-portfolio.jpg';
import imgIammedia from '../../../assets/images/page-portfolio/iammedia-portfolio.png';
import imgJacobs from '../../../assets/images/page-portfolio/jacobs-portfolio.jpg';
import imgNemra from '../../../assets/images/page-portfolio/nemra-portfolio.jpg';
import imgNdigitec from '../../../assets/images/page-portfolio/ndigitec-portfolio.jpg';
import imgPanarmenian from '../../../assets/images/page-portfolio/panarmfund-portfolio.jpg';
import imgBabylon from '../../../assets/images/page-portfolio/babylon-portfolio.jpg';
import imgDica from '../../../assets/images/page-portfolio/dica-portfolio.jpg';
import imgPep from '../../../assets/images/page-portfolio/pep-portfolio.jpg';

import PortfolioItem from '../PortfolioItem';

const Shypr = () => {
    document.title = "Shypr | Portfolio | Digitec Intl";
    document.body.className = 'body-portfolio-page';


    return (
        <div className='page-portfolio-item'>
            <div className='page-portfolio-item-wrapper'>
                <div className='content-box'>
                    <div className='left-box'>
                        <h1>Shypr</h1>  
                        <div className='left-box-header'>
                            <p>
                                <span className='title'>Brand name: </span> 
                                Shypr
                            </p>
                            <p>
                                <span className='title'>Services: </span> 
                                Branding, web platform development, UI/UX design, application interface design
                            </p>
                            <p>
                                <span className='title'>Project Duration: </span> 
                                May 2019 - February 2020
                            </p>
                        </div>
                        <br />
                        <br />
                        <div className='left-box-upper'>
                            <h2>The Challenge:</h2>
                            <br />
                            <p>
                                Shypr - a platform that would connect individuals and companies by solving a problem 
                                with international shipment and transportation — got our attention from the start.
                            </p>
                            <br />
                            <p>
                                With its platform, Spypr wanted to create a space where companies could find means of 
                                transporting their products and equipment with reliable partners. At the same time, 
                                the company wanted to provide shipping companies with enough work opportunities to 
                                minimize the idle time of their transports.
                            </p>
                            <br />
                            <p>
                                Fascinated by this innovative idea, Digitec took the responsibility of developing the 
                                perfect solution. To encompass everything our partners cared about while keeping it 
                                accessible to anyone across the globe, our team needed a groundbreaking design. We 
                                have challenged ourselves to combine simplicity with sophistication.
                            </p>                            
                            <br />
                        </div>
                        <div className='left-box-lower'>
                            <h2>The Solution:</h2>
                            <br />
                            <p>
                                Cracking our knuckles, we got down to the business of turning the ideas we had in our 
                                minds into reality. Shypr is all about connecting and we wanted that idea to be reflected 
                                in the design. It was our goal to make sure anyone using the platform could surf through 
                                it and communicate smoothly.
                            </p>
                            <br />
                            <p>
                                Our first objective was to figure out who the target audiences of the Spypr are, what they 
                                look for, and how the company can solve their issues. We knew it was the key because the 
                                better you know your clients, the clearer picture you can have of the final product. 
                                Putting down the important points and crucial aspects of the strategy, we moved towards 
                                the next step.
                            </p>
                            <br />
                            <p>
                                While working on the technical part, Digitec’s branding team asked an essential question: 
                                How can we showcase this idea as brilliantly as it is? With a combined power of the information 
                                gathered through extensive research and years of design experience, our team came up with a 
                                simple but expressive branding solution.
                            </p>
                            <br />
                            <p>
                                Finalizing the project, we put everything to the test. Exceeding the expectations, we have developed 
                                a comprehensive platform with a memorable branding and strong software backbone. We have accomplished 
                                the goal of creating a digital space for organizations to use when they need to deliver their product 
                                and for the shipping companies to manage their operations.
                            </p>
                        </div>
                    </div>
                    <div className='right-box'>
                        <p className='right-box-title'>
                            Get quote for your project
                        </p>
                        <Link to='/contact'>Contact</Link>
                    </div>
                </div>
                <div className='img-box'>
                    <img src={shyprOne} alt='Shypr' />
                    <img src={shyprTwo} alt='Shypr' />
                    <img src={shyprThree} alt='Shypr' />
                    <img src={shyprFour} alt='Shypr' />
                    <img src={shyprFive} alt='Shypr' />
                </div>
                <div className='portfolio-container'>
                    <PortfolioItem 
                        url='flexoeasy'
                        itemClassName={`portfolio-item-1`} 
                        src={imgFlexoeasy} 
                        alt='Flexoeasy' 
                        title='Flexoeasy.com'
                        description='A digital platform that accesses high-quality Prepress and Premedia services from anywhere in the world.'
                    />
                    <PortfolioItem 
                        url='symbolium'
                        itemClassName={`portfolio-item-2`} 
                        src={imgSymbolium} 
                        alt='Symbolium' 
                        title='Symbolium'
                        description='Symbolium is a digital library for contemporary music notation and performance techniques'
                    />
                    <PortfolioItem 
                        url='dubaiprint'
                        itemClassName={`portfolio-item-4`} 
                        src={imgDubaiprint} 
                        alt='Dubaiprint' 
                        title='Dubaiprint.com'
                        description='The first integrated online printing platform in UAE, offering hundreds of printed products'
                    />
                    <PortfolioItem 
                        url='iammedia'
                        itemClassName={`portfolio-item-5`} 
                        src={imgIammedia} 
                        alt='Iammedia' 
                        title='Iammedia.am'
                        description='Innovative media and online TV platform, publishing original and user-generated content'
                    />
                    <PortfolioItem 
                        url='jacobskitchen'
                        itemClassName={`portfolio-item-6`} 
                        src={imgJacobs} 
                        alt='Jacobs Kitchen' 
                        title='Jacobskitchen'
                        description='The first restaurant to introduce dark kitchen format to the Armenian market'
                    />
                    <PortfolioItem 
                        url='nemra'
                        itemClassName={`portfolio-item-7`} 
                        src={imgNemra} 
                        alt='Nemra' 
                        title='Nemra'
                        description='US-based company, producing natural, healthy, and delicious air-dried fruit snacks for people of all ages'
                    />
                    <PortfolioItem 
                        url='ndigitec'
                        itemClassName={`portfolio-item-8`} 
                        src={imgNdigitec} 
                        alt='NDigitec' 
                        title='NDigitec'
                        description='Leading production company in the Middle East, with a wide range of top-notch media services'
                    />
                    <PortfolioItem 
                        url='panarmfund'
                        itemClassName={`portfolio-item-9`} 
                        src={imgPanarmenian} 
                        alt='PanArmenian' 
                        title='Panarmenian Fund'
                        description='Fund managing entity, investing in small and medium-size businesses of Armenian descent'
                    />
                    <PortfolioItem 
                        url='babylon'
                        itemClassName={`portfolio-item-10`} 
                        src={imgBabylon} 
                        alt='Babylon' 
                        title='Babylon'
                        description='The first high-end restaurant offering Iraqi cuisine in Yerevan, Armenia'
                    />
                    <PortfolioItem 
                        url='dica'
                        itemClassName={`portfolio-item-11`} 
                        src={imgDica} 
                        alt='Dica' 
                        title='DICA'
                        description='Armenian investment organization, promoting the development of local entrepreneurship'
                    />
                    <PortfolioItem 
                        url='pep'
                        itemClassName={`portfolio-item-12`} 
                        src={imgPep} 
                        alt='Pep'    
                        title='Pep'            
                        description='A unique mobile app where celebrities share exclusive and private content with their followers'     
                    />
                </div>
            </div>
        </div>
    );
};

export default Shypr;