import TileLayer from "ol/layer/tile";
import TileWMS from "ol/source/TileWMS";
import * as React from "react";
import {MapContext} from "../MapContext";

class Layer extends React.Component<any, any> {
    public url: string;
    private layer:TileLayer;
    // private layer: TileLayer;
    constructor(props) {
        super(props);
    }

    public getLayer(url: string): TileLayer {
        
        if(this.layer === undefined) {
            this.layer = new TileLayer({
                source: new TileWMS({
                  params: {LAYERS: "TestWS:polygons", TILED: true},
                  serverType: "geoserver",
                  url,
                }),
            });
        }
       return this.layer
    }

    // public componentWillUpdate() {
    //     this.update();
    // }

    // public update() {
    // }

    public onRender(props): React.ReactNode {

        const {map} = props;
        if (map !== undefined) {
            const {url, layers} = this.props;
            const service = this.getLayer(url);
            map.removeLayer(service);
            const source: any = service.getSource();
            source.updateParams({LAYERS: layers.join(",")});
            map.addLayer(service);
        }
        return null;
    }

    public render() {
        return <MapContext.Consumer>
        {(e) => this.onRender(e)}
         </ MapContext.Consumer>;
    }

}

export default Layer;
