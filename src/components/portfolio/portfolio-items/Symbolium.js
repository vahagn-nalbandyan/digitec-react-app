import React from 'react';
import { Link } from 'react-router-dom';

import symbolium from '../../../assets/images/portfolio-symbolium/symbolium.jpg';

import imgFlexoeasy from '../../../assets/images/page-portfolio/flexoeasy-portfolio.jpg';
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

const Symbolium = () => {
    document.title = "Symbolium | Portfolio | Digitec Intl";
    document.body.className = 'body-portfolio-page';


    return (
        <div className='page-portfolio-item'>
            <div className='page-portfolio-item-wrapper'>
                <div className='content-box'>
                    <div className='left-box'>
                        <h1>Symbolium</h1>  
                        <div className='left-box-header'>
                            <p>
                                <span className='title'>Brand name: </span> 
                                Symbolium
                            </p>
                            <p>
                                <span className='title'>Services: </span> 
                                web development, Android development, iOS development, digital marketing.
                            </p>
                            <p>
                                <span className='title'>Project Duration: </span> 
                                Ongoing project, started in April 2018
                            </p>
                        </div>
                        <br />
                        <br />
                        <div className='left-box-upper'>
                            <h2>The Challenge:</h2>
                            <br />
                            <p>
                                Only musicians know how fast the world of music evolves. Every now and then, 
                                they come across another new music notation or technique. And there is a high 
                                demand for a platform that contains all the necessary information in one place. 
                                The websites that already existed could not fulfill this demand: they offered very 
                                limited resources, mostly related to only one instrument. 
                                <br />
                                So we got the challenge from our partner to develop a platform that offers multiple 
                                extended techniques and the largest digital library for contemporary music notation. 
                                And the platform would be called Symbolium.
                            </p>
                            <br /> 
                        </div>
                        <div className='left-box-lower'>
                            <h2>The Solution:</h2>
                            <br />
                            <p>
                                At Digitec, we started to build the platform from scratch. Besides development, we took 
                                up the online promotion. From the very beginning, our development team worked hand-in-hand 
                                with the media team for high-quality content creation. One of the main goals was to create 
                                a platform that has a high level of usability and is easy to find. 
                                <br />
                                After the research stage, we started UI/UX design and development. We tried to think like 
                                musicians in order to create the easiest tools for them. The feedback that Symbolium is 
                                getting from its users the very first day makes us believe that we have solved our partner's problem.
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
                    <img src={symbolium} alt='Symbolium' />
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

export default Symbolium;