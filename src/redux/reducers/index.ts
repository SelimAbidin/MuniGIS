import {combineReducers} from "redux";
import {services} from "./services";
import {cursorPosition, map} from "./map";
import {uiState} from "./uiState";

export default combineReducers({map, cursorPosition, UIState: uiState, services});
