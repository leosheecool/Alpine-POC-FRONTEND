import styles from "./BottomBar.module.scss";
import { ReactComponent as MapSvg } from "assets/vectors/map-location.svg";
import { ReactComponent as SettingsSvg } from "assets/vectors/settings.svg";
import { ReactComponent as HomeSvg } from "assets/vectors/home.svg";
import { Link } from "react-router-dom";
const BottomBar = () => {
  return (
    <div className={styles.container}>
      <Link to={"/home"} className={styles.menuBtn}>
        <HomeSvg height={30} width={30} />
      </Link>

      <Link to={"/trips"} className={styles.menuBtn}>
        <MapSvg height={30} width={30} />
      </Link>

      <Link to={"/settings"} className={styles.menuBtn}>
        <SettingsSvg height={30} width={30} />
      </Link>
    </div>
  );
};

export default BottomBar;
