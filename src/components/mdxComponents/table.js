import React from "react";
import { Table as RimbleTable } from "rimble-ui";

export const Table = props => (
  <RimbleTable {...props}>{props.children}</RimbleTable>
);
