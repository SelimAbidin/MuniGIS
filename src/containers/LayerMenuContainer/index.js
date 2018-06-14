import React from 'react'
import LayerMenu from '../../components/LayerMenu';
import {connect} from 'react-redux'
import {setUIState, STATES} from '../../redux/actions/uiState'

const mapLayerData = (layers) => {
    return layers.map(i => ({
        label: i.name,
        data: i.name,
    }))
}

class LayerMenuContainer extends React.Component {

    constructor() {
        super()
    }

    render () {
        const {layers,onAddServiceClick} = this.props
        const mappedLayerData = mapLayerData(layers)
        return <LayerMenu layers={mappedLayerData} onAddServiceClick={onAddServiceClick} />
    }
}



const mapToProps = state => ({
    layers: state.layers
})

const dispatchToState = dispatch => ({
    onAddServiceClick : e => dispatch(setUIState(STATES.ADD_SERVICE))
})

export default connect(mapToProps, dispatchToState)(LayerMenuContainer)