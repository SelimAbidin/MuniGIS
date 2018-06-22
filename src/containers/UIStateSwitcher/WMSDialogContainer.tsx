import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {} from "../../";
import {setUIState, STATES} from "../../redux/actions/uiState";

import WMSDialog, {IWMSFormModel} from "../../components/Dialogs/LayerAddDiaologs/WMSDialog";
import { createWMSService, IServiceAction, IServiceModel } from "../../redux/actions/service";
import "./style.css";

export class WMSDialogContainer extends React.Component<any, any> {

    private wsmDialog: WMSDialog;
    constructor(props: any) {
        super(props);
        this.onAddLayer = this.onAddLayer.bind(this);
    }

    public onAddLayer() {
        const {onAddLayer} = this.props;
        const wmsDialog = this.wsmDialog;
        const formData: IWMSFormModel = wmsDialog.getFormData();
        const {name, serviceURL, layers} = formData;
        const serviceModel: IServiceAction = createWMSService(name, serviceURL, layers);
        onAddLayer(serviceModel);
    }

    public render() {
        const {onHide} = this.props;
        return <WMSDialog ref={(r) => this.wsmDialog = r } onHide={onHide} onAddLayer={this.onAddLayer} />;
    }

}

const dispatchToState = (dispatch: Dispatch) => ({
    onAddLayer: (service: IServiceAction) => {
        dispatch(service as any);
        dispatch(setUIState(STATES.DEFAULT));
    },
    onHide: (e) => dispatch(setUIState(STATES.DEFAULT)),
});

export default connect(undefined, dispatchToState)(WMSDialogContainer);
