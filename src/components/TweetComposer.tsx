import React from "react";
import Avatar from "./Avatar";
import styles from "./TweetComposer.module.scss";

type Props = unknown;

export default function TweetComposer(props: Props) {
  return (
    <div className={styles.container}>
      <Avatar size={48} />
      <div>
        <textarea placeholder="What's happening?" className={styles.textarea} />
      </div>
    </div>
  );
}
