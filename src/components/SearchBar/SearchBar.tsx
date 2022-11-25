import styles from "./SearchBar.module.scss";
import { ReactComponent as SearchSvg } from "assets/vectors/search.svg";
import { ReactComponent as SettingsSvg } from "assets/vectors/settings.svg";
import cn from "classnames";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onClickFilter?: () => void;
};
const SearchBar = ({
  value,
  onChange,
  onClickFilter: handleOnClickFilter,
}: Props) => {
  return (
    <div className={styles.container}>
      <SearchSvg className={styles.icon} />
      <input
        placeholder="Search a trip"
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <SettingsSvg
        className={cn(styles.icon, styles.iconBorder)}
        onClick={handleOnClickFilter}
      />
    </div>
  );
};

export default SearchBar;
