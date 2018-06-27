import "semantic-ui-css/semantic.min.css";
import "./init.css";


import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import {createStore} from "redux";
import Toolbar from "../src/components/UI/Toolbar/";
import ActionBarContainer from "./containers/ActionBarContainer/";
import LayerMenuContainer from "./containers/LayerMenuContainer";
import LocalStorageContainer from "./containers/LocalStorageContainer/LocalStorageContainer";
import OLMap from "./containers/OLMap/";
import UIStateSwitcher from "./containers/UIStateSwitcher/";
import reducer from "./redux/reducers/";



const store = createStore(reducer);
// https://demo.boundlessgeo.com/geoserver/ows
const App = () => (

        <Provider store={store} >
            <Router>
                <React.Fragment>
                    {/* <MenuBarContainer /> */}
                    <Toolbar />
                        <div className="mapContent">
                            <LayerMenuContainer />
                            <OLMap>

                            </OLMap>
                        </div>
                    <ActionBarContainer />
                    <UIStateSwitcher />
                    <LocalStorageContainer />
                    {/* <TestMap /> */}

                </React.Fragment>
            </Router>
        </Provider>
);

render(<App />, document.querySelector("#react-root"));
