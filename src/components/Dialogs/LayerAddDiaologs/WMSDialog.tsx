import * as React from "react";
import {InputText} from 'primereact/components/inputtext/InputText';
import "./wmsLayer.css"
import {Button} from "primereact/components/button/Button";
import WMSCapabilities from "ol/format/wmscapabilities"
import {ListBox} from 'primereact/components/listbox/ListBox';
import {Dialog} from "primereact/components/dialog/Dialog";


export type WMSFormModel = {
    serviceURL: string,
    layers: Array<string>,
    name: string
}

class WMSDialog extends React.Component<any, any> {

    constructor(props) {
        super(props);
        
        this.onServiceURLChange = this.onServiceURLChange.bind(this)
        this.onClickConnect = this.onClickConnect.bind(this)
        this.onLayerSelected = this.onLayerSelected.bind(this)

        this.state = {
            serviceURL:'http://localhost:8080/geoserver/TestWS/wms',
            layers: [],
            selectedLayers: []
        }
    }

    public getFormData () :WMSFormModel {

        const {serviceURL, layers}  = this.state;
        let name:string = "Service Name " + Math.round(Math.random() * 999);

        let model: WMSFormModel = {
            serviceURL,
            layers,
            name
        }

        return model
    }

    private onServiceURLChange(e) :void{
        const serviceURL = e.target.value
        this.setState({serviceURL})
    }

    private onLayerSelected(e) :void {
        this.setState({selectedLayers: e.value})
    }

    private onClickConnect() {
        const {serviceURL} = this.state
        let capabilities = "service=wms&version=1.3.0&request=GetCapabilities"

        const capabilitiesURL = [...serviceURL.split("/"), "wms"].join('/') + "?" + capabilities

        fetch(capabilitiesURL)
        .then(response => response.text())
        .then((text:any) => {
            const parser = new WMSCapabilities();
            const capability = parser.read(text);
            
            let layers = capability.Capability.Layer.Layer
            
            layers = layers.map(i => {
                return {label: i.Name, value: i.Name}
            })
                        
            this.setState({layers})
        })
    }

    public render() {

        const {onHide, onAddLayer} = this.props;
        let {serviceURL,selectedLayers, layers} = this.state

        const footer = <div>
            <Button label="ADD" icon="fa-check" disabled={selectedLayers.length === 0} onClick={onAddLayer} />
            <Button label="CANCEL" icon="fa-close" onClick={onHide} />
        </div>;


        return (
                <div className="content-section implementation">
                    <Dialog header="Layer Add"
                            visible={true}
                            width="450px"
                            modal={true}
                            footer={footer}
                            onHide={onHide}>
                        <div className="wmsInputContainer">
                        <div >
                            <span className="ui-float-label">
                                <InputText className="service-url-input" name="float-input" type="text" onChange={this.onServiceURLChange} value={serviceURL} />
                                <label htmlFor="float-input" >WMS Service URL</label>
                            </span>
                        </div>
                            <div>
                                <Button label="Connect" disabled={serviceURL.length === 0} onClick={this.onClickConnect} />
                            </div>
                            <div>
                                <ListBox style={{width:"100%", minHeight:"50px"}} options={layers} multiple={true} value={selectedLayers} onChange={this.onLayerSelected} />
                            </div>
                        </div>

                    </Dialog>
                </div>)
    }
}


export default WMSDialog;