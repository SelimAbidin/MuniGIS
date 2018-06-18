import * as React from "react"
import {assert} from "chai"
import {mount} from "enzyme"
import ConnectedContainer, {ModalDialogContainer} from "../../../src/containers/UIStateSwitcher/ModalDialogContainer"
import {configure} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import TestStore from "../../test_helper/store"
import * as sinon from "sinon";

configure({ adapter: new Adapter() });

describe.only("ModalDialogContainer React Component", () => {


    it('ModalDialogContainer (Connected) mount without error', () => {

        const props ={ store: TestStore }
        let wrap =  mount(
            <ConnectedContainer {...props}  />
        )

        let select = wrap.find("select")
        assert.isAbove(select.length, 0)
    })

    it('ModalDialogContainer(Connected) default geoserver', () => {

        const props ={ store: TestStore }
        let wrap =  mount(
            <ConnectedContainer {...props}  />
        )

        let select = wrap.find("select")
        let selectNode:any = select.getDOMNode()
        assert.equal(selectNode.value, "geoserver")
        let serviceURL = wrap.find("[name='serviceURL']")
        assert.equal(serviceURL.length, 1)

    })

    // it("mound without error", () => {
    //     const setForm = sinon.spy(ModalDialogContainer.prototype, "setForm")
    //     let wrap =  mount(
    //         <ModalDialogContainer  />
    //     )
    //     assert.equal(setForm.calledOnce, true);
    // })
    

})