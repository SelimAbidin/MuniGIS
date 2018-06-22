import * as React from "react"
import LocalStorage from "./LocalStorage";
import { connect } from "react-redux";




class LocalStorageContainer extends React.Component<any> {

    render(){

        const {map} = this.props
        if (typeof(Storage) !== "undefined") {
            return <LocalStorage storeName="mapExtent" data={map} />
        }

        return null
    }
}

const mapStateToProps = state => ({
    map: state.map
})

export default connect(mapStateToProps)(LocalStorageContainer)