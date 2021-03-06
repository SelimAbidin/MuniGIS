import { LOCAL_STORAGES } from "../../config";
import {ICursorPositionAction, IExtentAction, MapActions} from "../actions/map";

const storage = localStorage.getItem(LOCAL_STORAGES.mapExtent);
let mapCenter;
if (storage) {
    mapCenter = storage.split(",").map((i) => parseFloat(i));
}

if (!Array.isArray(mapCenter)) {
    mapCenter = [];
}

export const map = (state= mapCenter, action: IExtentAction) => {

    if (action.type === MapActions.EXTENT_CHANGE) {
        return action.center.concat();
    }

    return state;
};

export const cursorPosition = (state= {}, action: ICursorPositionAction) => {
    switch (action.type) {
        case MapActions.POINTER_CHANGE :
            const {lon, lat, srid} = action;
            return {lon, lat, srid};
        default:
            return state;
    }
};
