import React from "react";
import { Link as RimbleLink, Icon, Flex } from "rimble-ui";
import RimbleGatsbyLink from "../landing/RimbleGatsbyLink";
import isAbsoluteUrl from "is-absolute-url";

const Link = ({ to, href, ...props }) => {
  if (typeof href !== "undefined") {
    to = href;
  }

  return isAbsoluteUrl(to) ? (
    <RimbleLink href={to} {...props}>
      <Flex alignItems={"center"}>
        {props.children}
        <Icon name={"Link"} ml={2} />
      </Flex>
    </RimbleLink>
  ) : (
    <RimbleGatsbyLink to={to} {...props}>
      {props.children}
    </RimbleGatsbyLink>
  );
};

export default Link;
