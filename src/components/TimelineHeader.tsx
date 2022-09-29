import React from "react";
import { ReactComponent as WtfOutlineSvg } from "../icons/wtf-outline.svg";

import styles from "./TimelineHeader.module.scss";

type Props = unknown;

export default function TimelineHeader(props: Props) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Latest Tweets</span>
      <button>
        <WtfOutlineSvg className={styles.icon} />
      </button>
    </div>
  );
}
