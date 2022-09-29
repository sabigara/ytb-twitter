import styles from "./App.module.scss";
import Header from "./Header";
import TimelineHeader from "./TimelineHeader";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Header />
        <main className={styles.main}>
          <div className={styles.timeline}>
            <TimelineHeader />
          </div>
          <div className={styles.sidebar}></div>
        </main>
      </div>
    </div>
  );
}

export default App;
