import styles from "./RoadModeSelect.module.scss";

type Props = {
  options: {
    icon: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title: string | undefined;
      }
    >;
    value: string;
  }[];
};

const RoadModeSelect = ({ options }: Props) => {
  return (
    <div className={styles.roadOptionsContainer}>
      {options.map((option) => {
        const Icon = option.icon;
        return (
          <div className={styles.options}>
            {/* <Icon className={styles.icon} /> */}
            <p className={styles.subTitle}>{option.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RoadModeSelect;
