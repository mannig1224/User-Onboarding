import React from 'react'

export default function Form(props){
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    
    const onChange = evt => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
    }


    return ( 
        
        <form className='form container' onSubmit={onSubmit}>
        <div className='form-group submit'>
            <h2>Add a User</h2>

            {/* 🔥 DISABLE THE BUTTON */}
            <button disabled={disabled} className='submitBtn'>submit</button>

            <div className='errors'>
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div>
    

            
        </div>

        <div className='form-group inputs'>
            <h4>General information</h4>

            {/* ////////// TEXT INPUTS ////////// */}
            {/* ////////// TEXT INPUTS ////////// */}
            {/* ////////// TEXT INPUTS ////////// */}
            <label>FirstName&nbsp;
            <input
                value={values.first_name}
                onChange={onChange}
                name='first_name'
                type='text'
            />
            </label>
            <label>LastName&nbsp;
            <input
                value={values.last_name}
                onChange={onChange}
                name='last_name'
                type='text'
            />
            </label>


            <label>Email
            <input
                value={values.email}
                onChange={onChange}
                name='email'
                type='text'
            />
            </label>

            <label>password
            <input
                value={values.password}
                onChange={onChange}
                name='password'
                type='text'
            />
            </label>

        </div>

        <div className='form-group checkboxes'>
            
            {/* ////////// CHECKBOXES ////////// */}
            <label>Terms of Services
                <input 
                    type='checkbox'
                    name='term'
                    checked={values.term}
                    onChange={onChange}                    
                />

                
            </label>

            
        </div>
    </form>
        

    )

}