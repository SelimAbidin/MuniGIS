import {IUIStateAction, STATES, UI_STATE} from "../actions/uiState";

export const uiState = (state= STATES.DEFAULT, action: IUIStateAction) => {

    if (action.type !== UI_STATE) { return state; }

    return action.state;
};
