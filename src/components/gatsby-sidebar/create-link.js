import React from "react";
import { Link } from "gatsby";

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

  return (
    <span>
      <Link
        onClick={onLinkClick}
        to={item.link}
        style={{ textDecoration: "none" }}
      >
        {stepsUI && <span />}
        {title}
      </Link>
    </span>
  );
};
export default createLink;
