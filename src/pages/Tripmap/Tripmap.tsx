import { Map } from "components";
import MusicPlayer from "components/MusicPlayer/MusicPlayer";
import React from "react";
import styles from "./Tripmap.module.scss";

const Tripmap = () => {
  const mockedTrip = {
    route: [
      {
        coordinates: { lat: 46.13797, lon: 6.110138 },
        address: "Rue de la Gare 1, 1003 Lausanne, Switzerland",
        name: "Lausanne",
      },
      {
        coordinates: { lat: 46.140235, lon: 6.10727 },
      },
      {
        coordinates: { lat: 46.13953, lon: 6.104598 },
      },
      {
        image: "https://static.freeimages.com/images/home/filetypes/photo.png",
        coordinates: { lat: 46.13953, lon: 6.104598 },
      },
      {
        address: "Rue de la Gare 1, 1003 Lausanne, Switzerland",
        name: "Lausanne",
        coordinates: { lat: 46.142512, lon: 6.098811 },
        // [46.140235, 6.10727],
      },
      // [46.13797, 6.110138],
      // [46.140235, 6.10727],
      // [46.142512, 6.098811],
    ],
    playlist: {
      deezer: "https://www.deezer.com/en/playlist/1060000000",
      spotify: "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M",
    },
  };

  return (
    <div className={styles.container}>
      <MusicPlayer playlists={mockedTrip.playlist} />
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
