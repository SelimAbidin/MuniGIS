import "font-awesome/css/font-awesome.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/omega/theme.css";
import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import {createStore} from "redux";
import ActionBarContainer from "./containers/ActionBarContainer/";
import LayerMenuContainer from "./containers/LayerMenuContainer";
import LocalStorageContainer from "./containers/LocalStorageContainer/LocalStorageContainer";
import MenuBarContainer from "./containers/MenuBarContainer/";
import OLMap from "./containers/OLMap/";
import UIStateSwitcher from "./containers/UIStateSwitcher/";
import "./init.css";
import reducer from "./redux/reducers/";

const store = createStore(reducer);
// https://demo.boundlessgeo.com/geoserver/ows
const App = () => (

        <Provider store={store} >
            <Router>
                <React.Fragment>
                    <MenuBarContainer />
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
