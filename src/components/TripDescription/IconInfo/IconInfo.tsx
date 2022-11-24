import React from "react";
import styles from "./IconInfo.module.scss";

type Props = {
  title: string;
  value: string;
  metric: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};

const IconInfo = ({ title, metric, icon, value }: Props) => {
  const Icon = icon;

  return (
    <div className={styles.info}>
      <Icon className={styles.icon} />
      <div className={styles.subTitle}>
        <p>{title}</p>
      </div>
      <div className={styles.infoValue}>
        {value} <span className={styles.infoMetric}>{metric}</span>
      </div>
    </div>
  );
};

export default IconInfo;
