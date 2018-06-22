import { freeze } from "../../utils/immutable";
import { SERVICE_ACTIONS, ServiceAction } from "../actions/service";
const InitialServices = [];

export const services = (state= InitialServices, action: ServiceAction) => {

    if (action.type === SERVICE_ACTIONS.ADD_SERVICE) {
        return [...state, Object.assign({}, action.service)];
    }

    return state;
};
