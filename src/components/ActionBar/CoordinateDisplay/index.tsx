import * as React from "react";

const CoordinateDisplay = ({lon, lat, srid}: {lon: number, lat: number, srid: string}) => {

    if (lon === undefined || lat === undefined) {
        return null;
    }
    return <div>{srid + " | " + lon.toFixed(3) + " , " + lat.toFixed(3)}</div>;
};

export default CoordinateDisplay;
