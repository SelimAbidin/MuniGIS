import TileLayer from "ol/layer/tile";
import VectorLayer from "ol/layer/Vector";
import Map from "ol/map";
import TileWMS from "ol/source/TileWMS";
import VectorSource from "ol/source/Vector";
import * as React from "react";
import { ILayerModel, IServiceModel, SERVICE_TYPE } from "../../../data/serviceModel";
import {MapContext} from "../MapContext";

export interface ILayerProps {
    service: IServiceModel;
}

class Layer extends React.Component<ILayerProps, any> {
    public url: string;
    private layer: any;
    constructor(props) {
        super(props);
    }

    public getLayer(url: string): TileLayer {

        if (this.layer === undefined) {
            this.layer = new TileLayer({
                source: new TileWMS({
                  params: {LAYERS: "TestWS:polygons", TILED: true},
                  serverType: "geoserver",
                  url,
                }),
            });
        }
        return this.layer;
    }

    public getVectorLayer() {

        if (this.layer === undefined) {

            this.layer = new VectorLayer({
                source: new VectorSource({}),
            });

        }

        return this.layer;
    }

    public onRender(value): React.ReactNode {

        const {serviceType} = this.props.service;
        const {map} = value;

        if (map === undefined) { return null; }

        if (serviceType === SERVICE_TYPE.VECTOR_LAYER) {
            this.onVectorLayerRender(map);
        } else {
            this.onGeoserverWMSRender(map);
        }

        return null;
    }

    public render() {
        return <MapContext.Consumer>
        {(value) => this.onRender(value)}
         </ MapContext.Consumer>;
    }

    private onGeoserverWMSRender(map: Map) {

        const {serviceURL, layers, visibility} = this.props.service;

        if (!Array.isArray(layers)) {
            return;
        }

        const service = this.getLayer(serviceURL);
        map.removeLayer(service);

        if (visibility === true) {
            const source: any = service.getSource();
            const visibileLayers: ILayerModel[] = layers.filter((l: ILayerModel) => l.visibility);

            if (visibileLayers.length > 0) {
                source.updateParams({LAYERS: visibileLayers
                    .reverse()
                    .map((i: ILayerModel): string => i.layerName)
                    .join(",")});
                map.addLayer(service);
            }

        }
    }

    private onVectorLayerRender(map: Map) {

        const {visibility} = this.props.service;
        const vectorLayer = this.getVectorLayer();
        map.removeLayer(vectorLayer);
        if (visibility) {
            map.addLayer(vectorLayer);
        }
    }

}

export default Layer;
