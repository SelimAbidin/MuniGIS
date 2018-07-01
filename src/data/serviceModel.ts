import { GEOM_TYPES } from "./Geometry";

export enum SERVICE_TYPE {
    GEOSERVER_WMS = "GEOSERVER_WMS",
    VECTOR_LAYER = "GEOSERVER_WMS",
}

export interface IServiceModel {
    name: string;
    layers: ILayerModel[];
    serviceURL: string;
    visibility: boolean;
    id: number;
    geomType?: GEOM_TYPES;
    serviceType: SERVICE_TYPE;
}

export interface ILayerModel {
    layerName: string;
    visibility: boolean;
}
