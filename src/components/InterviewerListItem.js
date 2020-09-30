import React from 'react';
import classnames from 'classnames';
import "components/InterviewerListItem.scss";

export default function InterviewerListItem (props) {

  console.log(props);
   const InterviewerClass = classnames('interviewers__item', {
     "interviewers__item--selected": props.selected
   });

  return(

    <li className={InterviewerClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
        onClick={props.setInterviewer}
    />
  {props.selected && props.name}
</li>

)

};