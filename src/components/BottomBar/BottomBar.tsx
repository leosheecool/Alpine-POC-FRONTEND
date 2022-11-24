import styles from "./BottomBar.module.scss";
import { ReactComponent as MapSvg } from "assets/vectors/map-location.svg";
import { ReactComponent as SettingsSvg } from "assets/vectors/settings.svg";
import { ReactComponent as HomeSvg } from "assets/vectors/home.svg";
import { NavLink } from "react-router-dom";
import cn from "classnames";

const BottomBar = () => {
  return (
    <div style={{ marginTop: 80 }}>
      <div className={styles.container}>
        <NavLink
          to={"/home"}
          className={({ isActive }) =>
            cn(styles.menuBtn, { [styles.activeLink]: isActive })
          }
        >
          <HomeSvg height={30} width={30} className={styles.icon} />
        </NavLink>

        <NavLink to={"/trips"} className={styles.menuBtn}>
          <MapSvg height={30} width={30} className={styles.icon} />
        </NavLink>

        <NavLink to={"/settings"} className={styles.menuBtn}>
          <SettingsSvg height={30} width={30} className={styles.icon} />
        </NavLink>
      </div>
    </div>
  );
};

export default BottomBar;
