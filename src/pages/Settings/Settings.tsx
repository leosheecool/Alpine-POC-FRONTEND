import { BottomBar } from "components";
import styles from "./Settings.module.scss";
const Settings = () => {
  return (
    <div className={styles.container}>
      <p>Settings</p>
      <BottomBar />
    </div>
  );
};

export default Settings;
