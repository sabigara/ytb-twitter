import { name, username } from "react-lorem-ipsum";
import Avatar from "./Avatar";
import styles from "./WhoToFollow.module.scss";

export default function WhoToFollow() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Who to follow</h2>
      <WhoToFollowItem />
      <WhoToFollowItem />
      <WhoToFollowItem />
      <a href="#" className={styles.showMore}>
        Show more
      </a>
    </section>
  );
}

function WhoToFollowItem() {
  return (
    <div className={styles.item}>
      <Avatar size={48} />
      <div>
        <div className={styles.item__userName}>{name()}</div>
        <div className={styles.item__userId}>@{username()}</div>
      </div>
      <button className={styles.followButton}>Follow</button>
    </div>
  );
}
