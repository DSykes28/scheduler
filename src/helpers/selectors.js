

function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(days => days.name === day);
  return filteredDays.length === 0 ? [] : filteredDays[0].appointments.map(appt => state.appointments[appt])
};

exports.getAppointmentsForDay = getAppointmentsForDay;
  

function getInterviewersForDay(state, dayName) {

if (dayName === null) {
  return null;
} else {  
    const day = state.days.filter( (day) => day.name === dayName)[0]
    const interviewersIds = day.interviewers
    return interviewersIds.map(id => state.interviewers[id])
  }
};

exports.getInterviewersForDay = getInterviewersForDay;