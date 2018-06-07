import React from 'react'
import MenuBar from '../../components/MenuBar/index.jsx'

const items = [
    {
        label:'File',
        icon: 'fa-file-o',
        items: [
            {label: 'New1', command: function (params) {
                console.log('dddd');
            }},
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