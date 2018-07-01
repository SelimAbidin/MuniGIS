import * as React from "react";
import { connect } from "react-redux";
import { IServiceModel, SERVICE_TYPE } from "../../../data/serviceModel";
import WMSTileLayer from "./WMSTileLayer";
import VectorTile from "./VectorLayer";


const getLayerByType = (service:IServiceModel) => {

    const {serviceType} = service;

    if(serviceType === SERVICE_TYPE.GEOSERVER_WMS) {
        return <WMSTileLayer service={service} key={service.id} />
    } else if(serviceType === SERVICE_TYPE.VECTOR_LAYER) {
        return <VectorTile service={service} key={service.id} />
    }
}

const LayerContainer = ({services}: {services: IServiceModel[]}) => (
    <>
        {services.map( (service: IServiceModel) => {
            return getLayerByType(service)
        })}
    </>
);

const mapStateToProps = (state) => ({
    services: state.services,
});

export default connect(mapStateToProps)(LayerContainer);
