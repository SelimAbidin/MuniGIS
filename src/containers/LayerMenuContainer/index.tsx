import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {setUIState, STATES} from "../../redux/actions/uiState";
import Toolbar from "../../components/UI/Toolbar";
import Tree from "../../components/UI/Tree/LayerTree";
import "./layermenu.css"

class LayerMenuContainer extends React.Component<any, any> {
    public render() {
        const {services, onAddServiceClick} = this.props;
        return <div className="layerMenu" style={{height: "100%", width:200  + "px", borderRight:"solid 1px"}} >
            <Toolbar >
                <button id="layerAddButton" onClick={onAddServiceClick}  />
            </Toolbar>
            <Tree data={services} />
        </div>;

    }
}

const mapToProps = (state: any) => ({
    services: state.services,
});

const dispatchToState = (dispatch: Dispatch) => ({
    onAddServiceClick : () => dispatch(setUIState(STATES.ADD_SERVICE)),
});

export default connect(mapToProps, dispatchToState)(LayerMenuContainer);
