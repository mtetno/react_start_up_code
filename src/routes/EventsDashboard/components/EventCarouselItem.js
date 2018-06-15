import React from 'react';
import './EventsDashboardMarkup.scss';
import Slider from "react-slick";
import PropTypes from 'prop-types';

const EventCarouselItem = ({
  sessionData,
}) => {



  return (
<div>
    <div id="DIV_1">
          <div id="DIV_2">
            <span id="SPAN_3">{sessionData.time}<br id="BR_4" />{sessionData.title}</span>
            <h3 id="H3_5"  className="speakersName">
              <a  tabIndex={0} id="A_6">{sessionData.speakersName}</a>
            </h3>
            <p id="P_7">
              <a href="#" tabIndex={0} id="A_8" ><span id="SPAN_9" /> {sessionData.speakersLength}</a>
            </p>
            <p id="P_10">
              <span id="SPAN_13">{sessionData.space}</span>
            </p>
          </div>
        </div>
        </div>
  );
};

EventCarouselItem.propTypes = {
  sessionData: PropTypes.object,
};

export default EventCarouselItem;
