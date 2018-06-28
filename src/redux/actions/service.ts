import { ILayerModel, IServiceModel } from "../../data/serviceModel";

export interface IServiceAction {
    type: SERVICE_ACTIONS;
    service: IServiceModel;
}

export enum SERVICE_ACTIONS {
    ADD_SERVICE = "ADD_SERVICE",
    UPDATE_SERVICE = "UPDATE_SERVICE",
    SUB_LAYER_VISIBILITY = "SUB_LAYER_VISIBILITY",
}

export const createWMSService = (name: string, serviceURL: string, layers: ILayerModel[] ): IServiceAction => {
    const type: SERVICE_ACTIONS = SERVICE_ACTIONS.ADD_SERVICE;

    const visibility = true;
    const service: IServiceModel = {
        id: new Date().getTime(), layers, name, serviceURL, visibility,
    };
    const action: IServiceAction = {service, type};
    return action;
};

export const updateService = (service: IServiceModel): IServiceAction => {
    const type: SERVICE_ACTIONS = SERVICE_ACTIONS.UPDATE_SERVICE;
    const action: IServiceAction = {service, type};
    return action;
};

export const updateSublayerVisibility = (   service: IServiceModel,
                                            layerName: string,
                                            visibility: boolean): IServiceAction => {

    const type: SERVICE_ACTIONS = SERVICE_ACTIONS.SUB_LAYER_VISIBILITY;

    const newLayers = service.layers.map( ( i: ILayerModel) => {

        if (i.layerName === layerName) {
            return Object.assign({}, i , {visibility});
        }
        return i;
    });

    const action: IServiceAction = { service: Object.assign({}, service, {layers: newLayers} ), type};
    return action;
};
