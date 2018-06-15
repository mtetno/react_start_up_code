import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row, Button, Image} from 'react-bootstrap';
import EventHeader from './EventHeader';
import EventNav from './EventNav';
import EventCarouseContainer from '../containers/EventCarouseContainer';
import OverlayLoader from '../../../components/shared/OverlayLoader';
import './EventsDashboardMarkup.scss';


const EventsDashboardMarkup = ({
  eventDescription,
  eventDays,
  functionsData,
  updateDaySelection,
  fetching,
}) => {
  return (
  <div style={{background : "#F5F5F5" , width : '100%'}}>

    { fetching ? <OverlayLoader /> : null }

<EventHeader
  headerDescription = { eventDescription }
></EventHeader>

<EventNav
eventDays = {eventDays}
updateDaySelection = {updateDaySelection}
></EventNav>

{
  functionsData.map( (singleSession,index) =>
  <EventCarouseContainer
  key={index}
  sessions = {singleSession}
  ></EventCarouseContainer>)
}

  </div> );
};

EventsDashboardMarkup.propTypes = {
  events: PropTypes.object,
  eventDays: PropTypes.array,
  functionsData: PropTypes.array,
  updateDaySelection : PropTypes.func,
};

export default EventsDashboardMarkup;
