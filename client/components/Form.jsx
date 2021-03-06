import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';

const PreferenceInput = (props) => {
  const { handleSubmit, pristine, reset } = props
  return (
    <form className='form-group' onSubmit={handleSubmit}>
      <div>
        <label>
          <h4>Help us help you! Tell us what you like:</h4>
        </label>
        <div className='form-input'>
          <Field className='form-control' name="name" component="input" type="text" placeholder="Example: Chinese, Dive Bars, etc."/>
        </div>
      </div>
      <div>
        <Button type="submit" disabled={pristine}>Submit</Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'prefInput'  // a unique identifier for this form
})(PreferenceInput)

