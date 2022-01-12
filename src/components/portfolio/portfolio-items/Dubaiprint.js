import React from 'react';
import { Link } from 'react-router-dom';

import dubaiprintOne from '../../../assets/images/portfolio-dubaiprint/dubaiprint-1.jpg';
import dubaiprintTwo from '../../../assets/images/portfolio-dubaiprint/dubaiprint-2.jpg';
import dubaiprintThree from '../../../assets/images/portfolio-dubaiprint/dubaiprint-3.jpg';

import imgSymbolium from '../../../assets/images/page-portfolio/symbolium-portfolio.jpg';
import imgFlexoeasy from '../../../assets/images/page-portfolio/flexoeasy-portfolio.jpg';
import imgShypr from '../../../assets/images/page-portfolio/shypr-portfolio.jpg';
import imgIammedia from '../../../assets/images/page-portfolio/iammedia-portfolio.png';
import imgJacobs from '../../../assets/images/page-portfolio/jacobs-portfolio.jpg';
import imgNemra from '../../../assets/images/page-portfolio/nemra-portfolio.jpg';
import imgNdigitec from '../../../assets/images/page-portfolio/ndigitec-portfolio.jpg';
import imgPanarmenian from '../../../assets/images/page-portfolio/panarmfund-portfolio.jpg';
import imgBabylon from '../../../assets/images/page-portfolio/babylon-portfolio.jpg';
import imgDica from '../../../assets/images/page-portfolio/dica-portfolio.jpg';
import imgPep from '../../../assets/images/page-portfolio/pep-portfolio.jpg';

import PortfolioItem from '../PortfolioItem';

const Dubaiprint = () => {
    document.title = "Dubaiprint.com | Portfolio | Digitec Intl";
    document.body.className = 'body-portfolio-page';


    return (
        <div className='page-portfolio-item'>
            <div className='page-portfolio-item-wrapper'>
                <div className='content-box'>
                    <div className='left-box'>
                        <h1>Dubaiprint.com</h1>  
                        <div className='left-box-header'>
                            <p>
                                <span className='title'>Brand name: </span> 
                                Dubaiprint.com
                            </p>
                            <p>
                                <span className='title'>Services: </span> 
                                Web Development, Mobile App Development, UI/UX Design, Motion Graphics, 
                                Graphic Design, Content Marketing, Email Marketing, SEO, SMM, Landing Pages
                            </p>
                            <p>
                                <span className='title'>Project Duration: </span> 
                                Ongoing project, started in 2017
                            </p>
                        </div>
                        <br />
                        <br />
                        <div className='left-box-upper'>
                            <h2>The Challenge:</h2>
                            <br />
                            <p>
                                Dubaiprint.com is the largest web-to-print platform in Dubai, offering hundreds of 
                                online printing products with worldwide delivery. 
                                <br />
                                We started the cooperation with Dubaiprint.com to develop the best the e-commerce 
                                printing platform in the GCC market. We had to fulfill the following requirements on 
                                the development and design stages:
                            </p>
                            <br />
                            <div className='unordered-list'>
                                <p className='unordered-list-item'>
                                    user-friendly product pages;
                                </p>
                                <p className='unordered-list-item'>
                                    accessible navigation and shopping process on the user interface;
                                </p>
                                <p className='unordered-list-item'>
                                    detailed descriptive content for products and services;
                                </p>
                                <p className='unordered-list-item'>
                                    large traffic;                 
                                </p>
                                <p className='unordered-list-item'>
                                    high social interaction;
                                </p>
                                <p className='unordered-list-item'>
                                    high-quality visual graphics.
                                </p>
                            </div>
                            <br />
                            <p>
                                The project required continuous digital enhancement from Digitec Intl to turn 
                                the platform more flexible for online shopping needs. We aimed to increase 
                                the online visibility of the brand, gain more organic traffic with targeted 
                                business keywords, and grow the online sales.
                            </p>
                        </div>
                        <br />
                        <div className='left-box-lower'>
                            <h2>The Solution:</h2>
                            <br />
                            <p>
                                <span className='solution-title'>Web and Content Development</span>
                                <br />
                                With a comprehensive package of digital solutions, we developed the platform with 
                                constantly increasing usability. The design of pages and the continuously developing 
                                content make every product page more accessible and understandable.
                            </p>
                            <br />
                            <p>
                                <span className='solution-title'>Digital Marketing</span>
                                <br />
                                We started a blog on Dubaiprint.com and on external popular blog platforms. Besides 
                                informing and attracting new leads, we also help search engines to find and index 
                                Dubaiprint.com with targeted keywords and to be listed in top search results. 
                                <br />
                                Weekly and monthly email campaigns with different messages help to convert leads 
                                into customers and keep them loyal.
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
                    <img src={dubaiprintOne} alt='Dubaiprint' />
                    <img src={dubaiprintTwo} alt='Dubaiprint' />
                    <img src={dubaiprintThree} alt='Dubaiprint' />
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

export default Dubaiprint;