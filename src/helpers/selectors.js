

function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(days => days.name === day);
  return filteredDays.length === 0 ? [] : filteredDays[0].appointments.map(appt => state.appointments[appt])
};

exports.getAppointmentsForDay = getAppointmentsForDay;
  

function getInterview(state, interview) {
  if (interview === null) { 
    return null;
  } else {
    for (const interviewer in state.interviewers) {
      if (interview.interviewer === state.interviewers[interviewer].id) {
        return ({"student": interview.student,
                 "interviewer": {
                 "id": interview.interviewer,
                 "name": state.interviewers[interviewer].name,
                 "avatar": state.interviewers[interviewer].avatar
                 }
                })
      }
    }
  }
};

exports.getInterview = getInterview;