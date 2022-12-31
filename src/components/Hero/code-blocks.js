import React, { useState } from "react";
import styles from "./code-blocks.module.css";
import clsx from "clsx";
import CodeBlock from "../CodeBlock";

const codes = [
  {
    title: "Logic (ViewModel)",
    language: "ts",
    code: `
class extends ViewModel {
  count = 0;

  increment() {
    this.count++;
  }
}
`.trim()
  },
  {
    title: "View (Declarative)",
    language: "html",
    code: `
<p>Count: {count}</p>

<button bind:onclick={increment}>
    Increment
</button>
`.trim()
  }
];

export default function HeroCodeBlocks({ className }) {
  const [focused, focus] = useState(codes.length - 1);

  return (
    <div className={clsx(className, styles.overlap)}>
      {codes.map(({ title, language, code }, i) => (
        <div
          key={i}
          className={clsx(styles.item, focused === i ? styles.focused : "")}
          onMouseEnter={() => focus(i)}
        >
          <CodeBlock title={title} language={language} code={code} />
        </div>
      ))}
    </div>
  );
}
