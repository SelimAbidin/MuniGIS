import React from 'react'
import {connect} from 'react-redux'
import ActionBar from '../../components/ActionBar/index'

const ActionBarContainer = ({cursorPosition}) => (
    <ActionBar cursorPosition={cursorPosition} />
)


const mapToProps = state => ({
    cursorPosition: state.cursorPosition
})

export default connect(mapToProps)(ActionBarContainer)