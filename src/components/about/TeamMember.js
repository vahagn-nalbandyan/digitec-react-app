import React from 'react';

const TeamMember = (props) => {
    let {data} = props

    const hover = e => {
        let boxes = document.querySelectorAll('.member-item');
        let elem = e.currentTarget
        Object.keys(boxes).map((key) => {
            let item = boxes[key]
            item.classList.remove('active');
            return true
        })
        if (!elem.classList.contains('active')) {
            elem.classList.add('active')
        }
        props.onMouseOver(data.id)
    }
    
    return (
        <div onMouseOver={hover} className="member-item item">
            <img src={data.image} alt={data.name}/>
            <p className='name'>{data.name}</p>
            <p className='position'>{data.position}</p>
        </div>
    );
};

export default TeamMember;
