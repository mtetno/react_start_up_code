import React from 'react';
import './EventsDashboardMarkup.scss';
import PropTypes from 'prop-types';

const EventNav = ({
  eventDays,
  updateDaySelection
}) => {
  return (
    <div className="container-fluid">
       <nav className="navbar navbar-default">
           <div className="col-md-1"></div>
           <div className="col-md-10">
               <div className="navbar-header col-xs-6">
                   <a className="navbar-brand" href="#">Show Day</a>
               </div>
               <ul className="nav navbar-nav">
{
  eventDays.map((eventDay,index)=>
                   <li onClick={ () => updateDaySelection(index)} key={index}> <a href="#">{eventDay}</a   ></li>
  )
}
               </ul>


           </div>
           <div className="col-md-1"></div>
       </nav>
   </div>
  );
};

EventNav.propTypes = {
  eventDays: PropTypes.array,
  updateDaySelection : PropTypes.func,
};

export default EventNav;
