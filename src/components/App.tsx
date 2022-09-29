import styles from "./App.module.scss";
import Header from "./Header";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Header />
        <main className={styles.main}>
          <div className={styles.timeline}></div>
          <div className={styles.sidebar}></div>
        </main>
      </div>
    </div>
  );
}

export default App;
