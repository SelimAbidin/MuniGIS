
export type ServiceModel = {
    name: string;
    layers: string[];
    serviceURL: string;
}

export type ServiceAction = {
    type: SERVICE_ACTIONS;
    service: ServiceModel;
}

export enum SERVICE_ACTIONS {
    ADD_SERVICE = "ADD_SERVICE",
}

export const createWMSService = (name: string, serviceURL: string, layers: string[] ): ServiceAction => {
    const type: SERVICE_ACTIONS = SERVICE_ACTIONS.ADD_SERVICE;
    const service: ServiceModel = {
        name, serviceURL, layers,
    };
    const action: ServiceAction = {service, type};
    return action;
};
