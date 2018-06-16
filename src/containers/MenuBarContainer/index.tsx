import * as React from 'react'
import MenuBar from '../../components/MenuBar/index'

const items:Array<Object> = [
    {
        label:'File',
        icon: 'fa-file-o',
        items: [
            {label: 'New1' },
            {label: 'New2'},
            {label: 'New3'},
            {label: 'New4'},
        ]
    }
]

const MenuBarContainer = () => (
    <MenuBar items={items} />
)

export default MenuBarContainer