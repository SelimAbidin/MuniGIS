import React from 'react'
import {Toolbar} from 'primereact/components/toolbar/Toolbar';
import {Button} from 'primereact/components/button/Button';
import {Tooltip} from 'primereact/components/tooltip/Tooltip';
import {Tree} from 'primereact/components/tree/Tree'
import './layermenu.css'

class LayerMenu extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {width:200}
    }

    render() {
        let {width} = this.state
        let {onAddServiceClick, layers} = this.props
        // console.log(layers);
        
        return <div className="layerMenu" style={{height:'100%', width:width + 'px'}} >
            <Toolbar className="" >
                <Tooltip for="#layerAddButton" title="Add Service" tooltipPosition="right" />
                <Button id="layerAddButton" onClick={onAddServiceClick} icon="fa-plus" />
            </Toolbar>
            <Tree value={layers} className="layerTree" />
        </div>
    }
}
    

export default LayerMenu