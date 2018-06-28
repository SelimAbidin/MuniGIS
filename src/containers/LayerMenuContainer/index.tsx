import * as React from "react";
import "./layermenu.scss";
import TreeContainer from "./TreeContainer";

class LayerMenuContainer extends React.Component<any, any> {
    public render() {
        return <div className="mg-layer-menu" style={{height: "100%", width: 200  + "px", borderRight: "solid 1px"}} >
            <TreeContainer />
        </div>;
    }
}

export default LayerMenuContainer;
