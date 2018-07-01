import * as React from "react";
import { Checkbox, CheckboxProps, List } from "semantic-ui-react";
import { IServiceModel } from "../../../../data/serviceModel";
import { Draggable } from 'react-beautiful-dnd';

export interface ILayerTreeNodeProp {
    data: IServiceModel;
    onVisibilityChange?: (service: IServiceModel) => void;
    onSubLayerVisibilityChange?: (serviceModel: IServiceModel, layerName: string, visibility: boolean) => void;
}

class LayerTreeNode extends React.Component<ILayerTreeNodeProp> {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onChangeSubLayerVisibility = this.onChangeSubLayerVisibility.bind(this);
    }

    public render() {
        
        const {data}: {data: IServiceModel} = this.props;

        return <Draggable key={data.id} draggableId={data.id} >
                {
                    (provided, snapshot) => {
                       return  <div 
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps} >
                            <List.Item className="mg-list-item" >
                                <Checkbox checked={data.visibility} className="mg-checkbox"  onChange={this.onChange} />
                                <List.Content className="mg-content" >
                                    <List.Description>{data.name}</List.Description>
                                    <List.List className="mg-sublist">
                                        { this.loadSublayers()}
                                    </List.List>
                                </List.Content>
                            </List.Item>
                        </div>

                    }
                }
            
                
        </Draggable>
    }

    private onChangeSubLayerVisibility(
                                        e: React.FormEvent<HTMLInputElement>,
                                        checkboxProps: CheckboxProps,
                                        layerName: string): void {
        const {onSubLayerVisibilityChange, data} = this.props;
        onSubLayerVisibilityChange(data, layerName, checkboxProps.checked);
    }

    private loadSublayers(): any {

        const {data}: {data: IServiceModel} = this.props;
        const {layers} = data;
        if (Array.isArray(layers) && layers.length > 1) {
            return layers.map((layer) => (
                <List.Item className="mg-sub-layer-item" key={layer.layerName} >
                    <Checkbox checked={layer.visibility} onChange={ (e, cb) => (
                        this.onChangeSubLayerVisibility(e, cb, layer.layerName)
                    )} className="mg-checkbox" />
                    <List.Content className="mg-list-item-content" >
                    <List.Description>{layer.layerName}</List.Description>
                </List.Content>
            </List.Item>));
        }

        return null;
    }

    private onChange(e: React.FormEvent<HTMLInputElement>, checkboxProps: CheckboxProps) {
        const {onVisibilityChange, data} = this.props;
        const changedData = Object.assign({}, data, {visibility: checkboxProps.checked });
        onVisibilityChange(changedData);
    }
}

export default LayerTreeNode;
