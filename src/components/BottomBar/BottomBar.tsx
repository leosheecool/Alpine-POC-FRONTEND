import styles from "./BottomBar.module.scss";
import { ReactComponent as Route } from "assets/vectors/route.svg";
import { ReactComponent as Comment } from "assets/vectors/comment.svg";
import Logo from "assets/vectors/Logo.svg";
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
          <Comment height={30} width={30} className={styles.icon} />
        </NavLink>

        <NavLink to={"/trips"} className={styles.menuBtn}>
          <Route height={30} width={30} className={styles.icon} />
        </NavLink>

        <NavLink to={"/settings"} className={styles.menuBtn}>
          <img src={Logo} alt="logo" className={styles.logo} />
        </NavLink>
      </div>
    </div>
  );
};

export default BottomBar;
