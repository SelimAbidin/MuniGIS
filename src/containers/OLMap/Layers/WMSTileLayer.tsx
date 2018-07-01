import TileLayer from "ol/layer/tile";
import VectorLayer from "ol/layer/Vector";
import Map from "ol/map";
import TileWMS from "ol/source/TileWMS";
import VectorSource from "ol/source/Vector";
import * as React from "react";
import { ILayerModel, IServiceModel, SERVICE_TYPE } from "../../../data/serviceModel";
import {MapContext} from "../MapContext";


// TODO will be collected to in a sinle file. Maybe a new Abstract Layer for Layer Components?
export interface ILayerProps {
    service: IServiceModel;
}

class WMSTileLayer extends React.Component<ILayerProps, any> {
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

    public onRender(value): React.ReactNode {

        const {map} = value;

        if (map === undefined) { return null; }

        this.onGeoserverWMSRender(map);

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

}

export default WMSTileLayer;
