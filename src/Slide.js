import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({cover,children}) => {
    return (
        <div className="wrapper__slide">
            <div className="slide__cover-container">
                <img src={cover} className="cover-container__cover" />
            </div>
            <div className="slide__content">
                {children}
            </div>
        </div>
    )
}

export default Slide;

Slide.propTypes = {
    children:PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    cover:PropTypes.string
}