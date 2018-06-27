import { IServiceModel } from "../../data/serviceModel";

export interface IServiceAction {
    type: SERVICE_ACTIONS;
    service: IServiceModel;
}

export enum SERVICE_ACTIONS {
    ADD_SERVICE = "ADD_SERVICE",
    UPDATE_SERVICE = "UPDATE_SERVICE",
}

export const createWMSService = (name: string, serviceURL: string, layers: string[] ): IServiceAction => {
    const type: SERVICE_ACTIONS = SERVICE_ACTIONS.ADD_SERVICE;

    const visibility = true;
    const service: IServiceModel = {
        id: new Date().getTime(), layers, name, serviceURL, visibility, visibleLayers: layers,
    };
    const action: IServiceAction = {service, type};
    return action;
};

export const updateModel = (service: IServiceModel): IServiceAction => {
    const type: SERVICE_ACTIONS = SERVICE_ACTIONS.UPDATE_SERVICE;
    const action: IServiceAction = {service, type};
    return action;
};
