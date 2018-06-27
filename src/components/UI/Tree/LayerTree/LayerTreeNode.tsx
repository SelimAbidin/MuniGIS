import * as React from "react";
import { Checkbox, CheckboxProps, List } from "semantic-ui-react";
import { IServiceModel } from "../../../../data/serviceModel";

export interface ILayerTreeNodeProp {
    data: IServiceModel;
    onVisibilityChange?: (service: IServiceModel) => void;

}

class LayerTreeNode extends React.Component<ILayerTreeNodeProp> {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    public onChange(e: React.FormEvent<HTMLInputElement>, checkboxProps: CheckboxProps) {
        const {onVisibilityChange, data} = this.props;
        const changedData = Object.assign({}, data, {visibility: checkboxProps.checked });
        onVisibilityChange(changedData);
    }

    public render() {
        const {data}: {data: IServiceModel} = this.props;
        return  <List.Item className="mg-list-item" >
                    <Checkbox checked={data.visibility} className="mg-checkbox"  onChange={this.onChange} />
                    <List.Content className="mg-content" >
                        <List.Description>{data.name}</List.Description>
                    </List.Content>
            </List.Item>;
    }
}

export default LayerTreeNode;
