import React from "react";
import mdxComponents from "./src/components/mdxComponents";
import { MDXProvider } from "@mdx-js/react";

export const universalWrapRootElement = ({ element }) => (
  <MDXProvider components={mdxComponents}>{element}</MDXProvider>
);
