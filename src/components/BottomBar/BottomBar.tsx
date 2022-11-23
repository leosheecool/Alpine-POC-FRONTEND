import styles from "./BottomBar.module.scss";
import { ReactComponent as MapSvg } from "assets/vectors/map-location.svg";
import { ReactComponent as SettingsSvg } from "assets/vectors/settings.svg";
import { ReactComponent as HomeSvg } from "assets/vectors/home.svg";
import { Console } from "console";

const BottomBar = () => {
  const handleClick = () => {
    console?.log("clicked");
  };

  return (
    <div className={styles.container}>
      <button className={styles.menuBtn} onClick={handleClick}>
        <HomeSvg height={30} width={30} />
      </button>

      <button className={styles.menuBtn} onClick={handleClick}>
        <MapSvg height={30} width={30} />
      </button>

      <button className={styles.menuBtn} onClick={handleClick}>
        <SettingsSvg height={30} width={30} />
      </button>
    </div>
  );
};

export default BottomBar;
