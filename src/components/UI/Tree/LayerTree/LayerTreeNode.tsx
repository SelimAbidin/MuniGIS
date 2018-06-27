import * as React from "react";

class LayerTreeNode extends React.Component {

    // public onChange(e) {
    //     onChange={(e) => this.onChange(e)}
    // }

    public render() {
        const {children} = this.props;
        return <li><input type="checkbox" defaultChecked={true}  />{children}</li>;
    }
}

export default LayerTreeNode;
