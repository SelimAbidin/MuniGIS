import {STATES,UI_STATE} from '../actions/uiState'


export const uiState = (state=STATES.DEFAULT, action) => {

    if(action.type !== UI_STATE) return state
    
    return action.state
    
    // switch (action.state) {
    //     case STATES.ADD_SERVICE:
    //         return action.state;
    //     case STATES.DEFAULT:
    //         return action.state;
    //     default:
    //         console.log(STATES.DEFAULT);
    //         return state
    // }
}