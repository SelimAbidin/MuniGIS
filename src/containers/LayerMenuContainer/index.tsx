import * as React from 'react'
import LayerMenu from '../../components/LayerMenu';
import {connect} from 'react-redux'
import {setUIState, STATES} from '../../redux/actions/uiState'

const mapLayerData = (layers:Array<Object>) => {
    return layers.map((i:any) => ({
        label: i.name,
        data: i.name,
    }))
}

class LayerMenuContainer extends React.Component<any,any> {

    render () {
        const {layers,onAddServiceClick} = this.props
        const mappedLayerData = mapLayerData(layers)
        return <LayerMenu layers={mappedLayerData} onAddServiceClick={onAddServiceClick} />
    }
}

const mapToProps = (state:any) => ({
    layers: state.layers
})

const dispatchToState = (dispatch:Function) => ({
    onAddServiceClick : () => dispatch(setUIState(STATES.ADD_SERVICE))
})

export default connect(mapToProps, dispatchToState)(LayerMenuContainer)