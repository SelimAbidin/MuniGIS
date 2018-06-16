import {cloneObject, freeze} from "../../utils/immutable";
import {ICursorPositionAction, IExtentAction, MapActions} from "../actions/map";

export const map = (state= {}, action: IExtentAction) => {
    switch (action.type) {
        case MapActions.EXTENT_CHANGE :
            return freeze(cloneObject(state));
        default:
            return freeze(cloneObject(state));
    }
};

export const cursorPosition = (state= {}, action: ICursorPositionAction) => {
    switch (action.type) {
        case MapActions.POINTER_CHANGE :
            const {lon, lat, srid} = action;
            return freeze(Object.assign({}, state, {lon, lat, srid}));
        default:
            return freeze(cloneObject(state));
    }
};
