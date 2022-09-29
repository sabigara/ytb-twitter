import { loremIpsum } from "react-lorem-ipsum";
import styles from "./Trends.module.scss";

export default function Trends() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Trends for you</h2>
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <a href="#" className={styles.showMore}>
        Show more
      </a>
    </section>
  );
}

function TrendItem() {
  return (
    <div className={styles.item}>
      <div className={styles.item__location}>Trending in the Earth</div>
      <div className={styles.item__title}>
        {loremIpsum({
          avgSentencesPerParagraph: 1,
          avgWordsPerSentence: 2,
          startWithLoremIpsum: false,
          random: true,
        })[0].replace(/(\.|\?)/g, "")}
      </div>
      <div className={styles.item__numOfTweets}>3.141 Tweets</div>
    </div>
  );
}
