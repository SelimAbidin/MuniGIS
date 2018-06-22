import * as React from "react";
import { connect } from "react-redux";
import { IServiceModel } from "../../../redux/actions/service";
import Layer from "./Layer";

const LayerContainer = ({services}: {services: IServiceModel[]}) => (
    <React.Fragment>
        {services.map( (service: IServiceModel) => {
            return <Layer key={service.name} url={service.serviceURL} layers={service.layers} />;
        })}
    </React.Fragment>
);

const mapStateToProps = (state) => ({
    services: state.services,
});

export default connect(mapStateToProps)(LayerContainer);
