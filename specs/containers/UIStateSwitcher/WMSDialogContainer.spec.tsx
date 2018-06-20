import * as React from "react"
import {assert} from "chai"
import {mount} from "enzyme"
import ConnectedContainer from "../../../src/containers/UIStateSwitcher/WMSDialogContainer"
import {configure} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import TestStore from "../../test_helper/store"

configure({ adapter: new Adapter() });

describe("WMSDialogContainer React Component", () => {


    it('WMSDialogContainer (Connected) mount without error', () => {

        const props ={ store: TestStore }
        let wrap =  mount(
            <ConnectedContainer {...props}  />
        )
    })

    it('WMSDialogContainer(Connected) default geoserver', () => {

        const props ={ store: TestStore }
        let wrap =  mount(
            <ConnectedContainer {...props}  />
        )
    })

})