import { IServiceAction, SERVICE_ACTIONS } from "../actions/service";
const InitialServices = [];

export const services = (state= InitialServices, action: IServiceAction) => {

    if (action.type === SERVICE_ACTIONS.ADD_SERVICE) {
        return [...state, Object.assign({}, action.service)];
    }

    return state;
};
