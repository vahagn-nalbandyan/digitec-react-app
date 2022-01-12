import React from 'react';
import { Link } from 'react-router-dom';

import flexoOne from '../../../assets/images/portfolio-flexoeasy/flexo-1.jpg';
import flexoTwo from '../../../assets/images/portfolio-flexoeasy/flexo-2.jpg';
import flexoThree from '../../../assets/images/portfolio-flexoeasy/flexo-3.jpg';

import imgSymbolium from '../../../assets/images/page-portfolio/symbolium-portfolio.jpg';
import imgShypr from '../../../assets/images/page-portfolio/shypr-portfolio.jpg';
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

const Flexoeasy = () => {
    document.title = "Flexoeasy.com | Portfolio | Digitec Intl";
    document.body.className = 'body-portfolio-page';


    return (
        <div className='page-portfolio-item'>
            <div className='page-portfolio-item-wrapper'>
                <div className='content-box'>
                    <div className='left-box'>
                        <h1>Flexoeasy.com</h1>  
                        <div className='left-box-header'>
                            <p>
                                <span className='title'>Brand name: </span> 
                                Flexoeasy.com
                            </p>
                            <p>
                                <span className='title'>Services: </span> 
                                E-commerce Platform Development, Mobile App Development, Content Development,
                                UI/UX Design, Branding, Content Marketing, Email Marketing, SMM
                            </p>
                            <p>
                                <span className='title'>Project Duration: </span> 
                                Ongoing project, started in 2020
                            </p>
                        </div>
                        <br />
                        <br />
                        <div className='left-box-upper'>
                            <h2>The Challenge:</h2>
                            <br />
                            <p>
                                Behind the platform stands NDigitec’s years of experience in the Flexography 
                                (often abbreviated to flexo) industry. Flexoeasy.com is the newest online 
                                competency of NDigitec - one of the biggest media production companies in the 
                                GCC region, a partner of ours.
                            </p>
                            <br />
                            <p>
                                The platform is all about innovative digital Prepress & Premedia solutions for 
                                flexo packaging converters, printers and for brand owners, as well. With Flexoeasy.com, 
                                the user can make an optimal choice from a variety of plates and can customize their 
                                properties down to the finest detail in a matter of minutes. So, the platform was supposed 
                                to allow them to allocate priorities to projects, assign roles, request fingerprints, 
                                and have the plates delivered to any location.
                            </p>
                            <br />
                            <p>
                                Overall, the requests for this project were to have:
                            </p>
                            <div className='unordered-list'>
                                <p className='unordered-list-item'>
                                    Structured website architecture to streamline user journeys;
                                </p>
                                <p className='unordered-list-item'>
                                    User-friendly UI/UX;
                                </p>
                                <p className='unordered-list-item'>
                                    User-friendly shopping process;
                                </p>
                                <p className='unordered-list-item'>
                                    Deliver the whole idea of the concept via digital marketing channels;                   
                                </p>
                                <p className='unordered-list-item'>
                                    Large traffic;
                                </p>
                                <p className='unordered-list-item'>
                                    Detailed descriptive yet understandable content for products and services’
                                </p>
                            </div>
                            <br />
                            <br />
                        </div>
                        <div className='left-box-lower'>
                            <h2>The Solution:</h2>
                            <br />
                            <p>
                                We aimed to introduce Flexoeasy.com’s offering as straightforward as possible. 
                                As a result, our team provided soft UI/UX design both for the website and the app 
                                in an accurate manner, by implementing a minimalistic style, concentrating more on 
                                the product pages being quite descriptive and easy-to navigate.
                            </p>
                            <br />
                            <p>
                                The new e-commerce platform was introduced with simplified user journeys that allowed 
                                customers to browse different plate-making solutions, to read about them, explore their 
                                advantages and sign in or contact Flexoeasy.com at every point.
                            </p>
                            <br />
                            <p>
                                In the product pages or in digital marketing channels we created such content that is 
                                easily available to the right prospects. Since Flexoeasy.com’s niche contains a rather 
                                professional sector, we use different digital marketing tools in order to achieve the 
                                right leads and convert them into customers.
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
                    <img src={flexoOne} alt='Flexoeasy' />
                    <img src={flexoTwo} alt='Flexoeasy' />
                    <img src={flexoThree} alt='Flexoeasy' />
                </div>
                <div className='portfolio-container'>
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

export default Flexoeasy;