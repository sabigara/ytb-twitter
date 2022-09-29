import { ReactComponent as SearchOutlineSvg } from "../icons/search-outline.svg";

import styles from "./SearchBar.module.scss";

export default function SearchBar() {
  return (
    <form className={styles.container}>
      <div className={styles.iconWrap}>
        <SearchOutlineSvg className={styles.icon} />
      </div>
      <input className={styles.input} placeholder="Search Twitter" />
    </form>
  );
}
