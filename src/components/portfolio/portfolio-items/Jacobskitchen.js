import React from 'react';
import { Link } from 'react-router-dom';

import jacobsOne from '../../../assets/images/portfolio-jacobskitchen/jacobskitchen-1.jpg';
import jacobsTwo from '../../../assets/images/portfolio-jacobskitchen/jacobskitchen-2.jpg';

import imgFlexoeasy from '../../../assets/images/page-portfolio/flexoeasy-portfolio.jpg';
import imgSymbolium from '../../../assets/images/page-portfolio/symbolium-portfolio.jpg';
import imgShypr from '../../../assets/images/page-portfolio/shypr-portfolio.jpg';
import imgDubaiprint from '../../../assets/images/page-portfolio/dubaiprint-portfolio.jpg';
import imgIammedia from '../../../assets/images/page-portfolio/iammedia-portfolio.png';
import imgNemra from '../../../assets/images/page-portfolio/nemra-portfolio.jpg';
import imgNdigitec from '../../../assets/images/page-portfolio/ndigitec-portfolio.jpg';
import imgPanarmenian from '../../../assets/images/page-portfolio/panarmfund-portfolio.jpg';
import imgBabylon from '../../../assets/images/page-portfolio/babylon-portfolio.jpg';
import imgDica from '../../../assets/images/page-portfolio/dica-portfolio.jpg';
import imgPep from '../../../assets/images/page-portfolio/pep-portfolio.jpg';

import PortfolioItem from '../PortfolioItem';

const Jacobskitchen = () => {
    document.title = "Jacobskitchen | Portfolio | Digitec Intl";
    document.body.className = 'body-portfolio-page';


    return (
        <div className='page-portfolio-item'>
            <div className='page-portfolio-item-wrapper'>
                <div className='content-box'>
                    <div className='left-box'>
                        <h1>Jacobskitchen</h1>  
                        <div className='left-box-header'>
                            <p>
                                <span className='title'>Brand name: </span> 
                                Jacobskitchen
                            </p>
                            <p>
                                <span className='title'>Services: </span> 
                                Web Development, UI/UX Design
                            </p>
                            <p>
                                <span className='title'>Project Duration: </span> 
                                February-March 2020
                            </p>
                        </div>
                        <br />
                        <br />
                        <div className='left-box-upper'>
                            <h2>The Challenge:</h2>
                            <br />
                            <p>
                                Jacobskitchen opened the first dark kitchen restaurant in Armenia as the first place 
                                in this format, working only for delivery. Aiming to make the services and food more 
                                accessible to its customers, Jacobskitchen approached Digitec to develop a website 
                                that would represent the company in a more detailed manner.
                            </p>
                            <br />
                            <p>
                                Jacobskitchen needed a website that would make it easier to find and order food in an instant. 
                                Digitec took on the challenge of developing a website that would represent the company in its 
                                best spotlight.
                            </p>
                            <br />
                        </div>
                        <div className='left-box-lower'>
                            <h2>The Solution:</h2>
                            <br />
                            <p>
                                To serve the Jacobskitchen’s purpose, we aimed to create a website that would have all the 
                                sections and categories for the food they serve and meanwhile would be informative and 
                                clear to the audience. The menu and the products should have been showcased in all their glory. 
                                Looking at the website, the customer must have been convinced that the food ordered from the
                                website would not disappoint them.
                            </p>
                            <br />
                            <p>
                                Realizing that most customers will focus on clarity and ease of understanding of the website, 
                                we focused on making it as catchy and comprehensive as possible. We focused on using our modern 
                                UI/UX layout, engaging color ideas and stunning graphic designs to make the site easy-to-use and 
                                visually attractive.
                            </p>
                            <br />
                            <p>
                                As a result, we created an engaging website that emphasizes all the advantages of the Jacobskitchen, 
                                assuring that one website is enough to feel the power and immortal taste of their food.
                            </p>
                        </div>
                    </div>
                    <div className='right-box'>
                        <p className='right-box-title'>
                            Need your own E-Commerce website?
                        </p>
                        <Link to='/contact'>Contact</Link>
                    </div>
                </div>
                <div className='img-box'>
                    <img src={jacobsOne} alt='Jacobskitchen' />
                    <img src={jacobsTwo} alt='Jacobskitchen' />
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
                        url='shypr'
                        itemClassName={`portfolio-item-3`} 
                        src={imgShypr} 
                        alt='Shypr' 
                        title='Shypr'
                        description='An international platform to connect companies and shipment providers with ease'
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

export default Jacobskitchen;