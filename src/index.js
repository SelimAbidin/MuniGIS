import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import MenuBarContainer from './containers/MenuBarContainer/index.jsx'
import OLMap from './containers/OLMap/index.jsx'
import reducer from './redux/reducers/'
import ActionBarContainer from './containers/ActionBarContainer/index.jsx'
import { HashRouter as Router, Route } from 'react-router-dom'


import './init.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/omega/theme.css'
import 'font-awesome/css/font-awesome.css'

const store = createStore(reducer)

const App = () => (
        <Provider store={store} >
            <Router>
                <React.Fragment>
                    <MenuBarContainer />
                        <div className="mapContent">
                        <div id="layer" style={{height:'100%', width:'100px'}} >Layer</div>
                            <OLMap />
                        </div>
                    <ActionBarContainer />
                </React.Fragment>
            </Router>
        </Provider>
)

render(<App />, document.querySelector('#react-root'))