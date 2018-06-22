import {assert} from "chai";
import { createWMSService, IServiceAction } from "../../../src/redux/actions/service";
import {services} from "../../../src/redux/reducers/services"
import * as deepFreeze from 'deep-freeze'

describe.only('AddService', () => {

    let serviceName:string = "ServiceName"
    let mockServiceURL:string = "Belive or not i am a URL"
    let layers:string[] = ['String']

    it('should return initial state (Empty Array) ', () => {

       let initialState = services(undefined, {} as IServiceAction);
       assert.isArray(initialState);
       assert.equal(initialState.length, 0);
    })

    it('should return with added service', () => {

        let object:IServiceAction = createWMSService(serviceName, mockServiceURL, layers);
        let servicesState = services(undefined, object);
        assert.isArray(servicesState);
        assert.equal(servicesState.length, 1);
    })
    

    it('state should not allow mutation', () => {

        let initialState = []
        let object:IServiceAction = createWMSService(serviceName, mockServiceURL, layers);
        deepFreeze(initialState)
        deepFreeze(object)

        let servicesState = services(initialState, object);
        assert.equal(servicesState.length, 1)
        assert.notEqual(servicesState[0], object.service)
        assert.deepEqual(servicesState[0], object.service)

    })

})