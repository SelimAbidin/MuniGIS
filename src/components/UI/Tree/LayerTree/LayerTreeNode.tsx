import * as React from "react"

class LayerTreeNode extends React.Component {
    
    onChange(e) {

    }

    render() {
        let {children} = this.props;
        return <li><input type="checkbox" defaultChecked={true} onChange={e => this.onChange(e)} />{children}</li>
    }
}

export default LayerTreeNode
