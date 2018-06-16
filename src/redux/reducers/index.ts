import {combineReducers} from "redux";
import {layers} from "./layers";
import {cursorPosition, map} from "./map";
import {uiState} from "./uiState";

export default combineReducers({map, cursorPosition, UIState: uiState, layers});
