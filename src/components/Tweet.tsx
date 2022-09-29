import LoremIpsum, { name, username } from "react-lorem-ipsum";
import Avatar from "./Avatar";
import { ReactComponent as MoreSvg } from "../icons/more.svg";

import styles from "./Tweet.module.scss";

export default function Tweet() {
  return (
    <article className={styles.container}>
      <Avatar size={48} />
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.userName}>{name()}</span>
            <span className={styles.userId}>@{username()}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.time}>
              {Math.ceil(Math.random() * 10)}h
            </span>
          </div>
          <MoreSvg className={styles.more} />
        </div>
        <div className={styles.content}>
          <LoremIpsum
            random
            startWithLoremIpsum={false}
            p={2}
            avgSentencesPerParagraph={2}
            avgWordsPerSentence={6}
          />
        </div>
      </div>
    </article>
  );
}
