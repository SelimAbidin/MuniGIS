import * as React from "react";
// import 'rc-tree/assets/index.css';
import "./layerTree.scss"
import LayerTreeNode from "./LayerTreeNode"

interface LayerTreeProps {
    data:Array<any>;
}

class Tree extends React.PureComponent<LayerTreeProps> {

		render () {
            const {data} = this.props;
			return <ul className="mg-layer-tree">
                {data.map((i,index)=> (<LayerTreeNode key={index}>{i.name}</LayerTreeNode>))}
			</ul>
		
		}
}

export default Tree;