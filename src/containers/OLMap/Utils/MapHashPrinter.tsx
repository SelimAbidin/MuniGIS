import Map from "ol/map";
import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { setExtent } from "../../../redux/actions/map";
import {MapContext} from "../MapContext";

class MapHashPrinter extends React.Component<any, any> {

    private map: Map;
    constructor(props) {
        super(props);
        this.onMoveEnd = this.onMoveEnd.bind(this);
    }

    public onMoveEnd(e) {

        const {history} = this.props;
        const map = this.map;
        const view = map.getView();
        const center = view.getCenter();
        const zoom = view.getZoom();
        const adres = [...center, zoom];
        const {extentChange} = this.props;
        history.replace("@" + adres.join(","));
        extentChange(adres);
    }

    public render() {

        return <MapContext.Consumer>
            {(v) => this.onRender(v)}
        </MapContext.Consumer>;
    }

    private onRender(consumerValue: any) {

        const {map}: {map: Map} = consumerValue;
        if (map) {
            this.map = map;
            map.un("moveend", this.onMoveEnd);
            map.on("moveend", this.onMoveEnd);
        }
        return null;
    }
}

const dispatchToState = (dispatch) => ({
    extentChange: (center: number[]) => dispatch( setExtent(center ) ),
});
export default connect(undefined, dispatchToState)(withRouter(MapHashPrinter));
