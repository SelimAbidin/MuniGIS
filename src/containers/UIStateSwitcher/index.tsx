import * as React from "react";
import {connect} from "react-redux";
import {STATES} from "../../redux/actions/uiState";
import WMSDialogContainer from "./WMSDialogContainer";

class UIStateSwitcher extends React.Component<any, any> {

    public render() {
        const {UIState} = this.props;
        if (UIState ===  STATES.DEFAULT) {
            return null;
        } else if (UIState === STATES.ADD_WMS_SERVICE) {
            return <WMSDialogContainer />;
        } else if (UIState === STATES.ADD_VECTOR_SERVICE) {
            // return <WMSDialogContainer />;
            alert("ADD_VECTOR_SERVICE Not implemented");
            return null;
        }
    }
}

const mapToProps = (state: any) => ({
    UIState: state.UIState,
});

export default connect(mapToProps, undefined)(UIStateSwitcher);
