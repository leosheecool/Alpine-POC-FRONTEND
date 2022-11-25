import styles from "./Trips.module.scss";
import { BottomBar, SearchBar, RoadModeSelect, Map } from "components";
import { useState } from "react";
import { roadModeMocked } from "mocked/roadMode";
import { mockedSearchResults } from "mocked/trip";

const Trips = () => {
  const [roadOptions, setRoadOptions] = useState(roadModeMocked);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<
    typeof mockedSearchResults
  >([]);

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

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchResults(mockedSearchResults);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <form onSubmit={handleSubmitForm}>
          <SearchBar value={searchValue} onChange={handleChangeSearchValue} />
          <RoadModeSelect
            options={roadOptions}
            onChange={handleChangeRoadOption}
          />
        </form>
      </div>
      <Map results={searchResults} />
      <BottomBar />
    </div>
  );
};

export default Trips;
