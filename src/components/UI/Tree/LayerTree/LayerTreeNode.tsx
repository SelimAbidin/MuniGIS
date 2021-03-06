import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Checkbox, CheckboxProps, Icon, List, Menu } from "semantic-ui-react";
import { IServiceModel } from "../../../../data/serviceModel";
import ContextMenu from "../../ContextMenu";
import ContextListMenu from "../../ContextMenu/ContextListMenu";

export interface ILayerTreeNodeProp {
    data: IServiceModel;
    onVisibilityChange?: (service: IServiceModel) => void;
    requestServiceDelete?: (service: IServiceModel) => void;
    onSubLayerVisibilityChange?: (serviceModel: IServiceModel, layerName: string, visibility: boolean) => void;
}

class LayerTreeNode extends React.Component<ILayerTreeNodeProp> {
    public state: any = {
        isFolded: false,
    };
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onDeleteService = this.onDeleteService.bind(this);
        this.unFoldOnClick = this.unFoldOnClick.bind(this);
        this.onChangeSubLayerVisibility = this.onChangeSubLayerVisibility.bind(this);
    }

    public render() {

        const {data}: {data: IServiceModel} = this.props;
        const {isFolded} = this.state;

        const {layers} = data;
        const hasMoreThanOneLayer = Array.isArray(layers) && layers.length > 1;
        const contextID = "context_" + data.id;
        return <Draggable key={data.id} draggableId={data.id} >
                {
                    (provided, snapshot) => {
                       return  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    tabIndex={undefined}
                                >
                            <ContextMenu id={contextID}>
                            <List.Item className="mg-list-item" >
                                    {this.getFoldIconIfNeeded()}
                                    <Checkbox checked={data.visibility} className="mg-checkbox"  onChange={this.onChange} />
                                    <List.Content className="mg-content" >
                                        <List.Description>{data.name}</List.Description>
                                        {isFolded || !hasMoreThanOneLayer
                                        ? null
                                        : <List.List className="mg-sublist">
                                            { this.loadSublayers()}
                                        </List.List>}
                                    </List.Content>

                            </List.Item>
                            </ContextMenu>

                            <ContextListMenu as={contextID}>
                                <Menu>
                                    <Menu.Item onClick={this.onDeleteService} >Delete Service</Menu.Item>
                                </Menu>
                            </ContextListMenu>
                        </div>;

                    }
                }

        </Draggable>;
    }

    private onDeleteService(e: React.MouseEvent) {
        const {requestServiceDelete, data} = this.props;
        requestServiceDelete(data);
    }

    private unFoldOnClick(e: React.MouseEvent) {
        const {isFolded} = this.state;
        this.setState({isFolded: !isFolded});
    }

    private getFoldIconIfNeeded() {
        const {data}: {data: IServiceModel} = this.props;
        const {layers} = data;
        const {isFolded} = this.state;

        if (Array.isArray(layers) && layers.length > 1) {
            return <div className="mg-node-fold-button" onClick={this.unFoldOnClick} >
                        <Icon name={isFolded ? "plus" : "minus"}/>
                    </div>;
        }
        return null;
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
