import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import codeTheme from "prism-react-renderer/themes/duotoneLight";
import codeDarkTheme from "prism-react-renderer/themes/duotoneDark";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import {
  Flex,
  Loader,
  Button,
  Flash,
  Box,
  ThemeProvider,
  Link as RimbleLink
} from "rimble-ui";
import ConnectionBanner from "@rimble/connection-banner";
// import codeTheme from "../../../static/static/prism-ghcolors.css";
import defaultTheme from "../../theme";

const localScope = { Flex, Loader, Button, Flash, ConnectionBanner };

const prismMap = {
  sh: "bash",
  shell: "bash"
};

class Code extends React.Component {
  state = {
    showCode: false
  };

  toggleShowCode = () => {
    this.setState({ showCode: !this.state.showCode });
  };

  render() {
    const { is, children, lang } = this.props;

    // if no `is` default to inline code
    if (!is) {
      console.log("!is", is);
      return (
        <Box display={"inline-block"}>
          <ThemeProvider theme={defaultTheme}>
            <Highlight
              {...defaultProps}
              theme={codeTheme}
              code={children.trim()}
              language={lang}
            >
              {({
                className,
                style,
                tokens,
                /*getLineProps,*/ getTokenProps
              }) => (
                <code
                  className={className}
                  style={{ ...style, display: "inline" }}
                >
                  {tokens.map(line =>
                    line.map((token, key) => (
                      <span key="fake-key" {...getTokenProps({ token, key })} />
                    ))
                  )}
                </code>
              )}
            </Highlight>
          </ThemeProvider>
        </Box>
      );
    }

    // live component rendering
    if (is === "react-live") {
      console.log("scope", localScope);
      return (
        <LiveProvider
          language={prismMap[lang] || lang}
          code={children.trim()}
          scope={localScope}
        >
          <ThemeProvider theme={defaultTheme}>
            <Box mb={3}>
              <Box
                border={1}
                borderColor={defaultTheme.colors.grey}
                p={3}
                mt={3}
              >
                <LivePreview />
              </Box>
              {this.state.showCode ? (
                <LiveEditor theme={codeDarkTheme} />
              ) : null}
            </Box>
            <RimbleLink
              href="#"
              title="Show code"
              onClick={this.toggleShowCode}
            >
              Edit Code
            </RimbleLink>
          </ThemeProvider>

          <LiveError />
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
  }
}

export default Code;
