import * as React from "react";
import { List } from "semantic-ui-react";
import { IServiceModel } from "../../../../data/serviceModel";
import "./layerTree.scss";
import LayerTreeNode from "./LayerTreeNode";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface ILayerTreeProps {
    data: any[];
    onNodeChange: (IServiceModel: IServiceModel) => void;
    onSubNodeChange: (IServiceModel: IServiceModel, layerName: string, visibility: boolean) => void;
}


const getListStyle = (b:boolean) => {

    if(!b) {
        return {}
    } else {
        return {backgroundColor:"#ff0000"}
    }
}


class LayerTree extends React.PureComponent<ILayerTreeProps> {

    constructor(p) {
        super(p);
        this.onVisibilityChange = this.onVisibilityChange.bind(this);
        this.onSubLayerVisibilityChange = this.onSubLayerVisibilityChange.bind(this);
    }

    onDragEnd(result) {

        if (!result.destination) {
            return;
        }

        console.log(result);
        
    }

    public render() {

        const {data} = this.props;
        
        return <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                       
                        { (provided, snapshot) => (

                            <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} >
                             <List  className="mg-layer-tree" style={{paddingLeft: "10px"}}  >

                                {data
                                    .concat()
                                    .reverse()
                                    .map((service:IServiceModel) => {

                                        return <LayerTreeNode
                                                onSubLayerVisibilityChange={this.onSubLayerVisibilityChange}
                                                onVisibilityChange={this.onVisibilityChange}
                                                data={service}
                                                key={service.id} />

                                        // return  <Draggable key={service.id} draggableId={service.id} index={index}>
                                        //      {(provided, snapshot) => {
                                               
                                        //        return <div  ref={provided.innerRef}
                                        //                         {...provided.draggableProps}
                                        //                         {...provided.dragHandleProps}
                                        //                         // onSubLayerVisibilityChange={this.onSubLayerVisibilityChange}
                                        //                         // onVisibilityChange={this.onVisibilityChange}
                                        //                         data={service}
                                        //                         key={service.id} >{service.name}</div>
                                        //     }
                                        // }
                                        // </Draggable>

                                            
                                        })}

                            </List>

                            </ div>
                        ) }
                    </Droppable>
                </DragDropContext>
           
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
