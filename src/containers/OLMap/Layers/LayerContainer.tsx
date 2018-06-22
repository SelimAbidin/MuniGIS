import * as React from "react";
import { connect } from "react-redux";
import { ServiceModel } from "../../../redux/actions/service";
import Layer from "./Layer";

const LayerContainer = ({services}: {services: ServiceModel[]}) => (
    <React.Fragment>
        {services.map( (service: ServiceModel) => {
            return <Layer key={service.name} url={service.serviceURL} layers={service.layers} />;
        })}
    </React.Fragment>
);

const mapStateToProps = (state) => ({
    services: state.services,
});

export default connect(mapStateToProps)(LayerContainer);
