import {COMPONENT_TYPES, IComponentModel} from "../dynamicFormComponents/IComponentModel";
import IFormComponent from "./IFormComponent";
import LayerAddForm from "./LayerAddForm";

class GeoserverAddLayer extends LayerAddForm {

    constructor(component: IFormComponent) {
        super(component);

        const firstComponent: IComponentModel = {type: COMPONENT_TYPES.INPUT};
        component.setForm([firstComponent]);
    }

}

export default GeoserverAddLayer;
