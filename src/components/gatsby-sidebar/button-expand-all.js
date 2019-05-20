import React, { Fragment } from "react";

const ExpandAllButton = ({ onClick, expandAll }) => (
  <button onClick={onClick}>
    {expandAll ? (
      <Fragment>
        <span>Collapse All</span>
      </Fragment>
    ) : (
      <Fragment>
        <span>Expand All</span>
      </Fragment>
    )}
  </button>
);

export default ExpandAllButton;

const Icon = props => <span {...props} />;
