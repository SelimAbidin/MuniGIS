import * as React from "react";
import { List } from "semantic-ui-react";
import "./layerTree.scss";
import LayerTreeNode from "./LayerTreeNode";

interface ILayerTreeProps {
    data: any[];
}

class Tree extends React.PureComponent<ILayerTreeProps> {

    public render() {
        const {data} = this.props;
        return <List className="mg-layer-tree" style={{paddingLeft: "10px"}} >
                {data.map((i, index) => (<LayerTreeNode key={index}>{i.name}</LayerTreeNode>))}
            </List>;
    }
}

export default Tree;
