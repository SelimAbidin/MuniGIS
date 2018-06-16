import * as React from 'react'
import {connect} from 'react-redux'
import ActionBar from '../../components/ActionBar/index'

const ActionBarContainer = ({cursorPosition}:{cursorPosition:any}) => (
    <ActionBar cursorPosition={cursorPosition} />
)

const mapToProps = (state:any) => ({
    cursorPosition: state.cursorPosition
})

export default connect(mapToProps)(ActionBarContainer)