import { Avatar as _Avatar } from "react-lorem-ipsum";
import styles from "./Avatar.module.scss";

type Props = {
  size?: number;
  id?: number;
};

export default function Avatar({ size = 60, id }: Props) {
  return (
    <_Avatar
      className={styles.container}
      style={{
        width: size,
        height: size,
      }}
    />
  );
}
