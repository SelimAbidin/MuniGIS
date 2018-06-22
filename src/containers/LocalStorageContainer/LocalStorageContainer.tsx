import * as React from "react"
import LocalStorage from "./LocalStorage";
import { connect } from "react-redux";
import { ServiceModel } from "../../redux/actions/service";


const ServiceStorage = connect( (state:any) => ({services: state.services}) ) ((props:any) => (
    <LocalStorage storeName="services" data={props.services} />
));

const MapExtentStorage = connect( (state:any) => ({map: state.map}) )((props:any) => 
    (<LocalStorage storeName="mapExtent" data={props.map} />)
);

class LocalStorageContainer extends React.Component<any> {

    render(){
        if (typeof(Storage) !== "undefined") {
            return <React.Fragment>
                    <ServiceStorage  />
                    <MapExtentStorage  />
                </React.Fragment>
        }

        return null
    }
}

export default LocalStorageContainer