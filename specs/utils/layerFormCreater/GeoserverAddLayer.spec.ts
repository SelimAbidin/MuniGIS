import {assert} from 'chai'
import GeoserverAddLayer from '../../../src/utils/layerFormCreater/GeoserverAddLayer'
import IFormComponent from '../../../src/utils/layerFormCreater/IFormComponent'
import {immutable} from '../../../src/utils/immutable'
import { IComponentModel, COMPONENT_TYPES } from '../../../src/utils/dynamicFormComponents/IComponentModel';


describe('GeoserverAddLayer.spec', function () {

    it('Initialized Form Assign Test', (done) => {

        class TestClass implements IFormComponent {
            setForm(obj:Array<IComponentModel>): boolean {
                assert.equal(obj.length, 1)
                assert.equal(obj[0].type, COMPONENT_TYPES.INPUT)
                done();
                return false
            }
        }

        const geo = new GeoserverAddLayer(new TestClass())
    })

} );