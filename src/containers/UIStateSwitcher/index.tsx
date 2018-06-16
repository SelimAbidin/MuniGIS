import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {setUIState, STATES} from "../../redux/actions/uiState";
import ModalDialogContainer from "./ModalDialogContainer";

interface IUIStateSwitcherProps {
    UIState: string;
}

class UIStateSwitcher extends React.Component<IUIStateSwitcherProps, any> {

    public render() {
        const {UIState} = this.props;
        if (UIState ===  STATES.DEFAULT) {
            return null;
        } else {
            return <ModalDialogContainer />;
        }
    }
}

const mapToProps = (state: any) => ({
    UIState: state.UIState,
});

const dispatchToState = (dispatch: Dispatch ) => ({
    // onHide: (e:React.MouseEventHandler) => dispatch(setUIState(STATES.DEFAULT))
});

export default connect(mapToProps, dispatchToState)(UIStateSwitcher);
