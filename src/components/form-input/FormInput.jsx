import React from 'react'
import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps}) => {
    
    return (
        <div className="group">
            <input className='form-input' onChange={handleChange} {...otherProps} />            
            { label ? (
                <label className={`${ !otherProps.value ? 'shrink' : ''} form-input-label`}>{label}</label>// Cannot read property 'length' of undefined a use !
            ): null}
        </div>
    )
}

export default FormInput
