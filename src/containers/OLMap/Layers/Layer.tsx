import TileLayer from "ol/layer/tile";
import TileWMS from "ol/source/TileWMS";
import * as React from "react";
import { ILayerModel, IServiceModel } from "../../../data/serviceModel";
import {MapContext} from "../MapContext";

export interface ILayerProps {
    service: IServiceModel;
}

class Layer extends React.Component<ILayerProps, any> {
    public url: string;
    private layer: TileLayer;
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
        if (map !== undefined) {
            const {serviceURL, layers, visibility} = this.props.service;
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
        return null;
    }

    public render() {
        return <MapContext.Consumer>
        {(value) => this.onRender(value)}
         </ MapContext.Consumer>;
    }

}

export default Layer;
