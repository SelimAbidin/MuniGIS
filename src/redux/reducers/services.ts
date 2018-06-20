import { ServiceAction, SERVICE_ACTIONS } from '../actions/service'
import { freeze } from '../../utils/immutable';
const InitialServices = [];

export const services = (state= InitialServices, action:ServiceAction) => {

    if(action.type === SERVICE_ACTIONS.ADD_SERVICE) {
        return [...state, Object.assign({},action.service)]
    }

    return state;
};
