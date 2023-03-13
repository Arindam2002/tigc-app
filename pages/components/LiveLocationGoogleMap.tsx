import React from 'react'
import { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const LiveLocationGoogleMap = () => {

    const [map, setMap] = useState(null);
    const [currentPosition, setCurrentPosition] = useState(null);
    

  return (
    <div>LiveLocationGoogleMap</div>
  )
}

export default LiveLocationGoogleMap