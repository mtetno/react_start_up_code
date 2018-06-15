import React from 'react';
import './EventsDashboardMarkup.scss';
import Slider from "react-slick";

import EventCarouselItem from './EventCarouselItem';
import PropTypes from 'prop-types';

 
const CarousePreviousArrow = ({
previousHandler,
}) => {

  return (
    <div>
  <button type="button" data-role="none" className="left carousel-control slick-arrow" onClick={previousHandler} > {"<"} </button>
  </div>
  );
};



export default CarousePreviousArrow;
