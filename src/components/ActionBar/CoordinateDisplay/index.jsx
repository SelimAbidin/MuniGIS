import React from 'react'

const CoordinateDisplay = ({lon, lat, srid}) => {

    if(lon === undefined || lat === undefined) {
        return null
    }
    return <div>{srid + ' | ' + lon.toFixed(3) +' , '+ lat.toFixed(3)}</div>
}

export default CoordinateDisplay