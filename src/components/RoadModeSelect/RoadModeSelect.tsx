import styles from "./RoadModeSelect.module.scss";
import cn from "classnames";

type Props = {
  onChange: (option: string) => void;
  options: {
    icon: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >;
    value: string;
    isActive: boolean;
  }[];
};

const RoadModeSelect = ({ options, onChange: handleOnChange }: Props) => {
  return (
    <div className={styles.roadOptionsContainer}>
      {options.map((option) => {
        const Icon = option.icon;
        return (
          <div
            className={cn(styles.option, {
              [styles.isActive]: option.isActive,
            })}
            onClick={() => handleOnChange(option.value)}
          >
            <Icon className={styles.icon} />
            <p className={styles.subTitle}>{option.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RoadModeSelect;
