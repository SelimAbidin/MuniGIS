import {freeze, cloneObject} from '../../utils/immutable'
import {MapActions} from '../actions/map.js'


let mapConfig = {
    // extent:
}

export const map = (state={}, action) => {

    switch (action.type) {
        case MapActions.EXTENT_CHANGE :
            return freeze(cloneObject(state))
        default:
            return freeze(cloneObject(state))
    }
}

export const cursorPosition = (state={}, action) => {

    switch (action.type) {
        case MapActions.POINTER_CHANGE :
            const {lon,lat, srid} = action
            return freeze(Object.assign({}, state, {lon,lat, srid}))
        default:
            return freeze(cloneObject(state))
    }
}