import * as React from 'react'
import {Menubar} from 'primereact/components/menubar/Menubar'

const MenuBar = ({items} : {items:Array<Object>} ) => <Menubar model={items}/>
export default MenuBar