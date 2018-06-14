import React from 'react'
import {Button} from 'primereact/components/button/Button';
import {Dialog} from 'primereact/components/dialog/Dialog';


class ModalDialog extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {onHide,children} = this.props
        let footer = <div>
            <Button label="Yes" icon="fa-check" onClick={onHide} />
            <Button label="No" icon="fa-close" onClick={onHide} />
        </div>

        return (<div>
                <div className="content-section implementation">
                    <Dialog header="Godfather I" visible={true} width="350px" modal={true} minY={70} footer={footer} onHide={onHide}>
                       {children}
                    </Dialog>
                </div>
            </div>)
    }
    

}


export default ModalDialog