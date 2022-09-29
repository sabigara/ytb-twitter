import styles from "./Avatar.module.scss";

type Props = {
  size?: number;
  id?: number;
};

export default function Avatar({ size = 60, id }: Props) {
  return (
    <img
      src={`https://i.pravatar.cc/100${id === undefined ? "" : "?id=" + id}`}
      className={styles.container}
      width={size}
    />
  );
}
