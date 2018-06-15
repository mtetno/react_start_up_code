import React from 'react';
import '../components/EventsDashboardMarkup.scss';
import Slider from "react-slick";
import EventCarouselItem from '../components/EventCarouselItem';
import CarousePreviousArrow from '../components/CarousePreviousArrow';
import CarouseNextArrow from '../components/CarouseNextArrow';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';


class EventCarouseContainer extends React.Component {



      constructor (props) {
        super(props);

      }


  render () {

    var settings = {
          dots: false,
          infinite: true,
          speed: 100,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows : true,
          nextArrow: <CarouseNextArrow nextHandler={this._sliderNext} />,
          prevArrow: <CarousePreviousArrow  previousHandler={this._sliderPrevious} />
        };

    return (
      <div className="container" style={{background : "#F5F5F5" , width : '80%' }}>
      <Slider  ref={slider => (this.slider = slider)} {...settings} style={{marginLeft:20}}>
      {this.props.sessions.map((data,index)=><div><EventCarouselItem  key={index} sessionData={data} ></EventCarouselItem></div> )}
      </Slider>
      </div>
    );
  }


  @autobind
  _sliderNext(){
    this.slider.slickNext();
  }

  @autobind
  _sliderPrevious(){
    this.slider.slickPrev();
  }

}



EventCarouseContainer.propTypes = {
  sessions: PropTypes.array,
};


export default EventCarouseContainer;
