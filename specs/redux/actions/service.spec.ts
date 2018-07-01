import {assert} from 'chai'
import {createWMSService, SERVICE_ACTIONS, IServiceAction} from '../../../src/redux/actions/service'
import { IServiceModel, SERVICE_TYPE } from '../../../src/data/serviceModel';

describe('CreateWMS Action Object', () => {
    
    it('CREATE Sucessfully', () => {

        let sampleObject:IServiceModel = {
            name: 'test',
            serviceURL: 'No URL Checking',
            layers: [{layerName:"testingLayer", visibility:false}],
            visibility: true,
            serviceType:SERVICE_TYPE.GEOSERVER_WMS,
            id:new Date().getTime()
        }

        let object:IServiceAction = createWMSService(sampleObject.name, sampleObject.serviceURL, sampleObject.layers)

        assert.deepEqual(object.service, sampleObject)
        assert.equal(object.type, SERVICE_ACTIONS.ADD_WMS_SERVICE)
    })

})