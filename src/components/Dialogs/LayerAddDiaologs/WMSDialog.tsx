import WMSCapabilities from "ol/format/wmscapabilities";
// import {Button} from "primereact/components/button/Button";
// import {Dialog} from "primereact/components/dialog/Dialog";
// import {InputText} from "primereact/components/inputtext/InputText";
// import {ListBox} from "primereact/components/listbox/ListBox";
import * as React from "react";
// import Dialog from "../../UI/dialog";
import { Button, Checkbox, CheckboxProps, Form, Header, Input, List, Modal } from "semantic-ui-react";
import LoadButton from "../../UI/LoadButton";
import "./wmsLayer.css";

export interface IWMSFormModel {
    serviceURL: string;
    layers: string[];
    name: string;
}

class WMSDialog extends React.Component<any, any> {

    private connectButton: LoadButton;
    constructor(props) {
        super(props);

        this.onServiceURLChange = this.onServiceURLChange.bind(this);
        this.onClickConnect = this.onClickConnect.bind(this);
        this.onLayerSelected = this.onLayerSelected.bind(this);

        this.state = {
            layers: [],
            loading: false,
            selectedLayers: [],
            serviceURL: "http://localhost:8080/geoserver/TestWS/wms",
        };
    }

    public render() {

        const {onHide, onAddLayer} = this.props;
        const {serviceURL, selectedLayers, layers, loading} = this.state;

        // const footer = <div>
        //     <Button label="ADD" icon="fa-check" disabled={selectedLayers.length === 0} onClick={onAddLayer} />
        //     <Button label="CANCEL" icon="fa-close" onClick={onHide} />
        // </div>;

        return (
                <div className="content-section implementation">
                     <Modal open={true}  >
                     <Modal.Header>ADD WNS LAYER</Modal.Header>
                        <Modal.Content >

                        <Form >

                            <Form.Field>
                                <label>First Name</label>
                                <Input
                                    placeholder="WMS Service URL"
                                    value={serviceURL}
                                    onChange={this.onServiceURLChange} />
                            </Form.Field>

                            <Form.Field>
                                <Button
                                            loading={loading}
                                            onClick={this.onClickConnect}
                                            disabled={serviceURL.length === 0 || loading}
                                            primary >Connect</Button>
                            </Form.Field>

                            <Form.Field style={{maxHeight: "150px", overflowY: "auto"}}>
                                <List selection verticalAlign="middle">
                                {layers.map((i) => (
                                    <List.Item key={i.label} >
                                        <Checkbox label={i.label} onChange={this.onLayerSelected} ></Checkbox>
                                </List.Item>
                                ))}
                                </List>
                            </Form.Field>
                            </Form>

                        </Modal.Content>
                        <Modal.Actions>
                            <Button disabled={selectedLayers.length === 0} onClick={onAddLayer} primary>ADD</Button>
                            <Button onClick={onHide}  negative>CANCEL</Button>
                        </Modal.Actions>
                    </Modal>
                </div>);
    }

    public getFormData(): IWMSFormModel {

        const {serviceURL, selectedLayers}  = this.state;
        const name: string = "Service Name " + Math.round(Math.random() * 999);

        const model: IWMSFormModel = {
            layers: selectedLayers,
            name,
            serviceURL,
        };

        return model;
    }

    private onServiceURLChange(e): void {
        const serviceURL = e.target.value;
        this.setState({serviceURL});
    }

    private onLayerSelected(e: React.FormEvent, selectData: CheckboxProps): void {

        if (selectData.checked) {
            this.setState({selectedLayers: [...this.state.selectedLayers, selectData.label] });
        } else {
            this.setState({selectedLayers: this.state.selectedLayers.filter((i) => i !== selectData.label) });
        }
    }

    private onClickConnect(e: React.MouseEvent) {

        this.setState({layers: [], loading: true});
        const {serviceURL} = this.state;
        const capabilities = "service=wms&version=1.3.0&request=GetCapabilities";
        const capabilitiesURL = [...serviceURL.split("/"), "wms"].join("/") + "?" + capabilities;

        fetch(capabilitiesURL)
        .then((response) => response.text())
        .then((text: any) => {

            const parser = new WMSCapabilities();
            const capability = parser.read(text);

            let layers = capability.Capability.Layer.Layer;

            layers = layers.map((i) => {
                return {label: i.Name, value: i.Name};
            });

            this.setState({layers, loading: false});
        }).catch(() => {
            this.setState({loading: false});
        });
    }

}

export default WMSDialog;
