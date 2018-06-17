import { IComponentModel } from "../dynamicFormComponents/IComponentModel";

interface IComponent {
    setForm(obj: IComponentModel[]): boolean;
}
export default IComponent;
