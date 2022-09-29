import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1></h1>
          <nav> </nav>
        </header>
        <main className={styles.main}>
          <div className={styles.timeline}></div>
          <div className={styles.sidebar}></div>
        </main>
      </div>
    </div>
  );
}

export default App;
