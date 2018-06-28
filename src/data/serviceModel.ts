export interface IServiceModel {
    name: string;
    layers: ILayerModel[];
    serviceURL: string;
    visibility: boolean;
    id: number;
}

export interface ILayerModel {
    layerName: string;
    visibility: boolean;
}
