import * as React from 'react'
import './actionBar.css'
import CoordinateDisplay from './CoordinateDisplay/'


class ActionBar extends React.Component<any,any> {
    static cursorPosition: Object;
    render() {
        const {cursorPosition} = this.props
        return <div  className='actionBar' >
        <CoordinateDisplay lon={cursorPosition.lon} lat={cursorPosition.lat} srid={cursorPosition.srid} />
        </div>
    }
} 

export default ActionBar