import * as React from "react";
import { List } from "semantic-ui-react";
import { IServiceModel } from "../../../../data/serviceModel";
import "./layerTree.scss";
import LayerTreeNode from "./LayerTreeNode";

interface ILayerTreeProps {
    data: any[];
    onNodeChange?: (IServiceModel) => void;
}

class LayerTree extends React.PureComponent<ILayerTreeProps> {

    constructor(p) {
        super(p);
        this.onVisibilityChange = this.onVisibilityChange.bind(this);
    }

    public onVisibilityChange(serviceModel: IServiceModel) {
        const {onNodeChange} = this.props;
        onNodeChange(serviceModel);
    }

    public render() {
        const {data} = this.props;
        return <List className="mg-layer-tree" style={{paddingLeft: "10px"}} >
                {data.map((i, index) =>
                    (<LayerTreeNode onVisibilityChange={this.onVisibilityChange} data={i} key={index} />),
                    )}
            </List>;
    }
}

export default LayerTree;
