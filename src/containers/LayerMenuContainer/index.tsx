import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import LayerMenu from "../../components/LayerMenu";
import {setUIState, STATES} from "../../redux/actions/uiState";

const mapLayerData = (layers: object[]) => {
    return layers.map((i: any) => ({
        data: i.name,
        label: i.name,
    }));
};

class LayerMenuContainer extends React.Component<any, any> {

    public render() {
        const {layers, onAddServiceClick} = this.props;
        const mappedLayerData = mapLayerData(layers);
        return <LayerMenu layers={mappedLayerData} onAddServiceClick={onAddServiceClick} />;
    }
}

const mapToProps = (state: any) => ({
    layers: state.layers,
});

const dispatchToState = (dispatch: Dispatch) => ({
    onAddServiceClick : () => dispatch(setUIState(STATES.ADD_SERVICE)),
});

export default connect(mapToProps, dispatchToState)(LayerMenuContainer);
