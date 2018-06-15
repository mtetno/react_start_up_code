import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { browserHistory } from 'react-router';
import actions from '../modules/actions';
import EventsDashboardMarkup from '../components/EventsDashboardMarkup';


class EventsDashboard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      fetching: false,
      events : {
        eventDescription : "",
        eventDays : [],
        functionsData : [],
        selectedDay : -1,
      }
    };
  }


  componentDidMount () {
    // show loader for api call
    this.setState({
      fetching : true,
    });

    this.props.actions.getEvents().then((response) => {
      this.setState({
        fetching : false ,
        events : {
        ...this.state.events,
        eventDescription : this.props.appState.events.eventDescription,
        eventDays : this._calcaulateEventDays(),
        functionsData : this._generateSessionData(),
        }});
    });

  }

  render () {
    return (
      <EventsDashboardMarkup
      eventDescription={ this.state.events.eventDescription }
      eventDays = {this.state.events.eventDays}
      functionsData = {this.state.events.functionsData}
      updateDaySelection = {this._updateDaySelection}
      fetching = {this.state.fetching}
       />
    );
  }

  _extractDayFromDate(inputDate){
    const date = new Date(Date.parse(inputDate));
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
  }

 _calcaulateEventDays(){
   this.setState({
      events : {
        ...this.state.events,
        selectedDay : 0,
      }
   });
const daysArray = this.props.appState.events.days;
let result=[];
daysArray.map((eachDay)=>{
  result.push(this._extractDayFromDate(eachDay.startDate));
});
return result;
 }

_generateSessionData(){
  let resultFunctions = [];
  const selectedDay = this.state.events.selectedDay;
  console.log("selectedDay"+selectedDay);
  if(selectedDay >= 0){
    const functionsArray = this.props.appState.events.days[selectedDay].functions;
        console.log("functionsArray");
    console.log(functionsArray);
functionsArray.map((singleFunction)=>{
  let sessionsMetaData = [];
  if(singleFunction['sessions'] && singleFunction['sessions'].length> 0){
    singleFunction['sessions'].map((sessionData) => {
      let sessionObj = {};
      sessionObj['time'] = this.getTimeFromDateObject(sessionData['startDate']) +" - "+this.getTimeFromDateObject(sessionData['endDate']);
      sessionObj['title'] = sessionData['category'];
      sessionObj['speakersName'] = sessionData['description'];
      sessionObj['speakersLength'] = sessionData['speakers'].length +  " speakers";
      sessionObj['space'] = sessionData['space'];
      sessionsMetaData.push(sessionObj);
    });
    resultFunctions.push(sessionsMetaData);
  }
});
  }
  console.log("inside _generateSessionData");
  console.log(resultFunctions);
return resultFunctions;
}

@autobind
_updateDaySelection(dayIndex){
  console.log("inside updatedayselection"+dayIndex);
  this.setState({
     events : {
       ...this.state.events,
       selectedDay : dayIndex,
     }
  },()=>{
    this.setState({
       events : {
         ...this.state.events,
        functionsData : this._generateSessionData(),
       }
    });
  });

}

getTimeFromDateObject(inputDate){
      const date = new Date(Date.parse(inputDate)),
       hours = date.getHours(),
       minutes = date.getMinutes();
       return hours+"."+minutes;
}


}

EventsDashboard.propTypes = {
  actions: PropTypes.shape({
  }),
  appState: PropTypes.object,
};

const mapStateToProps = (state) => ({
    appState: state.dashboard,
  }),
  mapDispatchToProps = (dispatch) => {
    const
      { getEvents } = actions;

    return {
      actions: bindActionCreators({ getEvents}, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(EventsDashboard);
