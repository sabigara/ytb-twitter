import styles from "./App.module.scss";
import Header from "./Header";
import TimelineHeader from "./TimelineHeader";
import TweetComposer from "./TweetComposer";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Header />
        <main className={styles.main}>
          <div className={styles.timeline}>
            <TimelineHeader />
            <div className={styles.tweetComposerWrap}>
              <TweetComposer />
            </div>
          </div>
          <div className={styles.sidebar}></div>
        </main>
      </div>
    </div>
  );
}

export default App;
