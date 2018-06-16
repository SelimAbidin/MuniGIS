import {connect} from 'react-redux'
import * as React from 'react'
import Map from 'ol/map'
import TileWMS from 'ol/source/TileWMS'
import TileLayer from 'ol/layer/tile'
import XYZ from 'ol/source/xyz'
import View from 'ol/view'
import {setExtent,setCoordinate} from '../../redux/actions/map'
import { withRouter } from "react-router-dom"


interface OlProps {
    mousePointer:any,
    history:any,
    extentChange:Function
}

class OLMap extends React.Component<OlProps, any>  {

    _content:HTMLElement;
    _moved:Boolean;
    _map:any;
    _view:any;
    _currentMousePointer:any;

    constructor(props:any) {
        super(props)
    }

    componentDidMount() {
        let content = this._content
        this._onAnimationFrame = this._onAnimationFrame.bind(this)

        let view = new View({ center: [0, 0], zoom: 2 })
        let map = new Map({
            target: content,
            view,
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    })
                })
            ]
        })
        
        this._map = map
        this._view = view
        this.updateLayers()
        map.on('pointermove', this._onMouseMove.bind(this))
        map.on('moveend', this._onMoveEnd.bind(this))
        this._onAnimationFrame()
    }

    _onAnimationFrame() {

        if(this._moved) {
            const {mousePointer} = this.props
            mousePointer(this._currentMousePointer, this._view.getProjection().getCode())
            this._moved = true
        }
        requestAnimationFrame(this._onAnimationFrame)
    }

    updateLayers() {
        let layer = new TileLayer({
            source: new TileWMS({
              url: 'http://localhost/geoserver/TestWS/wms',
              params: {'LAYERS': 'TestWS:polygon', 'TILED': true},
              serverType: 'geoserver'
            })
        })

        this._map.addLayer(layer)
    }

    _onMouseMove(e) {
        this._moved = true
        this._currentMousePointer = e.coordinate
    }

    _onMoveEnd(e) {
        const {history} = this.props
        const map = this._map
        const view = map.getView()
        const mapExtent = view.calculateExtent(map.getSize())
        const center = view.getCenter()
        const zoom = view.getZoom()
        const adres = [...center, zoom]
        const {extentChange} = this.props 
        history.replace('@' + adres.join(','))
        extentChange(mapExtent, adres)
    }

    _onContextMenu(e) {
        e.preventDefault()
    }

    render() {
        return <div onContextMenu={this._onContextMenu} style={{width:'100%', height:'100%'}} ref={r => this._content = r} ></div>
    }
}

const mapToProps = state => ({

})

const dispatchToState = dispatch => ({
    extentChange: (extent, center) => dispatch( setExtent( extent, center ) ),
    mousePointer: (coordinate, epsg) => dispatch(setCoordinate(coordinate[0],coordinate[1], epsg))
})

export default connect(mapToProps,dispatchToState)(withRouter(OLMap))