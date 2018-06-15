import React from 'react';
import './EventsDashboardMarkup.scss';
import Slider from "react-slick";
import EventCarouselItem from './EventCarouselItem';
import PropTypes from 'prop-types';

const CarousePreviousArrow = ({
nextHandler,
}) => {

  return (
    <div>
  <button type="button" data-role="none" className="left carousel-control slick-arrow customPrevious" onClick={nextHandler}  > {">"} </button>
</div>
  );
};



export default CarousePreviousArrow;
