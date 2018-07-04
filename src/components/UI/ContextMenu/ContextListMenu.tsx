import * as React from "react"

interface IContectListMenuProps {
    children: React.ReactNode,
    as:string
}

export default class ContextListMenu extends React.PureComponent<IContectListMenuProps> {

    state = {
        isOpen: false,
        clickPosition: {
            x:0,
            y:0
        }
    }
    contextDiv: HTMLElement;
    mouseOver:boolean = false;
    constructor(props){
        super(props);
        this.onContextMenu = this.onContextMenu.bind(this);
        this.onOutsideMouseDown = this.onOutsideMouseDown.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
    }

    public componentDidMount(){
        const contextAreaID = this.props.as;
        const contextArea = document.getElementById(contextAreaID);
        
        if(contextArea) {
            contextArea.addEventListener("contextmenu", this.onContextMenu);
        }
    }

    componentWillUnmount(){
        const contextAreaID = this.props.as;
        const contextArea = document.getElementById(contextAreaID);
        if(contextArea) {
            contextArea.removeEventListener("contextmenu", this.onContextMenu);
        }
    }

    onContextMenu(e:MouseEvent){
        e.preventDefault();
        document.addEventListener("mousedown", this.onOutsideMouseDown);
        this.setState({isOpen: true, clickPosition: {
            x:e.pageX,
            y:e.pageY
        }});
    }

    public render() {
        const {isOpen, clickPosition} = this.state;
        if(!isOpen) {
            return null;
        }
        const {children} = this.props;
        return <div 
                    style={{position:"fixed", top:clickPosition.y + "px", left:clickPosition.x + "px"}}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave} >{children}</div>
    }

    private onOutsideMouseDown(e:MouseEvent){

        if(!this.mouseOver) {
            this.setState({isOpen:false});
        }
    }

    private onMouseEnter(e:React.MouseEvent) {
        this.mouseOver = true;
    }

    private onMouseLeave(e:React.MouseEvent) {
        this.mouseOver = false;
    }
}