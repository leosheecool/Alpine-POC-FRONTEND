import { Map } from "components";
import MusicPlayer from "components/MusicPlayer/MusicPlayer";
import { mockedTrip } from "mocked/trip";
import React from "react";
import styles from "./Tripmap.module.scss";

const Tripmap = () => {
  return (
    <div className={styles.container}>
      <MusicPlayer playlists={mockedTrip.playlists} />
      <Map
        // results={hotelsToDisplay
        // 	.filter((hotel) => hotel.coordinate)
        // 	.map((hotel) => ({
        // 		coordinates: hotel.coordinate,
        // 		name: hotel.name,
        // 		address: hotel.address.streetAddress,
        // 	}))}
        // selectedWaypoints={selectedLocations?.map((hotel) => [
        //   hotel.coordinate.lon,
        //   hotel.coordinate.lat,
        // ])}
        results={mockedTrip.route}
      />
    </div>
  );
};

export default Tripmap;
