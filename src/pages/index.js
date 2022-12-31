import React from "react";
import Layout from "@theme/Layout";
import Hero from "@site/src/components/Hero/index";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout
      title="This is the way"
      description="Description will go into a meta tag in <head />"
    >
      <Hero />
      <main className={styles.main}></main>
    </Layout>
  );
}
