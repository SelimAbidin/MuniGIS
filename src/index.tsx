import * as React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import MenuBarContainer from './containers/MenuBarContainer/'
import { HashRouter as Router } from 'react-router-dom'
import OLMap from './containers/OLMap/'
import reducer from './redux/reducers/'
import ActionBarContainer from './containers/ActionBarContainer/index.jsx'
import LayerMenuContainer from './containers/LayerMenuContainer'
import UIStateSwitcher from './containers/UIStateSwitcher/index.js';

import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/omega/theme.css'
import 'font-awesome/css/font-awesome.css'
import './init.css'

const store = createStore(reducer)




const App = () => (

        <Provider store={store} >
            <Router>
                <React.Fragment>
                    <MenuBarContainer />
                        <div className="mapContent">
                            <LayerMenuContainer />
                            <OLMap />
                        </div>
                    <ActionBarContainer />

                    <UIStateSwitcher />

                </React.Fragment>
            </Router>
        </Provider>
)

render(<App />, document.querySelector('#react-root'))