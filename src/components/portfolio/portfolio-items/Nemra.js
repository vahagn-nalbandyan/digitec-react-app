import React from 'react';
import { Link } from 'react-router-dom';

import nemraOne from '../../../assets/images/portfolio-nemra/nemra-1.jpg';
import nemraTwo from '../../../assets/images/portfolio-nemra/nemra-2.jpg';

import imgSymbolium from '../../../assets/images/page-portfolio/symbolium-portfolio.jpg';
import imgFlexoeasy from '../../../assets/images/page-portfolio/flexoeasy-portfolio.jpg';
import imgDubaiprint from '../../../assets/images/page-portfolio/dubaiprint-portfolio.jpg';
import imgIammedia from '../../../assets/images/page-portfolio/iammedia-portfolio.png';
import imgJacobs from '../../../assets/images/page-portfolio/jacobs-portfolio.jpg';
import imgShypr from '../../../assets/images/page-portfolio/shypr-portfolio.jpg';
import imgNdigitec from '../../../assets/images/page-portfolio/ndigitec-portfolio.jpg';
import imgPanarmenian from '../../../assets/images/page-portfolio/panarmfund-portfolio.jpg';
import imgBabylon from '../../../assets/images/page-portfolio/babylon-portfolio.jpg';
import imgDica from '../../../assets/images/page-portfolio/dica-portfolio.jpg';
import imgPep from '../../../assets/images/page-portfolio/pep-portfolio.jpg';

import PortfolioItem from '../PortfolioItem';

const Nemra = () => {
    document.title = "Nemra | Portfolio | Digitec Intl";
    document.body.className = 'body-portfolio-page';


    return (
        <div className='page-portfolio-item'>
            <div className='page-portfolio-item-wrapper'>
                <div className='content-box'>
                    <div className='left-box'>
                        <h1>Nemra</h1>  
                        <div className='left-box-header'>
                            <p>
                                <span className='title'>Brand name: </span> 
                                Nemra
                            </p>
                            <p>
                                <span className='title'>Services: </span> 
                                Web Development, UI/UX Design, SEO, Content Development
                            </p>
                            <p>
                                <span className='title'>Project Duration: </span> 
                                December-January 2018
                            </p>
                        </div>
                        <br />
                        <br />
                        <div className='left-box-upper'>
                            <h2>The Challenge:</h2>
                            <br />
                            <p>
                                Nemra, a USA-based company that produces air-dried snacks from natural fruits, 
                                wanted to have a website that would help position the brand through its unique story. 
                                Before the official launch, the company spent a lot of time trying to find a unique 
                                niche in the US natural snack market and wanted their website to reflect their thinking.
                            </p>
                            <br />
                            <p>
                                From the beginning, both our team approached the project with enthusiasm. We set out to 
                                develop a website that would allow the brand’s interesting story to shine through every 
                                element - be it the functionality of the site, its design, images, or content. Our goal 
                                was to develop a website that would attract a modern audience, inform visitors about 
                                the history of the brand, and assist Nemra in its future promotions.
                            </p>
                            <br />
                        </div>
                        <div className='left-box-lower'>
                            <h2>The Solution:</h2>
                            <br />
                            <p>
                                Digitec’s team had a clear mission in mind — create a beautiful and captivating website 
                                that would stay true to the brand’s core idea. We wanted the visitors to enjoy clicking 
                                through the pages, giving enough information to make them feel interested in Nemra’s products.
                            </p>
                            <br />
                            <p>
                                To make it happen, we went with a simple layout that allowed to make the brand and its 
                                healthy-snacks the center of attention. We developed a simple navigation system, compelling 
                                UI/UX design, and meaningful visuals. It allowed the brand’s focus on health and traditional 
                                methods to shine through, making the browsing experience appealing to the visitor.
                            </p>
                            <br />
                            <p>
                                Creating a functional and presentable website was our only goal. To reach existing and potential 
                                customers, Nemra's website should have been easy-to-find. We paid special attention to the SEO 
                                of the website by performing in-depth keyword research and building the content around the queries. 
                                We used keywords to drive the website's navigation, connecting the pages and continuously reinforcing 
                                its core message — natural, air-dried, and healthy — to develop a compelling story that painted a 
                                complete brand image in the mind of visitors.
                            </p>
                            <br />
                            <p>
                                In the result, we have created a bright, clear, and modern-looking website that presents Nemra in a 
                                favorable light and forms a memorable and likable presence. Simple and tasteful, it functions as an 
                                informative business card, compelling brand presentation, and a sales page all at once.
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
                    <img src={nemraOne} alt='Nemra' />
                    <img src={nemraTwo} alt='Nemra' />
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

export default Nemra;