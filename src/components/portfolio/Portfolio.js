import React from 'react';

import PortfolioItem from './PortfolioItem';

import imgFlexoeasy from '../../assets/images/page-portfolio/flexoeasy-portfolio.jpg';
import imgSymbolium from '../../assets/images/page-portfolio/symbolium-portfolio.jpg';
import imgShypr from '../../assets/images/page-portfolio/shypr-portfolio.jpg';
import imgDubaiprint from '../../assets/images/page-portfolio/dubaiprint-portfolio.jpg';
import imgIammedia from '../../assets/images/page-portfolio/iammedia-portfolio.png';
import imgJacobs from '../../assets/images/page-portfolio/jacobs-portfolio.jpg';
import imgNemra from '../../assets/images/page-portfolio/nemra-portfolio.jpg';
import imgNdigitec from '../../assets/images/page-portfolio/ndigitec-portfolio.jpg';
import imgPanarmenian from '../../assets/images/page-portfolio/panarmfund-portfolio.jpg';
import imgBabylon from '../../assets/images/page-portfolio/babylon-portfolio.jpg';
import imgDica from '../../assets/images/page-portfolio/dica-portfolio.jpg';
import imgPep from '../../assets/images/page-portfolio/pep-portfolio.jpg';

const Portfolio = () => {
    document.title = "Portfolio | Software Development Design Digital Marketing | Digitec Intl";
    document.body.className = 'body-portfolio';

    return (
        <div className='page-portfolio'>
            <div className='page-portfolio-wrapper'>
                <h1>Portfolio</h1>
                <p>
                    Digitec Intl creates digital solutions for a wide range of industries. 
                    We love diversity not only in our projects and challenges but also in the fields where we work.
                    <br />
                    Through the whole process, we strive to keep everything easy-to-use. We believe that simplicity is 
                    the ultimate sophistication.
                </p>
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
    );
};

export default Portfolio;