import React from 'react';
import './EventsDashboardMarkup.scss';


const EventHeader = ({
  headerDescription,
}) => {
  return (

    <div className="container-fluid bg-white filtern">
         <div className="col-md-1 ghost"></div>
         <div className="col-md-10 col-xs-12 filtern--inside">
             <h1>{headerDescription}</h1>
         </div>
         <div className="col-md-1 ghost"></div>
     </div>


  );
};

export default EventHeader;
