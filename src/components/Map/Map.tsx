// sonarlint-disable-file
import React, { useCallback, useMemo, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import styles from "./Map.module.scss";
import getCenter from "geolib/es/getCenter";
// import pictureIcon from "assets/icons/picture.png";
// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
// @ts-ignore
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "./MapCustom.css";

type Result = {
  coordinates: {
    lat: number;
    lon: number;
  };
  address?: string;
  name?: string;
  image?: string;
};

type Props = {
  results?: Result[];
  center?: mapboxgl.LngLatLike;
  selectedWaypoints?: mapboxgl.LngLatLike[];
  zoom?: number;
  hasDirectionIndications?: boolean;
};

const Map = ({
  results,
  center,
  selectedWaypoints,
  zoom = 9,
  hasDirectionIndications = true,
}: Props) => {
  const mapNode = useRef(null);

  const coordinates = useMemo(
    () =>
      results?.map((result) => result.coordinates || { lng: 0, lat: 0 }) || [],
    [results]
  );
  const globalCenter = useMemo(() => {
    return coordinates ? getCenter(coordinates) : { longitude: 0, latitude: 0 };
  }, [coordinates]);

  const directions = useMemo(
    () =>
      new MapboxDirections({
        accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
        unit: "metric",
        profile: "mapbox/driving",
      }),
    []
  );

  const onLoad = useCallback(
    (mapboxMap: mapboxgl.Map, resultsData: Result[]) => {
      mapboxMap.addSource("places", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: resultsData
            .filter((el) => el.name)
            .map((result) => ({
              type: "Feature",
              properties: {
                description: `<strong>${result.name}</strong><p>${result.address}</p>`,
              },
              geometry: {
                type: "Point",
                coordinates: [result.coordinates.lon, result.coordinates.lat],
              },
            })),
        },
      });
      mapboxMap.addLayer({
        id: "places",
        type: "circle",
        source: "places",
        paint: {
          "circle-color": "#4264fb",
          "circle-radius": 6,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ffffff",
        },
      });
      // mapboxMap.loadImage(pictureIcon, (error, image) => {
      //   if (error) throw error;
      //   mapboxMap.addImage("custom-marker", image as any);
      //   mapboxMap.addSource("pictures", {
      //     type: "geojson",
      //     data: {
      //       type: "FeatureCollection",
      //       features:
      //         results
      //           ?.filter((el) => el.image)
      //           .map((result) => ({
      //             type: "Feature",
      //             properties: {
      //               description: `<img src="${result.image}" alt="road trip image"/>`,
      //             },
      //             geometry: {
      //               type: "Point",
      //               coordinates: [
      //                 result.coordinates.lon,
      //                 result.coordinates.lat,
      //               ],
      //             },
      //           })) || [],
      //     },
      //   });
      //   mapboxMap.addLayer({
      //     id: "pictures",
      //     type: "symbol",
      //     source: "pictures",
      //     layout: {
      //       "icon-image": "custom-marker",
      //       // get the title name from the source's "title" property
      //       // "text-field": ["get", "title"],
      //       // "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      //       // "text-offset": [0, 1.25],
      //       // "text-anchor": "top",
      //     },
      //   });
      // });

      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      mapboxMap.on("mouseenter", "places", (e) => {
        if (!e?.features) return;
        mapboxMap.getCanvas().style.cursor = "pointer";

        let coordinatesPts: number[] | undefined = undefined;
        if (e.features[0].geometry.type === "Point") {
          coordinatesPts = e.features[0].geometry.coordinates.slice();
        }
        const description = e.features[0].properties?.description;
        if (!coordinatesPts || !description) return;
        while (Math.abs(e.lngLat.lng - coordinatesPts[0]) > 180) {
          coordinatesPts[0] += e.lngLat.lng > coordinatesPts[0] ? 360 : -360;
        }

        popup
          .setLngLat(coordinatesPts as [number, number])
          .setHTML(description)
          .addTo(mapboxMap);
      });

      mapboxMap.on("mouseleave", "places", () => {
        mapboxMap.getCanvas().style.cursor = "";
        popup.remove();
      });
      if (!results || results?.length < 2) return;
      directions.setOrigin([
        results[0].coordinates.lon,
        results[0].coordinates.lat,
      ]);
      const waypointsLength = results.length;
      for (let i = 1; i < waypointsLength - 1; i++) {
        directions.addWaypoint(i, [
          results[i].coordinates.lon,
          results[i].coordinates.lat,
        ]);
      }
      directions.setDestination([
        results[waypointsLength - 1].coordinates.lon,
        results[waypointsLength - 1].coordinates.lat,
      ]);
    },
    [results, directions]
  );

  React.useEffect(() => {
    const node = mapNode.current;
    if (typeof window === "undefined" || node === null) return;
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center:
        center || !globalCenter
          ? [0, 0]
          : [globalCenter.longitude, globalCenter.latitude],
      zoom,
    });

    if (!results) return;
    mapboxMap.addControl(directions, "top-left");
    const control = document.getElementsByClassName(
      "mapboxgl-control-container"
    )[0];
    if (!hasDirectionIndications) {
      try {
        control?.classList.add(styles.hideDirection);
      } catch {}
    }
    mapboxMap.on("load", () => onLoad(mapboxMap, results));

    return () => {
      mapboxMap.remove();
    };
  }, [
    center,
    globalCenter,
    results,
    onLoad,
    directions,
    zoom,
    selectedWaypoints,
    hasDirectionIndications,
  ]);

  return (
    <>
      <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.0.2/mapbox-gl-directions.js"></script>
      <link
        rel="stylesheet"
        href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.0.2/mapbox-gl-directions.css"
        type="text/css"
      />
      <div ref={mapNode} className={styles.container}></div>
    </>
  );
};

export default Map;
