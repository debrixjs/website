import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import HeroCodeBlocks from "./code-blocks";
import clsx from "clsx";

export default function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.hero, "grid-bg")}>
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <h1 className={styles.title}>
            <span>{siteConfig.title}</span>
            <span
              className={styles.title__after}
              title="Experimental! (v0.1.0-alpha.x)"
              aria-label="Experimental! (v0.1.0-alpha.x)"
            >
              {/* β! */}alpha!
            </span>
          </h1>
          <mark className={styles.mark}>
            Debrix provides a truly declarative way of building interactive user
            interfaces for the web.
          </mark>{" "}
          <span>
            Enhancments are nativly reactive with the help of proxies.
            Components are compiled into lightweight runtime code. With binders,
            DOM interations are safe and easy to use, and gives you full
            extensibillity.
          </span>
          <div className={styles.buttons}>
            <Link className="button button--primary" to="/docs/intro">
              Get started
            </Link>
            <Link className="button button--secondary" to="/docs/intro">
              Introduction
            </Link>
          </div>
        </div>
        <div className={styles.hero__preview}>
          <HeroCodeBlocks className={styles.code_blocks} />
          <Link href="https://playground.debrix.dev">Try in browser</Link>
        </div>
      </div>
    </header>
  );
}
