import {combineReducers} from 'redux'
import {cursorPosition,map} from './map.ts'
import {uiState} from './uiState'
import {layers} from './layers'



export default combineReducers({map,cursorPosition, UIState:uiState, layers})