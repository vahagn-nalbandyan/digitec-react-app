import React from 'react';
import { Link } from 'react-router-dom';

import babylonOne from '../../../assets/images/portfolio-babylon/babylon-1.jpg';
import babylonTwo from '../../../assets/images/portfolio-babylon/babylon-2.jpg';

import imgSymbolium from '../../../assets/images/page-portfolio/symbolium-portfolio.jpg';
import imgFlexoeasy from '../../../assets/images/page-portfolio/flexoeasy-portfolio.jpg';
import imgDubaiprint from '../../../assets/images/page-portfolio/dubaiprint-portfolio.jpg';
import imgIammedia from '../../../assets/images/page-portfolio/iammedia-portfolio.png';
import imgJacobs from '../../../assets/images/page-portfolio/jacobs-portfolio.jpg';
import imgNemra from '../../../assets/images/page-portfolio/nemra-portfolio.jpg';
import imgNdigitec from '../../../assets/images/page-portfolio/ndigitec-portfolio.jpg';
import imgPanarmenian from '../../../assets/images/page-portfolio/panarmfund-portfolio.jpg';
import imgShypr from '../../../assets/images/page-portfolio/shypr-portfolio.jpg';
import imgDica from '../../../assets/images/page-portfolio/dica-portfolio.jpg';
import imgPep from '../../../assets/images/page-portfolio/pep-portfolio.jpg';

import PortfolioItem from '../PortfolioItem';

const Babylon = () => {
    document.title = "Babylon | Portfolio | Digitec Intl";
    document.body.className = 'body-portfolio-page';


    return (
        <div className='page-portfolio-item'>
            <div className='page-portfolio-item-wrapper'>
                <div className='content-box'>
                    <div className='left-box'>
                        <h1>Babylon Restaurant</h1>  
                        <div className='left-box-header'>
                            <p>
                                <span className='title'>Brand name: </span> 
                                Babylon Restaurant
                            </p>
                            <p>
                                <span className='title'>Services: </span> 
                                Web Development, UI/UX Design, Food Styling and Photography, 
                                Graphic Design, SMM, Content Marketing, SEO
                            </p>
                            <p>
                                <span className='title'>Project Duration: </span> 
                                March-July 2018
                            </p>
                        </div>
                        <br />
                        <br />
                        <div className='left-box-upper'>
                            <h2>The Challenge:</h2>
                            <br />
                            <p>
                                Babylon is the first restaurant in Yerevan specialized in traditional Iraqi cuisine. 
                                It is a sophisticated venue with high standards and affordable prices. Among many 
                                Arabic restaurants in the city, Babylon is one of the few that don’t offer fast food 
                                but provide the perfect atmosphere for family dinners instead. 
                                <br />
                                We started the cooperation with the restaurant before its opening and guided the 
                                prospective guests to the venue. All the online activities were yet to plan, so we 
                                offered a full package including web development and digital marketing services.
                            </p>
                            <br />
                        </div>
                        <div className='left-box-lower'>
                            <h2>The Solution:</h2>
                            <br />
                            <p>
                                Digitec provided Babylon with food styling and photo shooting services to use the 
                                photographs both on the website and social media channels. 
                                <br />
                                We developed a user-friendly website featuring the restaurant menu and started 
                                blogging on the website to attract new visitors as well as optimize the website 
                                for search engines. The entire site is SEO-friendly and ranks high in the local 
                                searches. Due to our multi-channel digital marketing efforts, the restaurant has 
                                engaged with potential customers both from Armenian target audience and audiences 
                                from other countries who are planning to visit Armenia.
                            </p>
                            <br />
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
                    <img src={babylonOne} alt='Babylon' />
                    <img src={babylonTwo} alt='Babylon' />
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

export default Babylon;