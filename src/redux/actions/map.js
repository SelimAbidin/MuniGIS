export const MapActions ={
    EXTENT_CHANGE:'EXTENT_CHANGE',
    POINTER_CHANGE: 'POINTER_CHANGE'
}

export const setExtent = (extent, center) => {
    return {type:MapActions.EXTENT_CHANGE, extent, center}
}

export const setCoordinate = (lon,lat, srid) => {

    return {type:MapActions.POINTER_CHANGE, lon,lat, srid}
}
