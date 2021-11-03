import React, { useContext } from 'react'
import DirectoryContext from '../../contexts/directory/DirectoryContext'
import MenuItem from '../menu-item/MenuItem'
import './directory.styles.scss'



const Directory = () => {
    const sections = useContext(DirectoryContext)
    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    )
}

export default Directory
