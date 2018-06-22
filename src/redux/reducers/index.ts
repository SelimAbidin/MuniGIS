import {combineReducers} from "redux";
import {cursorPosition, map} from "./map";
import {services} from "./services";
import {uiState} from "./uiState";

export default combineReducers({map, cursorPosition, UIState: uiState, services});
