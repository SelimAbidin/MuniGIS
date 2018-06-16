export const MapActions = {
    EXTENT_CHANGE: "EXTENT_CHANGE",
    POINTER_CHANGE: "POINTER_CHANGE",
};

export interface ICursorPositionAction {
    lon: number;
    lat: number;
    srid: string;
    type: string;
}

export interface IExtentAction {
    type: string;
    extent: number[];
    center: number[];
}

export const setExtent = (extent: number[], center: number[]): IExtentAction => {
    return {type: MapActions.EXTENT_CHANGE, extent, center};
};

export const setCoordinate = (lon: number, lat: number, srid: string): ICursorPositionAction => {
    return {type: MapActions.POINTER_CHANGE, lon, lat, srid};
};
