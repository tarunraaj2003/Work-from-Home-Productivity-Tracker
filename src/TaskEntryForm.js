import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

const TaskEntryForm = () => {
  return (
    <Formik
      initialValues={{ task: '', timeSpent: '' }}
      validationSchema={Yup.object({
        task: Yup.string().required('Required'),
        timeSpent: Yup.number().required('Required').positive('Must be a positive number')
      })}
      onSubmit={() => {
        alert("Recorded Successfully")
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="task">Task</label> <br></br>
            <Field name="task" type="text" />
            <ErrorMessage name="task" component="div" />
          </div> <br></br>
          <div>
            <label htmlFor="timeSpent">Time Spent (hours)</label> <br></br>
            <Field name="timeSpent" type="number" />
            <ErrorMessage name="timeSpent" component="div" />
          </div> <br></br>
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default TaskEntryForm;