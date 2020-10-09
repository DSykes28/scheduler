import React from 'react';

import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import Form from 'components/Appointment/Form';
import Status from 'components/Appointment/Status';
import useVisualMode from '../../hooks/useVisualMode';
import Confirm from 'components/Appointment/Confirm';


const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING"
const CONFIRM = "CONFIRM"
const EDIT = "EDIT"

export default function Appointment (props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
  };

  function deleteInterview() {
    transition(DELETING)
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
  };

  return <article className="appointment">
  {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
  {mode === CREATE && (
    <Form interviewers={props.interviewers}
    student={props.studentName}
    interviewer={props.interviewer}
    onCancel={() => back()}
    onSave={save}
    />
  )}
  {mode === SHOW && (
    <Show
      studentName={props.interview ? props.interview.student : ""}
      interviewer={props.interviewer}
      onEdit={() => transition(EDIT)}
      onDelete={() => transition(CONFIRM)}
    />
  )}
  {mode === EDIT && (
    <Form interviewers={props.interviewers}
      student={props.studentName}
      interviewer={props.interviewer}
      onCancel={() => back()}
      onSave={save}
    />
  )}
  {mode === SAVING && (<Status message='...Saving' /> )}
  {mode === DELETING && (<Status message='...Deleting' />)}
  {mode === CONFIRM && (<Confirm onConfirm={deleteInterview} onCancel={() => back()} />)}
  </article>
}

