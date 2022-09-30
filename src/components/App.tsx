import styles from "./App.module.scss";
import Footer from "./Footer";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Timeline from "./Timeline";
import TimelineHeader from "./TimelineHeader";
import Trends from "./Trends";
import TweetComposer from "./TweetComposer";
import WhoToFollow from "./WhoToFollow";

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
              <Timeline />
            </div>
          </div>
          <div className={styles.sidebar}>
            <div className={styles.searchBarWrap}>
              <SearchBar />
            </div>
            <Trends />
            <WhoToFollow />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
