import {freeze, cloneObject} from '../../utils/immutable'
import {MapActions, CursorPositionAction, ExtentAction} from '../actions/map'

export const map = (state={}, action: ExtentAction) => {
    switch (action.type) {
        case MapActions.EXTENT_CHANGE :
            return freeze(cloneObject(state))
        default:
            return freeze(cloneObject(state))
    }
}

export const cursorPosition = (state={}, action:CursorPositionAction) => {
    switch (action.type) {
        case MapActions.POINTER_CHANGE :
            const {lon,lat, srid} = action
            return freeze(Object.assign({}, state, {lon,lat, srid}))
        default:
            return freeze(cloneObject(state))
    }
}