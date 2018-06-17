import LayerAddForm from './LayerAddForm'
import IFormComponent from './IFormComponent'
import {IComponentModel, COMPONENT_TYPES} from '../dynamicFormComponents/IComponentModel'

class GeoserverAddLayer extends LayerAddForm {
    
    constructor(component:IFormComponent) {
        super(component);

        const firstComponent: IComponentModel = {type: COMPONENT_TYPES.INPUT}
        component.setForm([firstComponent])
    }
    
}

export default GeoserverAddLayer