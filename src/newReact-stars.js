import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const parentStyles = {
  overflow: 'hidden',
  position: 'relative',
}

const defaultStyles = {
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  display: 'block',
  float: 'left'
}

const getHalfStarStyles = (color, uniqueness) => {
  return `
    .react-stars-${uniqueness}:before {
      position: absolute;
      overflow: hidden;
      display: block;
      z-index: 1;
      top: 0; left: 0;
      width: 50%;
      content: attr(data-forhalf);
      color: ${color};
  }`
};

const ReactStars = ({value}) => {

  const [stars, setStars] = useState(value);

  
  return(
    <div style={parentStyles}>

      value = {value}
      {/* {half && renderHalfStarStyleElement()}
      {renderStars()} */}
      
    </div>
  )

}

ReactStars.propTypes = {
  className: PropTypes.string,
  edit: PropTypes.bool,
  half: PropTypes.bool,
  value: PropTypes.number,
  count: PropTypes.number,
  char: PropTypes.string,
  size: PropTypes.number,
  color1: PropTypes.string,
  color2: PropTypes.string
}

ReactStars.defaultProps = {
  edit: true,
  half: true,
  value: 0,
  count: 5,
  char: '★',
  size: 15,
  color1: 'gray',
  color2: '#ffd700',

  onChange: () => { }
};

export default ReactStars
