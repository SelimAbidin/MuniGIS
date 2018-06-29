import { IServiceModel } from "../../data/serviceModel";
import { IServiceAction, SERVICE_ACTIONS } from "../actions/service";

let initial: any = localStorage.getItem("services");

try {
    initial = JSON.parse(initial);
} catch (error) {
    initial = [];
}
if (!initial) { initial = []; }

export const services = (state= initial, action: IServiceAction) => {

    if (action.type === SERVICE_ACTIONS.ADD_SERVICE) {
        return [...state, Object.assign({}, action.service)];
    } else if (action.type === SERVICE_ACTIONS.UPDATE_SERVICE) {

        return state.map((i: IServiceModel) => {
            if (i.id === action.service.id) {
                return Object.assign({}, action.service);
            }
            return i;
        });

    } else if (action.type === SERVICE_ACTIONS.SUB_LAYER_VISIBILITY) {

        return state.map((i: IServiceModel) => {
            if (i.id === action.service.id) {
                return Object.assign({}, action.service);
            }
            return i;
        });
    }

    return state;
};
