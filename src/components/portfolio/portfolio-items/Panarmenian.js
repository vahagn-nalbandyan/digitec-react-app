import React from 'react';
import { Link } from 'react-router-dom';

import panarmOne from '../../../assets/images/portfolio-panarmenian/panarmenian-1.jpg';
import panarmTwo from '../../../assets/images/portfolio-panarmenian/panarmenian-2.jpg';

import imgFlexoeasy from '../../../assets/images/page-portfolio/flexoeasy-portfolio.jpg';
import imgSymbolium from '../../../assets/images/page-portfolio/symbolium-portfolio.jpg';
import imgShypr from '../../../assets/images/page-portfolio/shypr-portfolio.jpg';
import imgDubaiprint from '../../../assets/images/page-portfolio/dubaiprint-portfolio.jpg';
import imgIammedia from '../../../assets/images/page-portfolio/iammedia-portfolio.png';
import imgJacobs from '../../../assets/images/page-portfolio/jacobs-portfolio.jpg';
import imgNemra from '../../../assets/images/page-portfolio/nemra-portfolio.jpg';
import imgNdigitec from '../../../assets/images/page-portfolio/ndigitec-portfolio.jpg';
import imgBabylon from '../../../assets/images/page-portfolio/babylon-portfolio.jpg';
import imgDica from '../../../assets/images/page-portfolio/dica-portfolio.jpg';
import imgPep from '../../../assets/images/page-portfolio/pep-portfolio.jpg';

import PortfolioItem from '../PortfolioItem';

const Panarmenian = () => {
    document.title = "Panarmenian Fund | Portfolio | Digitec Intl";
    document.body.className = 'body-portfolio-page';


    return (
        <div className='page-portfolio-item'>
            <div className='page-portfolio-item-wrapper'>
                <div className='content-box'>
                    <div className='left-box'>
                        <h1>Panarmenian Fund</h1>  
                        <div className='left-box-header'>
                            <p>
                                <span className='title'>Brand name: </span> 
                                Panarmenian Fund
                            </p>
                            <p>
                                <span className='title'>Services: </span> 
                                Web Development, UI/UX Design, SEO
                            </p>
                            <p>
                                <span className='title'>Project Duration: </span> 
                                January-March 2019
                            </p>
                        </div>
                        <br />
                        <br />
                        <div className='left-box-upper'>
                            <h2>The Challenge:</h2>
                            <br />
                            <p>
                                Panarmenian Fund is a fund managing entity that aims to promote the development of 
                                entrepreneurship in Armenia. The organization is governed by DICA, a non-profit 
                                organization we have collaborated with for a similar project before. After the positive 
                                experience, DICA has approached us again and asked to develop a website for its new initiative.
                            </p>
                            <br />
                            <p>
                                Panarmenian Fund needed a new website that would make it easier to connect with its target 
                                audience and reflect the fund’s commitment to excellence. Digitec took on the challenge of 
                                developing a website that would represent the company and help it in its further promotion.
                            </p>
                            <br />
                        </div>
                        <div className='left-box-lower'>
                            <h2>The Solution:</h2>
                            <br />
                            <p>
                                To serve the Panarmenian Fund's purpose, its website needed to radiate credibility, 
                                be informative, and convincing. It should have reflected what the organization stands 
                                for — that being innovation, modernity, and accessibility. We wanted to make those ideas 
                                part of the web-design experience, to make it possible to grasp what Panarmenian Fund 
                                was about at a glance. To achieve that, our team went with a modern and sleek web layout, 
                                soft color scheme, smooth transitions, and compelling UX/UI design.
                            </p>
                            <br />
                            <p>
                                In the result, Digitec created an easy-to-use website with an excellent information 
                                structure and elegant visuals. We have developed a website that tells the meaningful 
                                story of Panarmenian Fund in a sophisticated, but intelligible manner.
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
                    <img src={panarmOne} alt='Panarmenian Fund' />
                    <img src={panarmTwo} alt='Panarmenian Fund' />
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

export default Panarmenian;