import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {Button, Checkbox, CheckboxProps, Form, Input, InputOnChangeData, List, Modal, Radio} from "semantic-ui-react";
import { GEOM_TYPES } from "../../data/Geometry";
import { createVectorLayer, IServiceAction } from "../../redux/actions/service";
import { setUIState, STATES } from "../../redux/actions/uiState";

class VectorLayerDialog extends React.Component<any, any> {

    public state = {
        geomType: GEOM_TYPES.POINT,
        serviceName: "",
    };
    constructor(props) {
        super(props);
        this.onLayerNameUpdate = this.onLayerNameUpdate.bind(this);
        this.onChangeGeomType = this.onChangeGeomType.bind(this);
        this.onAddLayer = this.onAddLayer.bind(this);
    }

    public onAddLayer(e: React.MouseEvent) {
        const {onAddLayer} = this.props;
        const {serviceName, geomType} = this.state;
        const action: IServiceAction = createVectorLayer(serviceName, geomType);
        onAddLayer(action);
    }

    public render() {

        const { serviceName, geomType } = this.state;
        const {onHide} = this.props;
        return ( <Modal open={true}  >
            <Modal.Header>ADD WNS LAYER</Modal.Header>
               <Modal.Content >

                      <Form  >
                        <Form.Group widths="equal" >
                            <Form.Input
                                placeholder="Layer Name"
                                value={serviceName}
                                onChange={this.onLayerNameUpdate} />
                        </Form.Group>

                        <Form.Group >
                            <Form.Radio label="Point" name="geometryType" value={GEOM_TYPES.POINT} checked={geomType === GEOM_TYPES.POINT} onChange={this.onChangeGeomType} />
                            <Form.Radio label="Line" name="geometryType" value={GEOM_TYPES.LINE} checked={geomType === GEOM_TYPES.LINE} onChange={this.onChangeGeomType} />
                            <Form.Radio label="Polygon" name="geometryType" value={GEOM_TYPES.POLYGON} checked={geomType === GEOM_TYPES.POLYGON} onChange={this.onChangeGeomType} />
                        </Form.Group>

                    </Form>

               </Modal.Content>
               <Modal.Actions>
                   <Button onClick={this.onAddLayer}  positive>ADD</Button>
                   <Button onClick={onHide}  negative>CANCEL</Button>
               </Modal.Actions>
           </Modal>);
    }

    private onLayerNameUpdate(event: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) {
        this.setState({serviceName: data.value});
    }

    private onChangeGeomType(event: React.SyntheticEvent<HTMLInputElement>, data: CheckboxProps) {
        this.setState({geomType: data.value});
    }

}

const dispatchToState = (dispatch: Dispatch) => ({
    onAddLayer: (service: IServiceAction) => {
        dispatch(service as any);
        dispatch(setUIState(STATES.DEFAULT));
    },
    onHide: (e) => dispatch(setUIState(STATES.DEFAULT)),
});

export default connect(undefined, dispatchToState)(VectorLayerDialog);
