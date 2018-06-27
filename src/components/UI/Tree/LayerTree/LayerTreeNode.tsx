import * as React from "react";
import { Checkbox, List } from "semantic-ui-react";

class LayerTreeNode extends React.Component {

    public render() {
        const {children} = this.props;
        return  <List.Item className="mg-list-item" >
                    <Checkbox defaultChecked={true} className="mg-checkbox" />
                    <List.Content className="mg-content" >
                        <List.Description>{children}</List.Description>
                    </List.Content>
            </List.Item>;
    }
}

export default LayerTreeNode;
