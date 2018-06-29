import "semantic-ui-css/semantic.min.css";
import "./init.css";

import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import Toolbar from "../src/components/UI/Toolbar/";
import ActionBarContainer from "./containers/ActionBarContainer/";
import LayerMenuContainer from "./containers/LayerMenuContainer";
import LocalStorageContainer from "./containers/LocalStorageContainer/LocalStorageContainer";
import OLMap from "./containers/OLMap/";
import UIStateSwitcher from "./containers/UIStateSwitcher/";
import {store} from "./data/store";
import { setUIState, STATES } from "./redux/actions/uiState";

const addWMLayer = () => {
    store.dispatch(setUIState(STATES.ADD_WMS_SERVICE));
};

const addVectorLayer = () => {
    store.dispatch(setUIState(STATES.ADD_VECTOR_SERVICE));
};

// https://demo.boundlessgeo.com/geoserver/ows
const App = () => (

        <Provider store={store} >
            <Router>
                <React.Fragment>
                    <Toolbar
                        addWMLayer={addWMLayer}
                        addVectorLayer={addVectorLayer}
                         />
                        <div className="mapContent">
                            <LayerMenuContainer />
                            <OLMap>

                            </OLMap>
                        </div>
                    <ActionBarContainer />
                    <UIStateSwitcher />
                    <LocalStorageContainer />
                </React.Fragment>
            </Router>
        </Provider>
);

render(<App />, document.querySelector("#react-root"));
