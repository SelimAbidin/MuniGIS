import * as React from "react";
import { connect } from "react-redux";
import Tree from "../../components/UI/Tree/LayerTree";
import { IServiceModel } from "../../data/serviceModel";
import { updateModel } from "../../redux/actions/service";

const TreeContainer = ({services, onNodeChange}) => (<Tree onNodeChange={onNodeChange} data={services}  />);

const mapStateToProps = (state) => ({
    services: state.services,
});

const dispatchToState = (dispatch) => ({
    onNodeChange: (service: IServiceModel) => dispatch(updateModel(service)),
});

export default connect(mapStateToProps, dispatchToState)(TreeContainer);
