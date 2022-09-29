import { ReactComponent as TwitterFillSvg } from "../icons/twitter-fill.svg";
import Navigation from "./Navigation";
import styles from "./Header.module.scss";
import Button from "./Button";
import Account from "./Account";

export default function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.logo}>
        <a href="/home">
          <TwitterFillSvg />
        </a>
      </h1>
      <Navigation />
      <div className={styles.tweetWrap}>
        <Button>Tweet</Button>
      </div>
      <div className={styles.accountWrap}>
        <Account />
      </div>
    </header>
  );
}
