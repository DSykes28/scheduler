

export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(days => days.name === day);
  return filteredDays.length === 0 ? [] : filteredDays[0].appointments.map(appt => state.appointments[appt])
};

export function getInterviewersForDay(state, dayName) {
  if (dayName === null) {
    return null;
  } else {
    const day = state.days.filter( (day) => day.name === dayName)[0]
    if(day === undefined) {
      return [];
    } 
    const interviewersIds = day.interviewers
    return interviewersIds.map(id => state.interviewers[id])
  }
};

export function getInterview(state, interview) {
  if(!interview) {
    return null;
  } else {
    const newInterview = {...interview}
    newInterview.interviewer = state.interviewers[newInterview.interviewer];
    
    return newInterview;
  }
};