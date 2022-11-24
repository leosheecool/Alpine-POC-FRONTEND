import logo from "assets/images/logo.png";
import moreIcon from "assets/icons/bell.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.notificationIcon}
        src={moreIcon}
        alt="notification"
      />
      <img src={logo} className={styles.logo} alt="logo" />
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D03AQGvX9cQRK2yTA/profile-displayphoto-shrink_800_800/0/1611953027407?e=1674691200&v=beta&t=jsXrsh9K17dl6uHBLpNZ2oISLjgDIW_RPwreCn0yFX4"
        className={styles.profileIcon}
        alt="profile"
      />
    </div>
  );
};

export default Header;
