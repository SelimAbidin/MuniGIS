
// export const STATES = {
//     DEFAULT: 'DEFAULT',
//     ADD_SERVICE: 'ADD_SERVICE'
// }


export enum STATES {
    DEFAULT = 'DEFAULT',
    ADD_SERVICE = 'ADD_SERVICE'
}

export const UI_STATE = 'UI_STATE'

export interface UIStateAction {
    type:string;
    state:string
}

export const setUIState = (state:any) : UIStateAction => ({type:UI_STATE,state})