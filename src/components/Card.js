import React from 'react';
import {StyledCard} from './styled/Card.styled';

const Card = ({ item: {id, title, body, image} }) => {
    return (
        <StyledCard layout={id%2 === 0 && 'row-reverse'}>
            <div>
                <h2> {title} </h2>
                <p> {body} </p>
            </div>

            <div>
                <img src={`./images/${image}`} alt="" srcset="" />
            </div>
        </StyledCard>
    )
}

export default Card
