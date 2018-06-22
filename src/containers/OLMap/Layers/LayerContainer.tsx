import * as React from "react"
import { connect } from "react-redux";
import Layer from "./Layer";
import { ServiceModel } from "../../../redux/actions/service";


const LayerContainer = ({services}:{services:Array<ServiceModel>}) => (
    <React.Fragment>
        {services.map( (service:ServiceModel) => {
            return <Layer key={service.name} url={service.serviceURL} layers={service.layers} />;
        })}
    </React.Fragment>
)

const mapStateToProps = state => ({
    services: state.services
})

export default connect(mapStateToProps)(LayerContainer)