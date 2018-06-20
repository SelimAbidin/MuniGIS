import TileLayer from "ol/layer/tile";
import Map from "ol/map";
import TileWMS from "ol/source/TileWMS";
import XYZ from "ol/source/xyz";
import View from "ol/view";
import * as React from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import {Dispatch} from "redux";
import {setCoordinate, setExtent} from "../../redux/actions/map";
import {MapContext} from './MapContext'
import Layer from "./Layers/Layer";
import Layers from "./Layers";
import { ServiceModel } from "../../redux/actions/service";


interface IOlProps {
    mousePointer: any;
    history: any;
    services: Array<ServiceModel>;
    extentChange: (extent: number[], center: number[]) => void;
}

class OLMap extends React.Component<IOlProps, any>  {

    private content: HTMLElement;
    private moved: boolean;
    private map: any;
    private view: any;
    private currentMousePointer: any;
    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {

        const content = this.content;
        this._onAnimationFrame = this._onAnimationFrame.bind(this);
        const view = new View({ center: [0, 0], zoom: 2 });
        const map = new Map({
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    }),
                }),
            ],
            target: content,
            view,
        });

        this.map = map;
        this.view = view;
        this.updateLayers();
        map.on("pointermove", this._onMouseMove.bind(this));
        map.on("moveend", this._onMoveEnd.bind(this));
        this._onAnimationFrame();

        this.forceUpdate()
    }

    

    public _onAnimationFrame() {

        if (this.moved) {
            const {mousePointer} = this.props;
            mousePointer(this.currentMousePointer, this.view.getProjection().getCode());
            this.moved = true;
        }
        requestAnimationFrame(this._onAnimationFrame);
    }

    public updateLayers() {

        /*
        const layer = new TileLayer({
            source: new TileWMS({
              params: {LAYERS: "TestWS:polygons", TILED: true},
              serverType: "geoserver",
              url: "http://localhost:8080/geoserver/TestWS/wms",
            }),
        });
        this.map.addLayer(layer);
        
        */

    }

    public _onMouseMove(e: any) {
        this.moved = true;
        this.currentMousePointer = e.coordinate;
    }

    public _onMoveEnd(e: any) {
        const {history} = this.props;
        const map = this.map;
        const view = map.getView();
        const mapExtent = view.calculateExtent(map.getSize());
        const center = view.getCenter();
        const zoom = view.getZoom();
        const adres = [...center, zoom];
        const {extentChange} = this.props;
        history.replace("@" + adres.join(","));
        extentChange(mapExtent, adres);
    }

    public _onContextMenu(e: any) {
        e.preventDefault();
    }

    public render() {

        const {children, services} = this.props
        return ( <React.Fragment>
                <div
                        onContextMenu={this._onContextMenu}
                        style={{width: "100%", height: "100%"}}
                        ref={(r) => this.content = r} >
                </div>
                <MapContext.Provider value={ {map: this.map} } >
                {children}
                <Layers>
                {services.map( (service:ServiceModel) => {
                        return <Layer key={service.name} url={service.serviceURL} layers={service.layers} />;
                    })}
                </Layers>

                </MapContext.Provider>
                </React.Fragment>)
    }
}

const mapToProps = (state: any) => ({
    services: state.services
});

const dispatchToState = (dispatch: Dispatch) => ({
    extentChange: (extent: number[], center: number[]) => dispatch( setExtent( extent, center ) ),
    mousePointer: (coordinate: number[], epsg: string) => dispatch(setCoordinate(coordinate[0], coordinate[1], epsg)),
});

export default connect(mapToProps, dispatchToState)(withRouter(OLMap));
