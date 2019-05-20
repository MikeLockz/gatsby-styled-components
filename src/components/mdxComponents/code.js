import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import codeTheme from "prism-react-renderer/themes/duotoneDark";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Button, Flash } from "rimble-ui";
import ConnectionBanner from "@rimble/connection-banner";
// import codeTheme from "../../../static/static/prism-ghcolors.css";
import { ThemeProvider, Box } from "rimble-ui";
import defaultTheme from "../../theme";

const localScope = { Button, Flash, ConnectionBanner };

const prismMap = {
  sh: "bash",
  shell: "bash"
};
const Code = ({ is, children, lang = "markdown" }) => {
  // if no `is` default to inline code
  if (!is) {
    console.log("!is", is);
    return (
      <ThemeProvider theme={defaultTheme}>
        <Highlight
          {...defaultProps}
          theme={codeTheme}
          code={children.trim()}
          language={lang}
        >
          {({ className, style, tokens, /*getLineProps,*/ getTokenProps }) => (
            <code className={className} style={{ ...style, display: "inline" }}>
              {tokens.map(line =>
                line.map((token, key) => (
                  <span key="fake-key" {...getTokenProps({ token, key })} />
                ))
              )}
            </code>
          )}
        </Highlight>
      </ThemeProvider>
    );
  }

  // live component rendering
  if (is === "react-live") {
    console.log("scope", localScope);
    return (
      <LiveProvider code={children} scope={localScope}>
        <LiveEditor theme={codeTheme} />

        <LiveError />
        <ThemeProvider theme={defaultTheme}>
          <Box border={1} borderColor={defaultTheme.colors.grey} p={3} my={3}>
            <LivePreview />
          </Box>
        </ThemeProvider>
      </LiveProvider>
    );
  }

  console.log("default render", is === "react-live");
  // otherwise, use prism to render a code block
  return (
    <ThemeProvider theme={defaultTheme}>
      <Highlight
        {...defaultProps}
        theme={codeTheme}
        code={children.trim()}
        language={prismMap[lang] || lang}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={style}
            css={{ overflow: "auto", padding: "1rem", marginTop: "1.5rem" }}
          >
            {tokens.map((line, i) => (
              <div key="fake-key" {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key="fake-key" {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </ThemeProvider>
  );
};

export default Code;
