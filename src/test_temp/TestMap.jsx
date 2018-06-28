import React from "react"
import TileLayer from "ol/layer/tile";
import Map from "ol/map";
import TileWMS from "ol/source/TileWMS";
import XYZ from "ol/source/xyz";
import View from "ol/View";

class TestMap extends React.Component {

    componentDidMount() {

        const view = new View({ center: [29, 41], zoom:10 });
        const map = new Map({
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    }),
                }),
            ],
            target: this._ref,
            view,
        })



        let url = "http://localhost:8080/geoserver/TestWS/wms"
        var l1 =  new TileLayer({
            source: new TileWMS({
              params: {LAYERS: "TestWS:polygons", TILED: true},
              serverType: "geoserver",
              url,
            }),
        });
       
     
     
        let url2 = "https://demo.boundlessgeo.com/geoserver/ows"
        var l2 =  new TileLayer({
            source: new TileWMS({
              params: {LAYERS: "usa:states", TILED: true},
              serverType: "geoserver",
              url2,
            }),
        });

        // map.addLayer(l1)
        map.addLayer(l2)
    }

    render () {

        return <div ref={ r => this._ref = r} />
    }
}

export default TestMap