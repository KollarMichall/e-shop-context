import React from 'react'
import { CustomeButtonContainer } from './CustomeButtonStyles'

const CustomButton = ({ children, ...props}) => {
    return (
        <CustomeButtonContainer {...props}>
            {children}
        </CustomeButtonContainer>
    )
}

export default CustomButton
