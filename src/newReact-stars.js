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

const ReactStars = ({
  className,
  edit = true,
  half = true,
  value = 0,
  count = 11,
  char = '★',
  size = 30,
  color1 = 'gray',
  color2 = '#ffd700',
  onChange = () => {},
  }) => {

  const [uniqueness] = useState((Math.random() + '').replace('.', ''));
  const [stars, setStars] = useState([]);
  const [halfStar, setHalfStar] = useState({
    at: Math.floor(value),
    hidden: half && value % 1 < 0.5,
  });

  const config ={
    count,
    size,
    char,
    color1,
    color2,
    half,
    edit,
  };

  useEffect(() => {
    setStars(getStars(value));
  }, [value]);

  const getRate = () => {
    return half ? Math.floor(value) : Math.round(value);
 
  }

  const getStars = (activeCount) => {
    if (typeof activeCount === 'undefined') {
      activeCount = getRate();
    }
    return Array.from({ length: count }, (_, i) => ({
      active: i <= activeCount - 1,
    }));
  };

  const mouseOver = () => {
    
  };

  const mouseLeave = () => {
  };

  const moreThanHalf = (event, size) => {
    const mouseAt = Math.round(Math.abs(event.clientX - event.target.getBoundingClientRect().left));
    return mouseAt > size / 2;
  };

  const clicked =(event) => {
    
    if (!edit) return;
    let index = Number(event.target.getAttribute('data-index'));
    let newValue;
    if (half){
      const isAtHalf = moreThanHalf(event, size);
      setHalfStar((prevState) => ({
        ...prevState,
        hidden: isAtHalf,
        at: isAtHalf ? index + 1 : index,
      }));
      newValue = isAtHalf ? index + 1 : index + 0.5;
    } else {
      newValue = index + 1;
    }

    setStars(getStars(index));
    onChange(newValue);
  };

  const renderHalfStarStyleElement = () => {
    return (
      <style
      dangerouslySetInnerHTML={{
        __html: getHalfStarStyles(config.color2, uniqueness),
      }}      
      ></style>
    )
  }

  const renderStars = () => {

    return stars.map((star, i) => {

      let starClass = '';
      if (half && !halfStar.hidden && halfStar.at === i) {
        starClass = `react-stars-${uniqueness}`;
      }

      const style = {
        ...defaultStyles,
        color: star.active ? color2 : color1,
        cursor: edit ? 'pointer' : 'default',
        fontSize: `${size}px`,
      };
  

      return (
        <span
          className={starClass}
          style={style}
          key={i}
          data-index={i}
          data-forhalf={char}
          onMouseOver={mouseOver}
          onMouseMove={mouseOver}
          onMouseLeave={mouseLeave}
          onClick={clicked}
        >
          
          {char}
        </span>
      );
    });
  };

  
  return(
    <div className={className} style={parentStyles}>
      
      uniqueness = {uniqueness};
      <br/>
      {half && renderHalfStarStyleElement()}
      {renderStars()} 
      
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



export default ReactStars
