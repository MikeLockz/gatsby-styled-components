import React from "react";
import RimbleGatsbyLink from "../landing/RimbleGatsbyLink";

const _getTitle = (title, isDraft) => (isDraft ? title.slice(0, -1) : title);
const _isDraft = title => title.slice(-1) === `*`;

const createLink = ({
  item,
  onLinkClick,
  isActive,
  isParentOfActiveItem,
  stepsUI,
  customCSS
}) => {
  const isDraft = _isDraft(item.title);
  const title = _getTitle(item.title, isDraft);

  const activeStyle = {
    textDecoration: "underline"
  };
  const inactiveStyle = {
    textDecoration: "none"
  };

  return (
    <span>
      <RimbleGatsbyLink
        onClick={onLinkClick}
        to={item.link}
        style={isActive ? activeStyle : inactiveStyle}
      >
        {stepsUI && <span />}
        {title}
      </RimbleGatsbyLink>
    </span>
  );
};
export default createLink;
