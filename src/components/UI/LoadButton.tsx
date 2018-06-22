import * as React from "react"
import {Button} from 'primereact/components/button/Button';
import {ProgressSpinner} from 'primereact/components/progressspinner/ProgressSpinner';
import "./loadingButton.css"

enum ButtonStates {
    DEFAULT = "DEFAULT",
    FAIL = "FAIL",
    LOADING = "LOADING"
}

export default class LoadButton extends React.Component<any, any> {

    constructor(props) {
        super(props)
        this.state = {
            buttonState: ButtonStates.DEFAULT
        }
    }

    setLoading(){
        this.setState({buttonState:ButtonStates.LOADING})            
    }

    setFailed(){
        this.setState({buttonState:ButtonStates.FAIL})            
    }

    setDefault(){
        this.setState({buttonState:ButtonStates.DEFAULT})            
    }

    render() {
        const {buttonState} = this.state
        let style = ""
        let icon = ""
        let disabled = false
        if(buttonState === ButtonStates.FAIL) {
            style = "ui-button-danger"
            icon = "fas fa-exclamation"
        }

        if(buttonState === ButtonStates.LOADING) {
            icon = "fas fa-spinner"
            style = "loading-button"
            disabled = true;
        }

        const {label} = this.props
        return <Button {...this.props} className={style} disabled={disabled}  icon={icon} >
        </Button>
    }
}