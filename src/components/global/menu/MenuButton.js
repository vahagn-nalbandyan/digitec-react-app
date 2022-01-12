import React from 'react';

const MenuButton = (props) => {
    return (
        <div onClick={props.onClick} className={`menu-button ${props.class}`}>
            <span className='upper-line'></span>
            <span className='center-line'></span>
            <span className='lower-line'></span>
        </div>
    );
};

export default MenuButton;