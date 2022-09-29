import React from "react";
import { ReactComponent as HomeFillSvg } from "../icons/home-fill.svg";
import { ReactComponent as HomeOutlineSvg } from "../icons/home-outline.svg";
import { ReactComponent as ExploreFillSvg } from "../icons/explore-fill.svg";
import { ReactComponent as ExploreOutlineSvg } from "../icons/explore-outline.svg";
import { ReactComponent as NotificationFillSvg } from "../icons/notification-fill.svg";
import { ReactComponent as NotificationOutlineSvg } from "../icons/notification-outline.svg";
import { ReactComponent as MessageFillSvg } from "../icons/message-fill.svg";
import { ReactComponent as MessageOutlineSvg } from "../icons/message-outline.svg";
import { ReactComponent as BookmarkFillSvg } from "../icons/bookmark-fill.svg";
import { ReactComponent as BookmarkOutlineSvg } from "../icons/bookmark-outline.svg";
import { ReactComponent as ListFillSvg } from "../icons/list-fill.svg";
import { ReactComponent as ListOutlineSvg } from "../icons/list-outline.svg";
import { ReactComponent as ProfileFillSvg } from "../icons/profile-fill.svg";
import { ReactComponent as ProfileOutlineSvg } from "../icons/profile-outline.svg";
import { ReactComponent as MoreCircleSvg } from "../icons/more-circle.svg";

import styles from "./Navigation.module.scss";
import { SvgComponent } from "../types";

type Props = unknown;

const items: readonly ItemProps[] = [
  {
    href: "/home",
    title: "Home",
    isActive: true,
    SvgIconActive: HomeFillSvg,
    SvgIconInactive: HomeOutlineSvg,
  },
  {
    href: "/explore",
    title: "Explore",
    SvgIconActive: ExploreFillSvg,
    SvgIconInactive: ExploreOutlineSvg,
  },
  {
    href: "/notifications",
    title: "Notifications",
    SvgIconActive: NotificationFillSvg,
    SvgIconInactive: NotificationOutlineSvg,
  },
  {
    href: "/messages",
    title: "Messages",
    SvgIconActive: MessageFillSvg,
    SvgIconInactive: MessageOutlineSvg,
  },
  {
    href: "/bookmarks",
    title: "Bookmarks",
    SvgIconActive: BookmarkFillSvg,
    SvgIconInactive: BookmarkOutlineSvg,
  },
  {
    href: "/lists",
    title: "Lists",
    SvgIconActive: ListFillSvg,
    SvgIconInactive: ListOutlineSvg,
  },
  {
    href: "/profile",
    title: "Profile",
    SvgIconActive: ProfileFillSvg,
    SvgIconInactive: ProfileOutlineSvg,
  },
  {
    href: "/more",
    title: "More",
    SvgIconActive: MoreCircleSvg,
    SvgIconInactive: MoreCircleSvg,
  },
] as const;

export default function Navigation(props: Props) {
  return (
    <nav>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.href}>
            <NavigationItem {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

type ItemProps = {
  href: string;
  title: string;
  isActive?: boolean;
  SvgIconActive: SvgComponent;
  SvgIconInactive: SvgComponent;
};

function NavigationItem({
  href,
  title,
  isActive,
  SvgIconActive,
  SvgIconInactive,
}: ItemProps) {
  return (
    <a href={href} className={styles.item}>
      <div className={styles.item__inner}>
        {isActive ? (
          <SvgIconActive className={styles.item__icon} />
        ) : (
          <SvgIconInactive className={styles.item__icon} />
        )}
        <span className={styles[`item__title${isActive ? "--active" : ""}`]}>
          {title}
        </span>
      </div>
    </a>
  );
}
