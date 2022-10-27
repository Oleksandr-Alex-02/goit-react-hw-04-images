import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
    <button onClick={() => onClick()} className="button-more" type="button">Load more</button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;