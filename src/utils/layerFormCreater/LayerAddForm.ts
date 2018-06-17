import IFormComponent from './IFormComponent'

class LayerAddForm {
    protected component:IFormComponent;
    protected form:Array<object>;
    public constructor(component:IFormComponent) {
        this.component = component
    }
}

export default LayerAddForm