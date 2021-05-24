import * as React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";

function App() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapboxApiAccessToken={
          "pk.eyJ1Ijoic25pYXNuaWFzIiwiYSI6ImNrbzR0bzY2bDBraTcycHMyeGdqcnNnaG8ifQ.lNdwz-Dlh4kDA5zhSA_WwA"
        }
      />
    </div>
  );
}

export default App;
