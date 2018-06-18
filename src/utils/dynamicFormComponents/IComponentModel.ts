
export enum COMPONENT_TYPES {
    INPUT = "INPUT",
    BUTTON = "BUTTON",
}

export interface IComponentModel {
    type: COMPONENT_TYPES;
    name: string;
}
