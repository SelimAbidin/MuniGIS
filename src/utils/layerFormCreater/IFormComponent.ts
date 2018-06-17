import { IComponentModel } from "../dynamicFormComponents/IComponentModel";


interface IComponent {
    setForm(obj:Array<IComponentModel>):boolean
}
export default IComponent