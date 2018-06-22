import * as React from "react"


type StorageProps = {
    data:any;
    storeName:string;
}

class LocalStorage extends React.Component<StorageProps> {

    render() {
        const {data, storeName} = this.props
        if(data !== undefined) {
            localStorage.setItem(storeName, data);
        }
        return null
    }
}

export default LocalStorage