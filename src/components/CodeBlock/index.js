import React, { useEffect, useMemo, useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import styles from "./index.module.css";

export default function CodeBlock({ title, language, code }) {
  const { colorMode } = useColorMode();
  const { siteConfig } = useDocusaurusContext();
  const { theme: lightTheme, darkTheme } = siteConfig.themeConfig.prism;
  const theme = useMemo(
    () => (colorMode === "light" ? lightTheme : darkTheme),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [colorMode]
  );

  // This is a hack for a bug. When the site is loaded in proudction (build, not
  // dev), the code blocks are always light (even in dark mode), until the
  // website is navigated, or theme is toggled. I am not sure what happens but
  // text updates and attributes don't. This causes the Highlight component not
  // to re-render. I am clueless, please contribute if you have the solution.
  let [visisble, setVisible] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setVisible(true));
    return () => clearTimeout(id);
  });

  if (visisble) {
    return (
      <Highlight
        {...defaultProps}
        theme={colorMode === "light" ? lightTheme : darkTheme}
        code={code}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div
            className={clsx("code-block", styles.wrapper)}
            style={{ backgroundColor: theme.plain.backgroundColor }}
          >
            {title && <span className={styles.title}>{title}</span>}
            <pre className={clsx(className, styles.pre)} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
    );
  } else {
    return <></>;
  }
}
