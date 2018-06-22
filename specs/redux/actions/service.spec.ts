import {assert} from 'chai'
import {createWMSService, SERVICE_ACTIONS, IServiceAction, IServiceModel} from '../../../src/redux/actions/service'

describe('CreateWMS Action Object', () => {
    
    it('CREATE Sucessfully', () => {

        let sampleObject:IServiceModel = {
            name: 'test',
            serviceURL: 'No URL Checking',
            layers: ['testingLayer'],
        };

        let object:IServiceAction = createWMSService(sampleObject.name, sampleObject.serviceURL, sampleObject.layers)

        assert.deepEqual(object.service, sampleObject)
        assert.equal(object.type, SERVICE_ACTIONS.ADD_SERVICE)
    })

})