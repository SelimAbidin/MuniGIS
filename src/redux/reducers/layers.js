import { immutableArray } from "../../utils/immutable";

let sampleLayers = [{
    name: 'Layer Name 1',
    url: 'hebebe',
    type: 'GEOSERVER_WMS'
}]

export const layers = (state=sampleLayers, action) => {
    return state
}