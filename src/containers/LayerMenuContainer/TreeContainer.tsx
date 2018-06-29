import * as React from "react";
import { connect } from "react-redux";
import LayerTree from "../../components/UI/Tree/LayerTree";
import { IServiceModel } from "../../data/serviceModel";
import { updateService, updateSublayerVisibility } from "../../redux/actions/service";

const TreeContainer = ({services, onNodeChange, onSubNodeChange}) => (
    <LayerTree onNodeChange={onNodeChange} onSubNodeChange={onSubNodeChange} data={services}  />);

const mapStateToProps = (state) => ({
    services: state.services,
});

const dispatchToState = (dispatch) => ({
    onNodeChange: (service: IServiceModel) => dispatch(updateService(service)),
    onSubNodeChange: (
                        service: IServiceModel,
                        sublayerName: string,
                        visibility: boolean) =>
                                            dispatch(updateSublayerVisibility(service, sublayerName, visibility)),
});

export default connect(mapStateToProps, dispatchToState)(TreeContainer);
