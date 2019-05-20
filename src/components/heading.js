import React from "react";
import { Heading as RimbleHeading } from "rimble-ui";

const Heading = ({ as: Component, ...props }) => <RimbleHeading {...props} />;

export default Heading;
