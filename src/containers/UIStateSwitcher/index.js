import React from 'react'
import {connect} from 'react-redux'
import {STATES, setUIState} from '../../redux/actions/uiState'
import ModalDialogContainer from './ModalDialogContainer';
class UIStateSwitcher extends React.Component {

    render() {
        const {UIState} = this.props
        console.log('UIState' , UIState, UIState ===  STATES.DEFAULT);
        
        if(UIState ===  STATES.DEFAULT) {
            console.log('retuned null');
            
            return null
        } else {
            return <ModalDialogContainer />
        }
    }
}

const mapToProps = state => ({
    UIState: state.UIState
})

const dispatchToState = dispatch => ({
    onHide: e => dispatch(setUIState(STATES.DEFAULT))
})


const UIS = connect(mapToProps,dispatchToState)(UIStateSwitcher)
export default UIS