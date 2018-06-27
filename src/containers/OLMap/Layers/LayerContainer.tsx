import * as React from "react";
import { connect } from "react-redux";
import { IServiceModel } from "../../../data/serviceModel";
import Layer from "./Layer";

const LayerContainer = ({services}: {services: IServiceModel[]}) => (
    <React.Fragment>
        {services.map( (service: IServiceModel) => {
            return <Layer  service={service}  key={service.name} />;
        })}
    </React.Fragment>
);

const mapStateToProps = (state) => ({
    services: state.services,
});

export default connect(mapStateToProps)(LayerContainer);
