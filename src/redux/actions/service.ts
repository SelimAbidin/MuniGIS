
export type ServiceModel = {
    name: string;
    layers: Array<string>
    serviceURL:string;
}

export type ServiceAction = {
    type: SERVICE_ACTIONS,
    service: ServiceModel
}


export enum SERVICE_ACTIONS {
    ADD_SERVICE = 'ADD_SERVICE'
}

export const createWMSService = (name:string,serviceURL:string, layers:Array<string> ) : ServiceAction => {
    const type: SERVICE_ACTIONS = SERVICE_ACTIONS.ADD_SERVICE;
    let service:ServiceModel = {
        name,serviceURL,layers
    }
    let action:ServiceAction = {service, type}
    return action
}