import * as React from "react";

export default class Layers extends React.Component {

    public state: any = {
        test: 1,
    };

    constructor(props) {
        super(props);
    }

    public componentDidMount() {

        setInterval((e) => {
            this.setState({test: this.state.test + 1});
        }, 1000);
    }

    public render() {
        const {children} = this.props;
        return children;
    }
}
