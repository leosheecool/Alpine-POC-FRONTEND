import styles from "./Trips.module.scss";
import {
  BottomBar,
  SearchBar,
  RoadModeSelect,
  Map,
  TripCard,
} from "components";
import { useState } from "react";
import { roadModeMocked } from "mocked/roadMode";
import { mockedSearchResults } from "mocked/trip";
import Modal from "react-modal";
import { filtersMapMocked } from "mocked/filtersMap";
import Sheet from "react-modal-sheet";
import { mockedData } from "mocked/trip";

type Filter = {
  id: number;
  name: string;
  isActive: boolean;
};

const Trips = () => {
  const [roadOptions, setRoadOptions] = useState(roadModeMocked);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<
    typeof mockedSearchResults
  >([]);
  const [modal, setModal] = useState({
    isOpen: false,
    filters: filtersMapMocked,
  });
  const [sheetModal, setSheetModal] = useState({ isOpen: true });

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

  const closeModal = () => setModal((prev) => ({ ...prev, isOpen: false }));

  const handleFilterClick = (filterTarget: Filter) => {
    const newFilters = modal.filters.map((filter) =>
      filter.name !== filterTarget.name
        ? filter
        : { ...filter, isActive: !filter.isActive }
    );

    setModal((prev) => ({ ...prev, filters: newFilters }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <form onSubmit={handleSubmitForm}>
          <SearchBar
            value={searchValue}
            onChange={handleChangeSearchValue}
            onClickFilter={() =>
              setModal((prev) => ({ ...prev, isOpen: !prev.isOpen }))
            }
          />
          <RoadModeSelect
            options={roadOptions}
            onChange={handleChangeRoadOption}
          />
        </form>
      </div>
      <div
        className={styles.sheetBtn}
        onClick={() => setSheetModal((prev) => ({ ...prev, isOpen: true }))}
      >
        <p className={styles.subTitle}>Show Trips</p>
      </div>
      <Map results={searchResults} />
      <BottomBar />
      <Modal
        isOpen={modal.isOpen}
        className={styles.modal}
        onRequestClose={closeModal}
      >
        <h2 className={styles.modalTitle}>Filtres</h2>

        <div className={styles.modalContent}>
          {modal.filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <>
                <Icon height={20} width={20} style={{ marginRight: 20 }} />
                <label
                  className={styles.modalFilterTitle}
                  htmlFor={filter.name}
                >
                  {filter.name}
                </label>
                <input
                  type="checkbox"
                  id={filter.name}
                  name={filter.name}
                  checked={filter.isActive}
                  onChange={() => handleFilterClick(filter)}
                />
              </>
            );
          })}
        </div>
      </Modal>
      <Sheet
        isOpen={sheetModal.isOpen}
        onClose={() => setSheetModal((prev) => ({ ...prev, isOpen: false }))}
        snapPoints={[
          1300, 1100, 950, 800, 700, 600, 500, 400, 300, 200, 100, 0,
        ]}
        initialSnap={1}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className={styles.sheetContent}>
              {mockedData.trips.map((trip) => (
                <TripCard trip={trip} key={trip.id} />
              ))}
            </div>
          </Sheet.Content>
        </Sheet.Container>
        {/* <Sheet.Backdrop /> */}
      </Sheet>
    </div>
  );
};

export default Trips;
