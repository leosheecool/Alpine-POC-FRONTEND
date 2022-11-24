import styles from "./Trips.module.scss";
import { BottomBar, TripMap, SearchBar, RoadModeSelect } from "components";
import { useState } from "react";
import { roadModeMocked } from "mocked/roadMode";

const Trips = () => {
  const [roadOptions, setRoadOptions] = useState(roadModeMocked);
  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearchValue = (value: string) => {
    setSearchValue(value);
  };

  const handleChangeRoadOption = (optionSelected: string) => {
    const newOptions = roadOptions.map((option) => {
      return {
        ...option,
        isActive: option.value === optionSelected,
      };
    });
    setRoadOptions(newOptions);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.header}>
        <SearchBar value={searchValue} onChange={handleChangeSearchValue} />
        <RoadModeSelect
          options={roadOptions}
          onChange={handleChangeRoadOption}
        />
      </div>
      <TripMap />
      <BottomBar />
    </div>
  );
};

export default Trips;
