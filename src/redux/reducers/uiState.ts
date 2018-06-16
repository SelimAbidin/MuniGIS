import {STATES,UI_STATE, UIStateAction} from '../actions/uiState'


export const uiState = (state=STATES.DEFAULT, action: UIStateAction) => {

    if(action.type !== UI_STATE) return state
    
    return action.state
}