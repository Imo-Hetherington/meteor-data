import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Map = ({ meteors, showInfo }) => {
  return (
    <figure id="map">
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#DDD"
                stroke="#FFF"
              />
            ))
          }
        </Geographies>
        {meteors.map(meteor => {
          return (
            <Marker
              key={meteor.name}
              coordinates={[parseInt(meteor.reclong), parseInt(meteor.reclat)]}
              //   onMouseOver={showInfo}
            >
              <circle r={5} fill="#F53" />
            </Marker>
          );
        })}
      </ComposableMap>
    </figure>
  );
};

export default Map;
