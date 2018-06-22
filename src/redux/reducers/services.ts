import { IServiceAction, SERVICE_ACTIONS } from "../actions/service";

let initial: any = localStorage.getItem("services");

try {
    initial = JSON.parse(initial);
} catch (error) {
    initial = [];
}

export const services = (state= initial, action: IServiceAction) => {

    if (action.type === SERVICE_ACTIONS.ADD_SERVICE) {
        return [...state, Object.assign({}, action.service)];
    }

    return state;
};
