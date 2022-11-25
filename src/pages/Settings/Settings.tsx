import { BottomBar } from "components";
import Modal from "components/Modal/Modal";
import styles from "./Settings.module.scss";
import { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import brakes from "assets/icons/brakes.png";
import engineCoolant from "assets/icons/engine-coolant.png";
import warning from "assets/vectors/warning.svg";

const Settings = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [color, setColor] = useColor("hex", "#121212");
  const [selectedPresetColor, setSelectedPresetColor] = useState("#0000ff");
  const [selectedMode, setSelectedMode] = useState<"preset" | "custom">(
    "preset"
  );

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(false);
    setIsValid(true);
  };

  const mockedCarInfo = {
    Model: "A110",
    Color: "Blue",
    Plate: "AB-123-CD",
  };

  return (
    <div className={styles.container}>
      <Modal
        title="This part is exclusive to Alpine cars' owner."
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        fitContent
      >
        <p>
          To access to this content, please enter one of your Alpine cars'
          Serial number
        </p>
        <form onSubmit={handleSubmitForm}>
          <label htmlFor="#Serial-number-input">Serial number:</label>
          <input
            id="Serial-number-input"
            type="text"
            // pattern="^[A-Z]{2}[-][0-9]{3}[-][A-Z]{2}$"
          />
        </form>
      </Modal>
      {isValid && (
        <div>
          <h2>Welcome Léo !</h2>
          <div className={styles.carInfo}>
            {Object.entries(mockedCarInfo).map(([key, value]) => (
              <div key={key}>
                <p className={styles.carInfoTitle}>{key}</p>
                <p className={styles.carInfoValue}>{value}</p>
              </div>
            ))}
          </div>
          <img
            src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/alpine-a110icon.png"
            alt="car"
            className={styles.carImg}
          />
          <div className={styles.carInfo}>
            <div className={styles.carStat}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/115/115101.png"
                alt="fuel pump"
                height={24}
              />
              <span>324km left</span>
            </div>
            <div className={styles.carStat}>
              <img
                src="https://visualpharm.com/assets/647/Counter-595b40b75ba036ed117d5a86.svg"
                alt="counter"
                height={24}
              />
              <span>65 218kms</span>
            </div>
          </div>
          {/* Kilometrage + essence */}
          <h3 className={styles.subtitle}>Customization</h3>
          <p>Choose your interior car's light:</p>

          <div className={styles.radioInputContainer}>
            <label htmlFor="preset" className={styles.label}>
              Presets
              <input
                id="preset"
                type="radio"
                value="preset"
                className={styles.radioInput}
                checked={selectedMode === "preset"}
                onChange={() => setSelectedMode("preset")}
              />
              <span className={styles.radioBtn} />
            </label>
            <label htmlFor="custom" className={styles.label}>
              Custom
              <input
                id="custom"
                type="radio"
                value="custom"
                className={styles.radioInput}
                checked={selectedMode === "custom"}
                onChange={() => setSelectedMode("custom")}
              />
              <span className={styles.radioBtn} />
            </label>
          </div>
          {selectedMode === "custom" ? (
            <ColorPicker
              width={350}
              height={110}
              color={color}
              onChange={setColor}
              hideHSV
              hideRGB
              dark
            />
          ) : (
            <div className={styles.presetColorContainer}>
              {[
                "#0000ff",
                "#f5f5f5",
                "#ff0000",
                "#00a500",
                "#ff8100",
                "#a503a5",
              ].map((presetColor) => (
                <div
                  className={styles.presetColor}
                  style={{ backgroundColor: presetColor }}
                  onClick={() => setSelectedPresetColor(presetColor)}
                >
                  {selectedPresetColor === presetColor && (
                    <div className={styles.colorSelectedBadge} />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* list next part to check */}
          <h3 className={styles.subtitle}>Parts to check</h3>
          <div>
            <div className={styles.partToCheckContainer}>
              <img src={brakes} alt="brakes" className={styles.partImg} />
              <div className={styles.partInfo}>
                <p>Brakes</p>
                <img
                  src={warning}
                  alt="warning"
                  className={styles.warningIcon}
                />
              </div>
            </div>
            <div className={styles.partToCheckContainer}>
              <img
                src={engineCoolant}
                alt="brakes"
                className={styles.partImg}
              />
              <div className={styles.partInfo}>
                <p>Engine coolant</p>
                <img
                  src="https://www.pngkey.com/png/full/10-108118_warning-sign-font-awesome-red-warning-flat-icon.png"
                  alt="warning"
                  className={styles.warningIcon}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <BottomBar />
    </div>
  );
};

export default Settings;
