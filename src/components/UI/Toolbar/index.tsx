import * as React from "react"
import "./toolbar.scss"


interface IToolbarProps {
    children?:React.ReactNode
}

class Toolbar extends React.Component<IToolbarProps> {
    public render () {
        const {children} = this.props;
        return <div className="mg-toolbar">
        {children}
        </div>
    }
}

export default Toolbar;