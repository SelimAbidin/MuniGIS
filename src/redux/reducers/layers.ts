
const sampleLayers = [{
    name: "Layer Name 1",
    type: "GEOSERVER_WMS",
    url: "hebebe",
}];

interface ILayerState {
    type: string;
}

export const layers = (state= sampleLayers, action: ILayerState) => {
    return state;
};
