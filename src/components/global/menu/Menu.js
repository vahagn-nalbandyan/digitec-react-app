import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';




const Menu = (props) => { 

    let history = useHistory();

    const handleHistoryPush = (e) => {
        history.push(e.target.parentElement.id);
        console.log(e.target.parentElement.id);
    }    

    return (
                    
        <div onClick={props.onClick} className={`menu ${props.class}`}>
            <div className='menu-wrapper'>
                <div className='nav-box'>
                    <p onClick={handleHistoryPush} id='/about' className='menu-item about'><NavLink to='/about' activeClassName="active">About us</NavLink></p>                        
                    <p onClick={handleHistoryPush} id='/services' className='menu-item services'><NavLink to='/services' activeClassName="active">Services</NavLink></p>                        
                    <p onClick={handleHistoryPush} id='/portfolio' className='menu-item portfolio'><NavLink to='/portfolio' activeClassName="active">Portfolio</NavLink></p>                        
                    <p onClick={handleHistoryPush} id='/careers' className='menu-item careers'><NavLink to='/careers' activeClassName="active">Careers</NavLink></p>                        
                    <p onClick={handleHistoryPush} id='/partners' className='menu-item partners'><NavLink to='/partners' activeClassName="active">Partners</NavLink></p>                        
                    <p onClick={handleHistoryPush} id='/contact' className='menu-item contact'><NavLink to='/contact' activeClassName="active">Contact us</NavLink></p>                        
                    <p onClick={handleHistoryPush} id='/blog' className='menu-item blog'><NavLink to='/blog' activeClassName="active">Blog</NavLink></p>          
                </div>
            </div>
        </div>
    );
};

export default Menu;
