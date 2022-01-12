import React from 'react';
import { Link } from 'react-router-dom';

import pepOne from '../../../assets/images/portfolio-pep/pep-1.jpg';
import pepTwo from '../../../assets/images/portfolio-pep/pep-2.jpg';

import imgSymbolium from '../../../assets/images/page-portfolio/symbolium-portfolio.jpg';
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

import PortfolioItem from '../PortfolioItem';

const Pep = () => {
    document.title = "Pep | Portfolio | Digitec Intl";
    document.body.className = 'body-portfolio-page';


    return (
        <div className='page-portfolio-item'>
            <div className='page-portfolio-item-wrapper'>
                <div className='content-box'>
                    <div className='left-box'>
                        <h1>PEP</h1>  
                        <div className='left-box-header'>
                            <p>
                                <span className='title'>Brand name: </span> 
                                PEP
                            </p>
                            <p>
                                <span className='title'>Services: </span> 
                                Mobile App Development, Web Development, UI/UX Design
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
                                Fans are constantly seeking to find exclusive content from their idols, and 
                                celebrities keep looking for ways to monetize their popularity. More and more 
                                creative ways appear every year. 
                                <br />
                                But none of them suits people from all industries: some are relevant to newsmakers, 
                                others to fitness coaches, and then what about popular chefs, singers, teachers, etc.
                            </p>
                            <br />
                            <p>
                                We were challenged to create the ultimate solution for celebs to share exclusive 
                                content with their followers. That’s when we started to develop this mobile application. 
                                The app should allow celebrities to:
                            </p>
                            <br />
                            <div className='unordered-list'>
                                <p className='unordered-list-item'>
                                    share exclusive, private content
                                </p>
                                <p className='unordered-list-item'>
                                    broadcast live videos
                                </p>
                                <p className='unordered-list-item'>
                                    engage interested followers
                                </p>
                                <p className='unordered-list-item'>
                                    get paid in return               
                                </p>
                            </div>
                            <br />
                            <p>
                                Now let’s see what we’ve created.
                            </p>
                        </div>
                        <br />
                        <div className='left-box-lower'>
                            <h2>The Solution:</h2>
                            <br />
                            <p>
                                PEP: It’s Personal. It’s Exclusive. It’s Private. This was the motto of the application we 
                                started to develop. The mobile app development team of Digitec worked hand-in-hand to reach 
                                their best in design, usability, and functionality. 
                                <br />
                                Since its launch, PEP represents celebrities from various fields: the popular fitness trainer 
                                Sako Kouroumlian, the multi-linguist and language teacher Ehab Ramzi, the famous singer and 
                                actress Mai Selim, the leading actor Hani Ramzi, the businesswoman and fashion designer Lamitta 
                                Frangieh, and the famous actor Ahmad Zaher. In only one month (November 2017), PEP exceeded 5000 
                                downloads, and it still keeps enlarging its audience. By now, Ehab Ramzi alone has 15000 users on 
                                his private PEP app. 
                                <br />
                                Digitec now provides the full technical support for PEP mobile app.
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
                    <img src={pepOne} alt='PEP' />
                    <img src={pepTwo} alt='PEP' />
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
                </div>
            </div>
        </div>
    );
};

export default Pep;