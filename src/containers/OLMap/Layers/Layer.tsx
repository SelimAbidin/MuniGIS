import * as React from "react"
import TileLayer from "ol/layer/tile";
import TileWMS from "ol/source/TileWMS";
import {MapContext} from "../MapContext"

class Layer extends React.Component<any, any> {
    public url:string;
    private _layer:TileLayer;
    constructor(props) {
        super(props)
    }

    getLayer(url:string) : TileLayer {
        return new TileLayer({
            source: new TileWMS({
              params: {LAYERS: "TestWS:polygons", TILED: true},
              serverType: "geoserver",
              url,
            }),
        });
    }

    componentWillUpdate() {
        this.update()
    }

    update() {

        console.log(this.props);
        
    }

    onRender(props): React.ReactNode {

        const {map} = props
        if(map !== undefined) {
            
            let {url, layers} = this.props
            let service = this.getLayer(url);            
            map.removeLayer(service);
            let source:any = service.getSource()
            console.log(layers);
            
            source.updateParams({LAYERS:layers.join(",")})
            map.addLayer(service);
        }
        
        return null
    }

    render() {
        return <MapContext.Consumer>
        {e => this.onRender(e)}
         </ MapContext.Consumer>
    }

}

export default Layer