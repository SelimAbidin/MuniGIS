
export interface IServiceModel {
    name: string;
    layers: string[];
    serviceURL: string;
}

export interface IServiceAction {
    type: SERVICE_ACTIONS;
    service: IServiceModel;
}

export enum SERVICE_ACTIONS {
    ADD_SERVICE = "ADD_SERVICE",
}

export const createWMSService = (name: string, serviceURL: string, layers: string[] ): IServiceAction => {
    const type: SERVICE_ACTIONS = SERVICE_ACTIONS.ADD_SERVICE;
    const service: IServiceModel = {
        layers, name, serviceURL,
    };
    const action: IServiceAction = {service, type};
    return action;
};
