import * as React from "react";

interface IStorageProps {
    data: any;
    storeName: string;
}

class LocalStorage extends React.Component<IStorageProps> {

    public render() {
        const {data, storeName} = this.props;
        if (data !== undefined) {
            localStorage.setItem(storeName, data);
        }
        return null;
    }
}

export default LocalStorage;
