import * as React from "react";
import { List } from "semantic-ui-react";
import { IServiceModel } from "../../../../data/serviceModel";
import "./layerTree.scss";
import LayerTreeNode from "./LayerTreeNode";

interface ILayerTreeProps {
    data: any[];
    onNodeChange: (IServiceModel: IServiceModel) => void;
    onSubNodeChange: (IServiceModel: IServiceModel, layerName: string, visibility: boolean) => void;
}

class LayerTree extends React.PureComponent<ILayerTreeProps> {

    constructor(p) {
        super(p);
        this.onVisibilityChange = this.onVisibilityChange.bind(this);
        this.onSubLayerVisibilityChange = this.onSubLayerVisibilityChange.bind(this);
    }

    public render() {
        const {data} = this.props;
        return <List className="mg-layer-tree" style={{paddingLeft: "10px"}} >
                {data.map((i, index) =>
                    (<LayerTreeNode
                        onSubLayerVisibilityChange={this.onSubLayerVisibilityChange}
                        onVisibilityChange={this.onVisibilityChange}
                        data={i}
                        key={index} />),
                    )}
            </List>;
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
