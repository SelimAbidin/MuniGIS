import * as React from "react";
import {connect} from "react-redux";
import {STATES} from "../../redux/actions/uiState";
import ModalDialogContainer from "./WMSDialogContainer";

class UIStateSwitcher extends React.Component<any, any> {

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

export default connect(mapToProps, undefined)(UIStateSwitcher);
