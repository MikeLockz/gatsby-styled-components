import React from "react";
import { Table as RimbleTable } from "rimble-ui";

const lineHeight = 1.5;
export const Table = props => (
  <RimbleTable {...props}>{props.children}</RimbleTable>
);
