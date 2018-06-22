import * as React from "react";
import { connect } from "react-redux";
// import { IServiceModel } from "../../redux/actions/service";
import LocalStorage from "./LocalStorage";

const ServiceStorage = connect( (state: any) => ({services: state.services}) ) ((props: any) => (
    <LocalStorage storeName="services" data={JSON.stringify(props.services)} />
));

const MapExtentStorage = connect( (state: any) => ({map: state.map}) )((props: any) =>
    (<LocalStorage storeName="mapExtent" data={props.map} />),
);

class LocalStorageContainer extends React.Component<any> {

    public render() {
        if (typeof(Storage) !== "undefined") {
            return <React.Fragment>
                    <ServiceStorage  />
                    <MapExtentStorage  />
                </React.Fragment>;
        }

        return null;
    }
}

export default LocalStorageContainer;
