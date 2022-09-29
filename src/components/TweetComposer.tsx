import { SvgComponent } from "../types";
import Avatar from "./Avatar";
import styles from "./TweetComposer.module.scss";
import { ReactComponent as ImageOutlineSvg } from "../icons/image-outline.svg";
import { ReactComponent as GifOutlineSvg } from "../icons/gif-outline.svg";
import { ReactComponent as PollOutlineSvg } from "../icons/poll-outline.svg";
import { ReactComponent as EmojiOutlineSvg } from "../icons/emoji-outline.svg";
import { ReactComponent as ScheduleOutlineSvg } from "../icons/schedule-outline.svg";
import { ReactComponent as LocationOutlineSvg } from "../icons/location-outline.svg";
import Button from "./Button";

type Props = unknown;

export default function TweetComposer(props: Props) {
  return (
    <div className={styles.container}>
      <Avatar size={48} />
      <div>
        <div className={styles.upper}>
          <textarea
            placeholder="What's happening?"
            className={styles.textarea}
          />
        </div>
        <div className={styles.lower}>
          <Toolbar />
          <div className={styles.tweetWrap}>
            <Button>Tweet</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

type ToolbarItem = {
  SvgIcon: SvgComponent;
  title: string;
};

const toolbarItems: readonly ToolbarItem[] = [
  {
    SvgIcon: ImageOutlineSvg,
    title: "Media",
  },
  {
    SvgIcon: GifOutlineSvg,
    title: "GIF",
  },
  {
    SvgIcon: PollOutlineSvg,
    title: "Poll",
  },
  {
    SvgIcon: EmojiOutlineSvg,
    title: "Emoji",
  },
  {
    SvgIcon: ScheduleOutlineSvg,
    title: "Schedule",
  },
  {
    SvgIcon: LocationOutlineSvg,
    title: "Location",
  },
];

function Toolbar() {
  return (
    <ul className={styles.toolbar}>
      {toolbarItems.map((item) => (
        <li>
          <button className={styles.toolbar__button}>
            <item.SvgIcon className={styles.toolbar__icon} />
          </button>
        </li>
      ))}
    </ul>
  );
}
