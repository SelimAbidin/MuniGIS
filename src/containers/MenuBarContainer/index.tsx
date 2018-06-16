import * as React from "react";
import MenuBar from "../../components/MenuBar/index";

const items: object[] = [
    {
        icon: "fa-file-o",
        items: [
            {label: "New1" },
            {label: "New2"},
            {label: "New3"},
            {label: "New4"},
        ],
        label: "File",

    },
];

const MenuBarContainer = () => (
    <MenuBar items={items} />
);

export default MenuBarContainer;
