
let sampleLayers = [{
    name: 'Layer Name 1',
    url: 'hebebe',
    type: 'GEOSERVER_WMS'
}]

interface LayerState {
    type:string;
}

export const layers = (state=sampleLayers, action: LayerState) => {
    return state
}