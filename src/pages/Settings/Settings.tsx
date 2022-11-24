import { BottomBar } from "components";
import Modal from "components/Modal/Modal";
import styles from "./Settings.module.scss";
import { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

const Settings = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [color, setColor] = useColor("hex", "#121212");
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
          {/* Kilometrage + essence */}
          <h3>Customization</h3>
          <p>Choose your interior car's light:</p>

          <div className={styles.radioInputContainer}>
            <label htmlFor="preset" className={styles.label}>
              Preset
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

          <ColorPicker
            width={350}
            height={228}
            color={color}
            onChange={setColor}
            hideHSV
            hideRGB
            dark
          />

          {/* list next part to check */}
        </div>
      )}
      <BottomBar />
    </div>
  );
};

export default Settings;
