import { GEOM_TYPES } from "../../data/Geometry";
import { ILayerModel, IServiceModel, SERVICE_TYPE } from "../../data/serviceModel";

export interface IServiceAction {
    type: SERVICE_ACTIONS;
    service: IServiceModel;
}

export enum SERVICE_ACTIONS {
    ADD_WMS_SERVICE = "ADD_WMS_SERVICE",
    ADD_VECTOR_SERVICE = "ADD_VECTOR_SERVICE",
    UPDATE_SERVICE = "UPDATE_SERVICE",
    SUB_LAYER_VISIBILITY = "SUB_LAYER_VISIBILITY",
}

export const createWMSService = (name: string, serviceURL: string, layers: ILayerModel[] ): IServiceAction => {
    const type: SERVICE_ACTIONS = SERVICE_ACTIONS.ADD_WMS_SERVICE;

    const visibility = true;
    const service: IServiceModel = {
        id: new Date().getTime(),
        layers,
        name,
        serviceType: SERVICE_TYPE.GEOSERVER_WMS,
        serviceURL,
        visibility,
    };
    const action: IServiceAction = {service, type};
    return action;
};

export const createVectorLayer = (name: string, geomType: GEOM_TYPES ): IServiceAction => {
    const type: SERVICE_ACTIONS = SERVICE_ACTIONS.ADD_VECTOR_SERVICE;

    const visibility = true;
    const service: IServiceModel = {
        geomType,
        id: new Date().getTime(),
        layers: null,
        name,
        serviceType: SERVICE_TYPE.VECTOR_LAYER,
        serviceURL: null,
        visibility,
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
