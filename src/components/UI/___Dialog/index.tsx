import * as React from "react";
import * as ReactDOM from "react-dom";
import "./dialog.scss";

class Dialog extends React.PureComponent {

    private background: HTMLElement;
    constructor(props) {
        super(props);
        this.background = document.createElement("div");
        this.background.classList.add("mg-dialog");
    }

    public componentDidMount() {
        document.body.appendChild(this.background);
    }

    public componentWillUnmount() {
        document.body.removeChild(this.background);
    }

    public render() {
        const {children} = this.props;

        return ReactDOM.createPortal(
            <div className="mg-background" />,
            this.background,
        );
    }
}

export default Dialog;
