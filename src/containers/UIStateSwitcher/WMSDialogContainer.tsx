import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {STATES, setUIState} from "../../redux/actions/uiState";
import {} from '../../'

import './style.css'
import WMSDialog, {WMSFormModel} from "../../components/Dialogs/LayerAddDiaologs/WMSDialog";
import { createWMSService, ServiceModel, ServiceAction } from "../../redux/actions/service";



export class WMSDialogContainer extends React.Component<any, any> {

    private _wsmDialog: WMSDialog
    constructor(props: any) {
        super(props);
        this.onAddLayer = this.onAddLayer.bind(this)
    }

    onAddLayer() {
        const {onAddLayer} = this.props
        const wmsDialog = this._wsmDialog
        let formData:WMSFormModel = wmsDialog.getFormData()
        const {name, serviceURL, layers} = formData
        let serviceModel:ServiceAction = createWMSService(name, serviceURL, layers)
        onAddLayer(serviceModel)
    }

    public render() {
        const {onHide} = this.props;
        return <WMSDialog ref={r => this._wsmDialog = r } onHide={onHide} onAddLayer={this.onAddLayer} />;
    }

}

const dispatchToState = (dispatch: Dispatch) => ({
    onAddLayer: (service:ServiceAction) => {
        dispatch(service as any)
        dispatch(setUIState(STATES.DEFAULT))
    },
    onHide: e => dispatch(setUIState(STATES.DEFAULT))
});

export default connect(undefined, dispatchToState)(WMSDialogContainer);
