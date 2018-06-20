import {assert} from 'chai'
import {createWMSService, SERVICE_ACTIONS, ServiceAction, ServiceModel} from '../../../src/redux/actions/service'

describe('CreateWMS Action Object', () => {
    
    it('CREATE Sucessfully', () => {

        let sampleObject:ServiceModel = {
            name: 'test',
            serviceURL: 'No URL Checking',
            layers: ['testingLayer'],
        };

        let object:ServiceAction = createWMSService(sampleObject.name, sampleObject.serviceURL, sampleObject.layers)

        assert.deepEqual(object.service, sampleObject)
        assert.equal(object.type, SERVICE_ACTIONS.ADD_SERVICE)
    })

})