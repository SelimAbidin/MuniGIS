import * as React from "react";
import { connect } from "react-redux";
import LayerTree from "../../components/UI/Tree/LayerTree";
import { IServiceModel } from "../../data/serviceModel";
import { deleteService, swipeServiceOrder, updateService, updateSublayerVisibility } from "../../redux/actions/service";

const TreeContainer = ({services, onNodeChange, onDeleteService, onSubNodeChange, onServiceDragEnd}) => (
    <LayerTree
        requestServiceDelete={onDeleteService}
        onNodeChange={onNodeChange}
        onSubNodeChange={onSubNodeChange}
        data={services.concat().reverse()}
        onServiceDragEnd={onServiceDragEnd}  />);

const mapStateToProps = (state) => ({
    services: state.services,
});

const dispatchToState = (dispatch) => ({
    onDeleteService: (service: IServiceModel) => dispatch(deleteService(service)),
    onNodeChange: (service: IServiceModel) => dispatch(updateService(service)),
    onServiceDragEnd: (dragEndEvent: any) => {
        const serviceID: number = dragEndEvent.draggableId;
        // Services are reversed on Tree, so index needs to be reversed back to do correct calculation
        const step: number = dragEndEvent.destination.index * -1;

        if (step !== 0) {
            dispatch(swipeServiceOrder(serviceID, step));
        }
    },
    onSubNodeChange: (
                        service: IServiceModel,
                        sublayerName: string,
                        visibility: boolean) =>
                                            dispatch(updateSublayerVisibility(service, sublayerName, visibility)),

});

export default connect(mapStateToProps, dispatchToState)(TreeContainer);
