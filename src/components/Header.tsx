import styles from "./Header.module.scss";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className={styles.container}>
      <Navigation />
    </header>
  );
}
