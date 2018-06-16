import * as React from 'react'
import {Toolbar} from 'primereact/components/toolbar/Toolbar';
import {Button} from 'primereact/components/button/Button';
import {Tooltip} from 'primereact/components/tooltip/Tooltip';
import {Tree} from 'primereact/components/tree/Tree'
import './layermenu.css'

interface LayerMenuProps {
    onAddServiceClick?:React.MouseEventHandler<HTMLElement>;
    layers:Array<Object>;
}

class LayerMenu extends React.Component<LayerMenuProps, any> {
    
    constructor(props:LayerMenuProps) {
        super(props)
        this.state = {width:200}
    }

    onChange(e:any) { }

    render() {
        let {width} = this.state
        let {onAddServiceClick, layers} = this.props
        return <div className="layerMenu" style={{height:'100%', width:width + 'px'}} >
            <Toolbar className="" >
                <Tooltip for="#layerAddButton" title="Add Service" tooltipPosition="right" />
                <Button id="layerAddButton" onClick={onAddServiceClick} icon="fa-plus" />
            </Toolbar>
            <Tree value={layers} className="layerTree" selectionChange={this.onChange} />
        </div>
    }
}
    

export default LayerMenu