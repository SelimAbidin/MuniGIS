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
    private layer: any;
    constructor(props) {
        super(props);
    }

    public getLayer(): VectorLayer {

        if (this.layer === undefined) {
            this.layer = new VectorLayer({
                source: new VectorSource({}),
            });
        }

        return this.layer;
    }

    public onRender(value): React.ReactNode {

        const {map} = value;

        if (map === undefined) { return null; }

        this.onVectorLayerRender(map);

        return null;
    }

    public render() {
        return <MapContext.Consumer>
        {(value) => this.onRender(value)}
         </ MapContext.Consumer>;
    }

    private onVectorLayerRender(map: Map) {

        const {visibility} = this.props.service;
        const vectorLayer = this.getLayer();
        map.removeLayer(vectorLayer);
        if (visibility) {
            map.addLayer(vectorLayer);
        }
    }

}

export default Layer;
