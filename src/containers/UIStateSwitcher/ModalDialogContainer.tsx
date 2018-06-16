import * as React from 'react'
import {connect} from 'react-redux'
import ModalDialog from '../../components/Dialogs/ModalDialog'
import {STATES, setUIState} from '../../redux/actions/uiState'
import {Dropdown} from 'primereact/components/dropdown/Dropdown'



const types = [
    {name: 'New York', code: 'NY', key: 'New York'},
    {name: 'Rome', code: 'RM', key: 'Rome'},
    {name: 'London', code: 'LDN', key: 'London'},
    {name: 'Istanbul', code: 'IST', key: 'Istanbul'},
    {name: 'Paris', code: 'PRS', key: 'Paris'}
];



class ModalDialogContainer extends React.Component<any,any> {

    render () {
        const {onHide} = this.props
        return <ModalDialog visible={true} onHide={onHide} >
                    <div>
                        <Dropdown dataKey="key"  options={types} />
                    </div>
               </ModalDialog>
    }
}

const dispatchToState = (dispatch:Function) => ({
    onHide: () => dispatch(setUIState(STATES.DEFAULT))
})

export default connect(undefined, dispatchToState)(ModalDialogContainer)