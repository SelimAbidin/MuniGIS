import * as React from "react";

interface IContectListMenuProps {
    children: React.ReactNode;
    as: string;
}

export default class ContextListMenu extends React.PureComponent<IContectListMenuProps> {

    public state = {
        clickPosition: {
            x: 0,
            y: 0,
        },
        isOpen: false,
    };
    public contextDiv: HTMLElement;
    public mouseOver: boolean = false;
    constructor(props) {
        super(props);
        this.onContextMenu = this.onContextMenu.bind(this);
        this.onOutsideMouseDown = this.onOutsideMouseDown.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
    }

    public componentDidMount() {
        const contextAreaID = this.props.as;
        const contextArea = document.getElementById(contextAreaID);

        if (contextArea) {
            contextArea.addEventListener("contextmenu", this.onContextMenu);
        }
    }

    public componentWillUnmount() {
        const contextAreaID = this.props.as;
        const contextArea = document.getElementById(contextAreaID);
        if (contextArea) {
            contextArea.removeEventListener("contextmenu", this.onContextMenu);
        }
    }

    public onContextMenu(e: MouseEvent) {
        e.preventDefault();
        document.addEventListener("mousedown", this.onOutsideMouseDown);
        this.setState({
            clickPosition: {
            x: e.pageX,
            y: e.pageY,
        },
        isOpen: true,
        });
    }

    public render() {
        const {isOpen, clickPosition} = this.state;
        if (!isOpen) {
            return null;
        }
        const {children} = this.props;
        return <div
                    style={{position: "fixed", top: clickPosition.y + "px", left: clickPosition.x + "px"}}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave} >{children}</div>;
    }

    private onOutsideMouseDown(e: MouseEvent) {

        if (!this.mouseOver) {
            this.setState({isOpen: false});
        }
    }

    private onMouseEnter(e: React.MouseEvent) {
        this.mouseOver = true;
    }

    private onMouseLeave(e: React.MouseEvent) {
        this.mouseOver = false;
    }
}
