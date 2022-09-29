import { ReactComponent as TwitterFillSvg } from "../icons/twitter-fill.svg";
import Navigation from "./Navigation";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.logo}>
        <a href="/home">
          <TwitterFillSvg />
        </a>
      </h1>
      <Navigation />
    </header>
  );
}
