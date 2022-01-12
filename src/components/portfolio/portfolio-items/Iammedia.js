import React from 'react';
import { Link } from 'react-router-dom';

import iammedia from '../../../assets/images/portfolio-iammedia/iammedia.jpg';

import imgSymbolium from '../../../assets/images/page-portfolio/symbolium-portfolio.jpg';
import imgFlexoeasy from '../../../assets/images/page-portfolio/flexoeasy-portfolio.jpg';
import imgDubaiprint from '../../../assets/images/page-portfolio/dubaiprint-portfolio.jpg';
import imgShypr from '../../../assets/images/page-portfolio/shypr-portfolio.jpg';
import imgJacobs from '../../../assets/images/page-portfolio/jacobs-portfolio.jpg';
import imgNemra from '../../../assets/images/page-portfolio/nemra-portfolio.jpg';
import imgNdigitec from '../../../assets/images/page-portfolio/ndigitec-portfolio.jpg';
import imgPanarmenian from '../../../assets/images/page-portfolio/panarmfund-portfolio.jpg';
import imgBabylon from '../../../assets/images/page-portfolio/babylon-portfolio.jpg';
import imgDica from '../../../assets/images/page-portfolio/dica-portfolio.jpg';
import imgPep from '../../../assets/images/page-portfolio/pep-portfolio.jpg';

import PortfolioItem from '../PortfolioItem';

const Iammedia = () => {
    document.title = "Iammedia.am | Portfolio | Digitec Intl";
    document.body.className = 'body-portfolio-page';


    return (
        <div className='page-portfolio-item'>
            <div className='page-portfolio-item-wrapper'>
                <div className='content-box'>
                    <div className='left-box'>
                        <h1>Iammedia</h1>  
                        <div className='left-box-header'>
                            <p>
                                <span className='title'>Brand name: </span> 
                                Iammedia.am
                            </p>
                            <p>
                                <span className='title'>Services: </span> 
                                Web development, Android development, iOS development, digital marketing
                            </p>
                            <p>
                                <span className='title'>Project Duration: </span> 
                                Ongoing project, started in September 2018
                            </p>
                        </div>
                        <br />
                        <br />
                        <div className='left-box-upper'>
                            <h2>The Challenge:</h2>
                            <br />
                            <p>
                                Iammedia — an online media and TV platform — was just an idea when the team 
                                behind the project reached out to Digitec. They wanted to create a digital 
                                platform that writers, readers, and advertisers could use to create content 
                                and be rewarded for their contribution. It needed to be intuitive, memorable, 
                                and sophisticated, reflecting the core ideas of the platform.
                            </p>
                            <br />
                            <p>
                                The original concept needed an equally original solution.
                            </p>
                            <br />
                            <p>
                                Impressed by Digitec’s ability to develop complex software and strong visual 
                                identities, Iammedia entrusted the development of its platform to Digitec. 
                                It became our challenge to create a functional and scalable online platform 
                                with many interactive elements and a reliable publishing and transaction management systems.
                            </p>                            
                            <br />
                        </div>
                        <div className='left-box-lower'>
                            <h2>The Solution:</h2>
                            <br />
                            <p>
                                Iammedia is a user-centered platform, and we knew that its website needed to revolve around its 
                                visitors. It presented an interesting problem that we were looking forward to solving. 
                                Our team of web and mobile developers, UX/UI designers, and digital marketing specialists started 
                                working on the project right away.
                            </p>
                            <br />
                            <p>
                                First, we defined Iammedia’s primary audiences, namely visitors, writers, and advertisers. 
                                All of them had different goals, and their journey became the defining point of the platform, 
                                directing its information structure and navigation.
                            </p>
                            <br />
                            <p>
                                Then we started working on the visual identity and functionality of the platform. We knew it 
                                needed to be simple and memorable; distinctive, but not distracting. So to achieve the desired 
                                effect with went with a timeless black-white-red color scheme, minimalistic logotype, and 
                                predictable layout.
                            </p>
                            <br />
                            <p>
                                Thanks to our team’s flexibility and management, Iammedia turned from an idea to a digital 
                                platform anyone can use to read the news, watch shows, advertise, publish their work, and 
                                receive rewards. With our help, it became what it wanted to be — a modern-looking, innovative, 
                                and self-sustaining media website with the potential to transform content creation.
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
                    <img src={iammedia} alt='Iammedia.am' />
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

export default Iammedia;