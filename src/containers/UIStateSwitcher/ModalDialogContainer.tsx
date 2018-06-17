import {Dropdown} from "primereact/components/dropdown/Dropdown";
import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import ModalDialog from "../../components/Dialogs/ModalDialog";
import {setUIState, STATES} from "../../redux/actions/uiState";
import GeoserverAddLayer from '../../utils/layerFormCreater/GeoserverAddLayer'
import IFormComponent from '../../utils/layerFormCreater/IFormComponent'
import LayerAddForm from '../../utils/layerFormCreater/LayerAddForm'
var citySelectItems:Array<any> = [
    {label: 'GEOSERVER', value: 'geoserver'}
];


class ModalDialogContainer extends React.Component<any, any> implements IFormComponent {
 

    layerAddModelCreater: LayerAddForm
    constructor(props:any){
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        this.layerAddModelCreater = new GeoserverAddLayer(this)
    }

    public setForm(obj: any): boolean {
        throw new Error("Method not implemented.");
    }

    private onChange(e:object):void {
        console.log(e);
    }

    public render() {
        const {onHide} = this.props;
        return <ModalDialog visible={true} onHide={onHide} >
                        <select onChange={this.onChange} >
                            {citySelectItems.map( ({label, value}) => ( <option key={value} value={value} >{label}</option> )) }
                        </select>
                        {/*
                            // DropDown has some bugs. Its list is relative to visible area which cause it stays inside model
                        <Dropdown style={{width:'150px'}} options={citySelectItems} placeholder="Select a Layer" onChange={this.onChange} /> */}
               </ModalDialog>;
    }
}

const dispatchToState = (dispatch: Dispatch) => ({
    onHide: () => dispatch(setUIState(STATES.DEFAULT)),
});

export default connect(undefined, dispatchToState)(ModalDialogContainer);
