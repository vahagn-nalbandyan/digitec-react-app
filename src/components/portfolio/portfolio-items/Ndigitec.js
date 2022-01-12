import React from 'react';
import { Link } from 'react-router-dom';

import ndigitec from '../../../assets/images/portfolio-ndigitec/ndigitec.jpg';

import imgSymbolium from '../../../assets/images/page-portfolio/symbolium-portfolio.jpg';
import imgFlexoeasy from '../../../assets/images/page-portfolio/flexoeasy-portfolio.jpg';
import imgDubaiprint from '../../../assets/images/page-portfolio/dubaiprint-portfolio.jpg';
import imgIammedia from '../../../assets/images/page-portfolio/iammedia-portfolio.png';
import imgJacobs from '../../../assets/images/page-portfolio/jacobs-portfolio.jpg';
import imgNemra from '../../../assets/images/page-portfolio/nemra-portfolio.jpg';
import imgShypr from '../../../assets/images/page-portfolio/shypr-portfolio.jpg';
import imgPanarmenian from '../../../assets/images/page-portfolio/panarmfund-portfolio.jpg';
import imgBabylon from '../../../assets/images/page-portfolio/babylon-portfolio.jpg';
import imgDica from '../../../assets/images/page-portfolio/dica-portfolio.jpg';
import imgPep from '../../../assets/images/page-portfolio/pep-portfolio.jpg';

import PortfolioItem from '../PortfolioItem';

const Ndigitec = () => {
    document.title = "NDigitec | Portfolio | Digitec Intl";
    document.body.className = 'body-portfolio-page';


    return (
        <div className='page-portfolio-item'>
            <div className='page-portfolio-item-wrapper'>
                <div className='content-box'>
                    <div className='left-box'>
                        <h1>NDigitec</h1>  
                        <div className='left-box-header'>
                            <p>
                                <span className='title'>Brand name: </span> 
                                NDigitec
                            </p>
                            <p>
                                <span className='title'>Services: </span> 
                                    Web Development, UI/UX Design, Motion Graphics, Graphic Design, 
                                    Content Marketing, Email Marketing, SEO, SMM, Landing Pages
                            </p>
                            <p>
                                <span className='title'>Project Duration: </span> 
                                March-July 2017
                            </p>
                        </div>
                        <br />
                        <br />
                        <div className='left-box-upper'>
                            <h2>The Challenge:</h2>
                            <br />
                            <p>
                                One of the biggest media production companies in the Middle East, a partner of Digitec, 
                                needed a website redesign. The website needed to not only present the company’s services 
                                but also reflect its unique vision, innovative approach, and professionalism. NDigitec 
                                wanted to have a modern digital presence that did justice to its history and a wide range 
                                of expertise.
                            </p>
                            <br />
                            <p>
                                Understanding that the website of the leading production company could be nothing less 
                                than perfect, Digitec took on the challenge in all seriousness. We wanted to develop 
                                a website that would summarize the decades-long body of the company's work while staying 
                                authentic to its message. A website that would modernize NDigitec's digital presence 
                                without taking off from its value.
                            </p>
                            <br />
                        </div>
                        <div className='left-box-lower'>
                            <h2>The Solution:</h2>
                            <br />
                            <p>
                                In its nature, NDigitec is not just a company that offers services. It is a living system 
                                with many smaller elements, functioning in sync like a small universe. Digitec found that 
                                idea to be essential to the media production company's image and put it at the core of its 
                                website redesign.
                            </p>
                            <br />
                            <p>
                                NDigitec’s website needed to be much more than just a simple page. We wanted it to tell 
                                about the company’s history, represent its values, and showcase its expertise. The website 
                                needed to reflect the high-end quality of services offered by the company and feel ‘luxurious.’ 
                                It also needed to serve as an educational platform for people looking to learn more about media 
                                production.
                            </p>
                            <br />
                            <p>
                                We concluded that we could achieve all that by focusing on the company’s main competencies — namely 
                                Premedia, Prepress, Digiprint, Fabrication. Accurately mapping them out was our first step. And 
                                indeed, they ended up ruling all the infrastructure of the site, us using them to design all the 
                                branding, visual, and textual elements. Then our developers, designers, and motion graphic artists 
                                worked on assembling a website that was both beautiful, functional and captivating on all fronts.
                            </p>
                            <br />
                            <p>
                                In the result, Digitec has built an immersive website that embodied the modern and high-tech outlook 
                                of the company, accurately reflecting its position on the market. The website carefully acquainted 
                                visitors with the NDigitec’s ‘universe,’ its seamless transitions, bright visuals, and simple texts 
                                representing the company’s high-tech vision and excellence in all-things production.
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
                    <img src={ndigitec} alt='NDigitec' />
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

export default Ndigitec;