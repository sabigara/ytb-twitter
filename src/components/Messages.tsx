import { ReactComponent as MessagesAddOutline } from "../icons/message-add-outline.svg";
import { ReactComponent as ChevronUpDouble } from "../icons/chevron-up-double.svg";

import styles from "./Messages.module.scss";

type Props = unknown;

export default function Messages(props: Props) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Messages</h2>
      <div className={styles.buttonList}>
        <button className={styles.button}>
          <MessagesAddOutline className={styles.icon} />
        </button>
        <button className={styles.button}>
          <ChevronUpDouble className={styles.icon} />
        </button>
      </div>
    </section>
  );
}
