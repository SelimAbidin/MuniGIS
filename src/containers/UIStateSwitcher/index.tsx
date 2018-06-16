import * as React from 'react'
import {connect} from 'react-redux'
import {STATES, setUIState} from '../../redux/actions/uiState'
import ModalDialogContainer from './ModalDialogContainer';


interface UIStateSwitcherProps {
    UIState: String;
}

class UIStateSwitcher extends React.Component<UIStateSwitcherProps, any> {

    render() {
        const {UIState} = this.props
        if(UIState ===  STATES.DEFAULT) {
            return null
        } else {
            return <ModalDialogContainer />
        }
    }
}

const mapToProps = (state:any) => ({
    UIState: state.UIState
})

const dispatchToState = (dispatch:Function) => ({
    // onHide: (e:React.MouseEventHandler) => dispatch(setUIState(STATES.DEFAULT))
})


export default connect(mapToProps,dispatchToState)(UIStateSwitcher)