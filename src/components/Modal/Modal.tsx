import React from "react";
import ReactModal from "react-modal";
import crossIcon from "assets/vectors/cross.svg";
import styles from "./Modal.module.scss";
import cn from "classnames";

type Props = ReactModal.Props & {
  title?: string;
  subheader?: React.ReactNode;
  footer?: React.ReactNode;
  icon?: React.ReactNode;
  fitContent: boolean;
  className?: string;
};
const Modal = ({
  title = "",
  subheader,
  footer,
  className,
  icon,
  fitContent,
  children,
  ...props
}: Props) => {
  return (
    <ReactModal
      {...props}
      overlayClassName={styles.overlay}
      className={cn(styles.modal, className, {
        [styles.fitContent]: fitContent,
      })}
    >
      {icon && <div className={styles.iconContainer}>{icon}</div>}
      <div className={styles.content}>
        <header className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {props.onRequestClose && (
            <button className={styles.closeBtn} onClick={props.onRequestClose}>
              <img className={styles.closeIcon} src={crossIcon} alt="close" />
            </button>
          )}
        </header>
        {subheader && <div className={styles.subheader}>{subheader}</div>}
        <div className={styles.body}>{children}</div>
        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </ReactModal>
  );
};

export default Modal;
