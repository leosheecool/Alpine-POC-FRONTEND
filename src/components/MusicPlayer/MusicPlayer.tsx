import Modal from "components/Modal/Modal";
import React from "react";
import styles from "./MusicPlayer.module.scss";

const logoIcons = {
  deezer:
    "https://ichiban-japan.com/wp-content/uploads/2015/05/logo-deezer.png",
  spotify:
    "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-green-logo-8.png",
  youtube:
    "https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png",
  appleMusic:
    "https://cdn0.iconfinder.com/data/icons/internet-2020/1080/Applemusicandroid-512.png",
};

type Props = {
  playlists: {
    deezer?: string;
    spotify?: string;
    youtube?: string;
    appleMusic?: string;
  };
};

const MusicPlayer = ({ playlists }: Props) => {
  const [isModalShown, setIsModalShown] = React.useState(false);

  const ref = React.useRef<HTMLDivElement>(null);

  const handleOpenModal = () => {
    setIsModalShown(true);
    document.addEventListener("click", handleClickOutside);
  };

  // when click outside of modal, close it
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsModalShown(false);
      document.removeEventListener("click", handleClickOutside);
    }
  };

  const getMusicLogo = (name: string, url: string) => {
    const logo = Object.keys(logoIcons).includes(name)
      ? logoIcons[name as keyof typeof logoIcons]
      : "https://www.vippng.com/png/full/2-21729_music-icon-png-download-music-round-icon-png.png";
    return (
      <a href={url} target="_blank" rel="noreferrer">
        <img src={logo} alt="music" className={styles.musicIcon} />
      </a>
    );
  };

  return (
    <div className={styles.container}>
      <img
        src="https://www.vippng.com/png/full/2-21729_music-icon-png-download-music-round-icon-png.png"
        alt="music"
        className={styles.musicIcon}
        onClick={handleOpenModal}
      />

      <Modal
        isOpen={isModalShown}
        title="Play recommended playlist ?"
        onRequestClose={() => setIsModalShown(false)}
        fitContent
      >
        <div className={styles.iconList}>
          {Object.entries(playlists).map(
            ([name, value]) => getMusicLogo(name, value)
            // <img
            //   src="https://www.vippng.com/png/full/2-21729_music-icon-png-download-music-round-icon-png.png"
            //   alt="music"
            //   className={styles.musicIcon}
            // />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default MusicPlayer;
