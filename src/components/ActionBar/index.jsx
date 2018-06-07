import React from 'react'
import './actionBar.css'
import PropTypes from 'prop-types'
import CoordinateDisplay from './CoordinateDisplay/index.jsx'

let ActionBar = ({cursorPosition}) => {
    return <div  className='actionBar' >
    <CoordinateDisplay lon={cursorPosition.lon} lat={cursorPosition.lat} srid={cursorPosition.srid} />
    </div>
}

ActionBar.propTypes = {
    cursorPosition: PropTypes.object.isRequired
}

export default ActionBar