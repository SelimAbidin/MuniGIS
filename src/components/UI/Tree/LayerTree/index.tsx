import * as React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { List } from "semantic-ui-react";
import { IServiceModel } from "../../../../data/serviceModel";
import "./layerTree.scss";
import LayerTreeNode from "./LayerTreeNode";

interface ILayerTreeProps {
    data: any[];
    onNodeChange: (IServiceModel: IServiceModel) => void;
    requestServiceDelete: (IServiceModel: IServiceModel) => void;
    onServiceDragEnd: (IServiceModel: any) => void;
    onSubNodeChange: (IServiceModel: IServiceModel, layerName: string, visibility: boolean) => void;
}

const getListContainerStyle = (b: boolean) => {
    if (!b) {
        return "mg-tree-list-container";
    } else {
        return "mg-tree-list-container drag-hover";
    }
};

class LayerTree extends React.PureComponent<ILayerTreeProps> {

    constructor(p) {
        super(p);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onSubLayerVisibilityChange = this.onSubLayerVisibilityChange.bind(this);
        this.onVisibilityChange = this.onVisibilityChange.bind(this);
    }

    public onDragEnd(result: any) {

        if (!result.destination) {
            return;
        }

        const {onServiceDragEnd} = this.props;
        onServiceDragEnd(result);
    }

    public render() {

        const {data,requestServiceDelete} = this.props;

        return <DragDropContext onDragEnd={this.onDragEnd} >
                    <Droppable droppableId="droppable">

                        { (provided, snapshot) => (

                            <div ref={provided.innerRef} className={getListContainerStyle(snapshot.isDraggingOver)} >
                             <List  className="mg-layer-tree" style={{paddingLeft: "10px"}}  >

                                {data
                                    .map((service: IServiceModel) => {

                                        return <LayerTreeNode
                                                requestServiceDelete={requestServiceDelete}
                                                onSubLayerVisibilityChange={this.onSubLayerVisibilityChange}
                                                onVisibilityChange={this.onVisibilityChange}
                                                data={service}
                                                key={service.id} />;
                                        })}
                            </List>
                            </ div>
                        ) }
                    </Droppable>
                </DragDropContext>;

    }

    private onVisibilityChange(serviceModel: IServiceModel) {
        const {onNodeChange} = this.props;
        onNodeChange(serviceModel);
    }

    private onSubLayerVisibilityChange(serviceModel: IServiceModel, layerName: string, visibility: boolean) {
        const {onSubNodeChange} = this.props;
        onSubNodeChange(serviceModel, layerName, visibility);
    }

}

export default LayerTree;
