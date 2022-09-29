import { username, name } from "react-lorem-ipsum";
import Avatar from "./Avatar";
import { ReactComponent as MoreSvg } from "../icons/more.svg";

import styles from "./Account.module.scss";

type Props = unknown;

export default function Account(props: Props) {
  return (
    <button className={styles.container}>
      <Avatar size={40} />
      <div className={styles.texts}>
        <div className={styles.userName}>{name()}</div>
        <div className={styles.userId}>@{username()}</div>
      </div>
      <MoreSvg />
    </button>
  );
}
