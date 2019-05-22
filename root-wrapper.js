import React from "react";
import mdxComponents from "./src/components/mdxComponents";
import { MDXProvider } from "@mdx-js/react";
import ExampleCard from "./src/components/documentation/ExampleCard";

export const universalWrapRootElement = ({ element }) => (
  <MDXProvider components={{ mdxComponents, ExampleCard }}>
    {element}
  </MDXProvider>
);
