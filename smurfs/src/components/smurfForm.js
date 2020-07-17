import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions";

const initialFormValues = {
  name: '',
  age: '',
  height: '',
};

const SmurfForm = (props) => {
  const [ formValues, setFormValues ] = useState(initialFormValues);


  const handleChanges = event =>{
    const { name, value } = event.target
    setFormValues({...formValues, [name]: value})
    console.log(formValues)
  };
  const onSubmit = (event) => {
    const newSmurf = {...formValues}
    newSmurf.age = parseInt(newSmurf.age)
    newSmurf.height = `${newSmurf.height}cm`
    event.preventDefault()
    props.postSmurf(formValues)
    setFormValues(initialFormValues)

  }
  
  return(
    <>
      <h2>Add a Smurf</h2>
      <form onSubmit={onSubmit}>
        <label>Name:
          <input 
            name='name'
            value={formValues.name}
            onChange={handleChanges}
          />
        </label>
        <label>Age:
          <input 
            name='age'
            value={formValues.age}
            onChange={handleChanges}
          />
        </label>
        <label>Height:
          <input 
            name='height'
            value={formValues.height}
            onChange={handleChanges}
          />
        in cm</label>
        <button>Add Smurf</button>
      </form>
    </>
  )
};

const mapStateToProps = state => {
  return {}
}
export default connect(
  mapStateToProps,
  { postSmurf }
)(SmurfForm);