import { Action } from "redux";
import { LOCAL_STORAGES } from "../../config";
import { IServiceModel } from "../../data/serviceModel";
import { IServiceAction, IServiceSwipeOrderAction, SERVICE_ACTIONS } from "../actions/service";

let initial: any = localStorage.getItem(LOCAL_STORAGES.services);

try {
    initial = JSON.parse(initial);
} catch (error) {
    initial = [];
}
if (!initial) { initial = []; }

/**
 * redux reducers for services.
 * @param state {Array<IServiceModel>}
 * @param action
 */
export const services = (state: IServiceModel[]= initial, action: Action) => {

    if (action.type === SERVICE_ACTIONS.ADD_WMS_SERVICE) {
        return [...state, Object.assign({}, (action as IServiceAction).service)];
    } else if (action.type === SERVICE_ACTIONS.ADD_VECTOR_SERVICE) {
        return [...state, Object.assign({}, (action as IServiceAction).service)];
    } else if (action.type === SERVICE_ACTIONS.DELETE_SERVICE) {
        const service = (action as IServiceAction).service;
        return state.filter((s: IServiceModel) => s.id !== service.id);
    } else if (action.type === SERVICE_ACTIONS.UPDATE_SERVICE) {
        const service = (action as IServiceAction).service;
        return state.map((i: IServiceModel) => {
            if (i.id === service.id) {
                return Object.assign({}, service);
            }
            return i;
        });

    } else if (action.type === SERVICE_ACTIONS.SUB_LAYER_VISIBILITY) {
        const service = (action as IServiceAction).service;
        return state.map((i: IServiceModel) => {
            if (i.id === service.id) {
                return Object.assign({}, service);
            }
            return i;
        });
    } else if (action.type === SERVICE_ACTIONS.SWIPE_SERVICE_ORDER) {
        /** Swipe service order and create a new array if necessary. */
        const swipeAction: IServiceSwipeOrderAction = action as IServiceSwipeOrderAction;
        for (let i = 0; i < state.length; i++) {
            const service: IServiceModel = state[i];
            if (service.id === swipeAction.serviceID) {
                const currentIndex: number = i;
                const nextIndex: number = i + swipeAction.step;
                state.splice(currentIndex, 1);
                state.splice(nextIndex, 0, service);
                return [...state];
            }
        }
    }

    return state;
};
