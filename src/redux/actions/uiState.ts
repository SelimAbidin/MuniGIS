
// export const STATES = {
//     DEFAULT: 'DEFAULT',
//     ADD_SERVICE: 'ADD_SERVICE'
// }


export enum STATES {
    DEFAULT = 'DEFAULT',
    ADD_SERVICE = 'ADD_SERVICE'
}

export const UI_STATE = 'UI_STATE'

export const setUIState = (state) => ({type:UI_STATE,state})