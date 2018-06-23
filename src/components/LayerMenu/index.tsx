import {Button} from "primereact/components/button/Button";
import {Tooltip} from "primereact/components/tooltip/Tooltip";
import {Tree} from "primereact/components/tree/Tree";
import * as React from "react";
import "./layermenu.css";
import Toolbar from "../UI/Toolbar";

interface ILayerMenuProps {
    onAddServiceClick?: React.MouseEventHandler<HTMLElement>;
    layers: object[];
}

class LayerMenu extends React.Component<ILayerMenuProps, any> {

    constructor(props: ILayerMenuProps) {
        super(props);
        this.state = {width: 200};
    }

    public onChange(e: any) {
        throw new Error("not implemeted");
    }

    public render() {
        const {width} = this.state;
        const {onAddServiceClick, layers} = this.props;
        return <div className="layerMenu" style={{height: "100%", width: width + "px"}} >
            <Toolbar >
                <Tooltip for="#layerAddButton" title="Add Service" tooltipPosition="right" />
                <Button id="layerAddButton" onClick={onAddServiceClick} icon="fa-plus" />
            </Toolbar>
            <Tree value={layers} className="layerTree" selectionChange={this.onChange} />
        </div>;
    }
}

export default LayerMenu;
