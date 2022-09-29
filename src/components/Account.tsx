import Avatar from "./Avatar";
import { ReactComponent as MoreSvg } from "../icons/more.svg";

import styles from "./Account.module.scss";

type Props = unknown;

export default function Account(props: Props) {
  return (
    <button className={styles.container}>
      <Avatar size={40} />
      <div className={styles.texts}>
        <div className={styles.userName}>John Doe</div>
        <div className={styles.userId}>@john_doe</div>
      </div>
      <MoreSvg />
    </button>
  );
}
