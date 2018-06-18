import {Button} from "primereact/components/button/Button";
import {Dialog} from "primereact/components/dialog/Dialog";
import * as React from "react";

class ModalDialog extends React.Component<any, any> {

    public render() {

        const {onHide, children} = this.props;
        
        const footer = <div>
            <Button label="Yes" icon="fa-check" onClick={onHide} />
            <Button label="No" icon="fa-close" onClick={onHide} />
        </div>;

        return (<div>
                <div className="content-section implementation">
                    <Dialog header="Layer Add"
                            visible={true}
                            width="450px"
                            modal={true}
                            footer={footer}
                            onHide={onHide}>
                       {children}
                    </Dialog>
                </div>
            </div>);
    }

}

export default ModalDialog;
