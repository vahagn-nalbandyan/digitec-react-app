import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = (props) => {
    const [visibilityClass, setVisibilityClass] = useState('');

    const portfolioMouseOver = () => {
        setVisibilityClass('hovered');
    }

    const portfolioMouseOut = () => {
        setVisibilityClass('');
    }

    return (
        <Link to={`/portfolio/${props.url}`} style={{display:'contents'}}>
            <div onMouseOver={portfolioMouseOver} onMouseOut={portfolioMouseOut} className={`portfolio-item ${visibilityClass}`}>
                <img src={props.src} alt={props.alt} />
                <div className='text-box'>
                    <div className='title'>{props.title}</div>
                    <div className={`hidden ${props.className}`}>
                        <div className='description'>{props.description}</div>
                        <button>Discover</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PortfolioItem;