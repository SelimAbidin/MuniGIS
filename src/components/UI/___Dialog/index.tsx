import * as React from "react";
import * as ReactDOM from "react-dom";
import "./dialog.scss";

class Dialog extends React.PureComponent {

    private background:HTMLElement;
    constructor(props) {
        super(props);
        this.background = document.createElement('div');
        this.background.classList.add("mg-dialog");
    }

    componentDidMount() {
        document.body.appendChild(this.background);
    }

    componentWillUnmount() {
        document.body.removeChild(this.background);
    }

    render() {
        const {children} = this.props;

        return ReactDOM.createPortal(
            <div className="mg-background" />,
            this.background
        )
    }
}

export default Dialog;