import * as React from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";
import "./toolbar.scss";
interface IToolbarProps {
    addWMLayer: (e: React.MouseEvent<HTMLDivElement>) => void;
    addVectorLayer: (e: React.MouseEvent<HTMLDivElement>) => void;
}

class Toolbar extends React.Component<IToolbarProps> {
    public render() {
        const {addWMLayer, addVectorLayer} = this.props;
        return <Menu size="mini" className="mg-toolbar">
                <Dropdown item text="File">
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={(e) => alert("No implemented yet!") }>Save</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => alert("No implemented yet!") }>Read</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown item text="Layers">
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={addVectorLayer} >ADD Vector Layer</Dropdown.Item>
                        <Dropdown.Item onClick={addWMLayer} >ADD WMS LAYER</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Menu.Menu position="right">
                    <Menu.Item>
                        <Button primary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>;
    }

}

export default Toolbar;
