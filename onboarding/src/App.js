import React, { useState, useEffect } from 'react'
import Form from './Form'
import User from './User'
import schema from './validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'



///// Initial States /////
const initialFormValues = {
  ///// TEXT INPUTS /////
  first_name: '',
  last_name:'',
  email: '',
  password: '',
  ///// CHECKBOXES /////
  term: false,
}

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
}

const initialUsers = [];
const initialDisabled = true;


export default function App() {

///// States /////
  const [users, setUsers] = useState(initialUsers)          // array of user objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean


///// Helpers /////
const getUsers = () => {
  axios.get('https://reqres.in/api/users')
    .then(res => {
      setUsers(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })
}

const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([...users, res.data]);
      setFormValues(initialFormValues);
    })
    .catch(err => {
      
      console.log(err)
    })
}






const validate = (name, value ) => {
  yup
    .reach(schema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: ""

      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })
}

//////////////// EVENT HANDLERS ////////////////

  const inputChange = (name, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      term: formValues.term

    }
    // 🔥 STEP 8- POST NEW FRIEND USING HELPER
    postNewUser(newUser);
  }



  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])










  return (
    <div className='container'>
      <header><h1>Friends App</h1></header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      
      {
        users.map((user, idx) => {
          return (
            <User key={idx} details={user} />
          )
        })
      }


    </div>
  )

}

