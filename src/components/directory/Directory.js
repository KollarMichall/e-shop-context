import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDictionarySections } from '../../redux/directory/directory.selector'
import MenuItem from '../menu-item/MenuItem'
import './directory.styles.scss'



const Directory = ({ sections }) => {
    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    sections : selectDictionarySections
})
export default connect(mapStateToProps)(Directory)
