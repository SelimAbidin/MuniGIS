import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import ModalDialog from "../../components/Dialogs/ModalDialog";
import {setUIState, STATES} from "../../redux/actions/uiState";
import GeoserverAddLayer from "../../utils/layerFormCreater/GeoserverAddLayer";
import IFormComponent from "../../utils/layerFormCreater/IFormComponent";
import LayerAddForm from "../../utils/layerFormCreater/LayerAddForm";
import { COMPONENT_TYPES } from "../../utils/dynamicFormComponents/IComponentModel";

import './style.css'

const citySelectItems: any[] = [
    {label: "GEOSERVER", value: "geoserver"},
];



function wrapLine(component) {

    return <div>
            {component}
            </div>
}



export class ModalDialogContainer extends React.Component<any, any> implements IFormComponent {

    public layerAddModelCreater: LayerAddForm;
    constructor(props: any) {
        super(props);
    
        this.state = {
            form: []
        }
        this.onChange = this.onChange.bind(this);
    }

    public componentDidMount() {
        this.layerAddModelCreater = new GeoserverAddLayer(this);
    }

    public setForm(form: Array<object>): boolean {
        
        if(form !== undefined) {
            this.setState({form})
            return true
        }

        return false
    }

    public render() {
        const {onHide} = this.props;
        const {form} = this.state;
        
        return <ModalDialog className="layerAdd" visible={true} onHide={onHide} >

                        {wrapLine(
                         <select id="deneme_1" onChange={this.onChange} >
                             {
                                 citySelectItems.map( ({label, value}) => (
                                     <option key={value} value={value} >{label}</option> ),
                                 )
                             }
                         </select>
                        )}
                       
                        {
                            form.map(i => {
                                
                                const {type,name} = i
                                if(type === COMPONENT_TYPES.INPUT) {
                                    return <input type="text" key={name} name={name} />
                                }
                                
                                return <span />
                            })
                        }
               </ModalDialog>;
    }

    private onChange(e: object): void {
        // console.log(e);
    }
}

const dispatchToState = (dispatch: Dispatch) => ({
    onHide: () => dispatch(setUIState(STATES.DEFAULT)),
});

export default connect(undefined, dispatchToState)(ModalDialogContainer);
