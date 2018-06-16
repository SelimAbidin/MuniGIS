export const MapActions ={
    EXTENT_CHANGE:'EXTENT_CHANGE',
    POINTER_CHANGE: 'POINTER_CHANGE'
}


export interface CursorPositionAction {
    lon:number;
    lat:number;
    srid:string;
    type:string;
}


export interface ExtentAction {
    type:string;
    extent:Array<Number>;
    center:Array<Number>;
}

export const setExtent = (extent, center) : ExtentAction => {
    return {type:MapActions.EXTENT_CHANGE, extent, center}
}

export const setCoordinate = (lon,lat, srid): CursorPositionAction => {
    return {type:MapActions.POINTER_CHANGE, lon,lat, srid}
}
