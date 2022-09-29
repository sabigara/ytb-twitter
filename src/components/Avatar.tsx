import styles from "./Avatar.module.scss";

type Props = {
  size?: number;
};

export default function Avatar({ size = 60 }: Props) {
  return (
    <img
      src="https://i.pravatar.cc/100"
      className={styles.container}
      width={size}
    />
  );
}
