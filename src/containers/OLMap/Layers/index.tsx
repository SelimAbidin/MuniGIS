import * as React from "react"



export default class Layers extends React.Component {

    state:any = {
        test:1
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    
        setInterval(e => {
            this.setState({test: this.state.test + 1})
        }, 1000)
    }

    render() {
        let {children} = this.props
        return children
    }
}