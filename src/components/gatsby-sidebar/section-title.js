import React from "react";

const paddingLeft = level => (level === 0 ? level + 1 * 40 : level + 1 * 20);

const TitleButton = ({
  isActive,
  isExpanded,
  item,
  level,
  onSectionTitleClick,
  title,
  uid
}) => (
  <button
    aria-expanded={isExpanded}
    aria-controls={uid}
    onClick={() => onSectionTitleClick(item)}
  >
    <SectionTitle isExpanded={isExpanded} isActive={isActive} level={level}>
      {title}
    </SectionTitle>
  </button>
);

const SplitButton = ({
  createLink,
  isActive,
  isExpanded,
  isParentOfActiveItem,
  item,
  level,
  location,
  onLinkClick,
  onSectionTitleClick,
  uid
}) => (
  <span>
    <span>
      {createLink({
        isActive,
        isExpanded,
        isParentOfActiveItem,
        item,
        location,
        onLinkClick
      })}
    </span>
  </span>
);

const Title = ({ title, level, isActive, isExpanded }) => (
  <div>
    <SectionTitle
      disabled
      isActive={isActive}
      isExpanded={isExpanded}
      level={level}
    >
      {title}
    </SectionTitle>
  </div>
);

const SectionTitle = ({ children, isExpanded, isActive, disabled, level }) => (
  <h3>{children}</h3>
);

export { Title, TitleButton, SplitButton };
