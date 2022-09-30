import styles from "./Footer.module.scss";

const links: readonly { label: string; href: string }[] = [
  {
    label: "Terms of Service",
    href: "/terms",
  },
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Cookie Policy",
    href: "/cookies",
  },
  {
    label: "Accessibility",
    href: "/accessibility",
  },
  {
    label: "Ads Info",
    href: "/ads",
  },
] as const;

export default function Footer() {
  return (
    <footer className={styles.container}>
      <ul className={styles.list}>
        {links.map((item) => (
          <li key={item.href}>
            <a href={item.href} className={styles.anchor}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <small className={styles.copyright}>© 2022 This is Fake, Inc.</small>
    </footer>
  );
}
